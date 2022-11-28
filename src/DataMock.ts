import cuid from 'cuid';
import { DataType } from './@types/contentType';

export const file1Id = cuid();
export const file2Id = cuid();
export const dir1Id = cuid();
export const dir2Id = cuid();

export const DataMock: DataType = {
  [file1Id]: {
    id: file1Id,
    type: 'file',
    parentId: undefined,
    text: 'file1',
    index: 0,
  },
  [dir1Id]: {
    id: dir1Id,
    type: 'dir',
    parentId: undefined,
    text: 'dir1',
    index: 1,
  },
  [file2Id]: {
    id: file2Id,
    type: 'file',
    parentId: dir1Id,
    text: 'file2',
    index: 0,
  },
  [dir2Id]: {
    id: dir2Id,
    type: 'dir',
    parentId: dir1Id,
    text: 'dir2',
    index: 1,
  },
};
