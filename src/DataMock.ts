import cuid from 'cuid';
import { DataType } from './contentType';

const file1Id = cuid();
const file2Id = cuid();
const dir1Id = cuid();
const dir2Id = cuid();

export const DataMock: DataType = {
  [file1Id]: {
    id: file1Id,
    type: 'file',
    parentId: undefined,
    text: 'file1',
  },
  [dir1Id]: {
    id: dir1Id,
    type: 'dir',
    parentId: undefined,
    text: 'dir1',
  },
  [file2Id]: {
    id: file2Id,
    type: 'file',
    parentId: dir1Id,
    text: 'file2',
  },
  [dir2Id]: {
    id: dir2Id,
    type: 'dir',
    parentId: dir1Id,
    text: 'dir2',
  },
};
