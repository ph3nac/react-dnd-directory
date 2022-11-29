import { dir1Id, dir2Id, file1Id, file2Id, file3Id, file4Id } from './DataMock';
import { DataType } from './@types/contentType';
import { OrderedFileData } from './utils/OrderedFileData';

describe('OrderedFileData', () => {
  const testMock: DataType = {
    [file1Id]: {
      id: file1Id,
      type: 'file',
      parentId: '1',
      text: 'file1',
      index: 0,
    },
    [file2Id]: {
      id: file2Id,
      type: 'file',
      parentId: '1',
      text: 'file2',
      index: 1,
    },
    [file3Id]: {
      id: file3Id,
      type: 'file',
      parentId: '1',
      text: 'file3',
      index: 2,
    },
    [file4Id]: {
      id: file4Id,
      type: 'file',
      parentId: '1',
      text: 'file4',
      index: 3,
    },
  };
  const test2Mock: DataType = {
    [file1Id]: {
      id: file1Id,
      type: 'file',
      parentId: '1',
      text: 'file1',
      index: 0,
    },
    [file2Id]: {
      id: file2Id,
      type: 'file',
      parentId: '1',
      text: 'file2',
      index: 1,
    },
    [file3Id]: {
      id: file3Id,
      type: 'file',
      parentId: '1',
      text: 'file3',
      index: 2,
    },
    [file4Id]: {
      id: file4Id,
      type: 'file',
      parentId: '1',
      text: 'file4',
      index: 3,
    },
  };

  const ans1Mock: DataType = {
    [file1Id]: {
      id: file1Id,
      type: 'file',
      parentId: '1',
      text: 'file1',
      index: 1,
    },
    [file2Id]: {
      id: file2Id,
      type: 'file',
      parentId: '1',
      text: 'file2',
      index: 2,
    },
    [file3Id]: {
      id: file3Id,
      type: 'file',
      parentId: '1',
      text: 'file3',
      index: 0,
    },
    [file4Id]: {
      id: file4Id,
      type: 'file',
      parentId: '1',
      text: 'file4',
      index: 3,
    },
  };

  const ans2Mock: DataType = {
    [file1Id]: {
      id: file1Id,
      type: 'file',
      parentId: '1',
      text: 'file1',
      index: 1,
    },
    [file2Id]: {
      id: file2Id,
      type: 'file',
      parentId: '1',
      text: 'file2',
      index: 0,
    },
    [file3Id]: {
      id: file3Id,
      type: 'file',
      parentId: '1',
      text: 'file3',
      index: 2,
    },
    [file4Id]: {
      id: file4Id,
      type: 'file',
      parentId: '1',
      text: 'file4',
      index: 3,
    },
  };

  test('test1', () => {
    expect(OrderedFileData(testMock, file1Id, file3Id)).toEqual(ans1Mock);
  });
  test('test2', () => {
    expect(OrderedFileData(test2Mock, file3Id, file1Id)).toEqual(ans2Mock);
  });
});
