import { DataType } from '@/@types/contentType';
import { OrderedDirData } from '../OrderedDirData';

describe('OrderedDirData', () => {
  test('test1', () => {
    expect(OrderedDirData(DataMock, dir1Id, file1Id)).toEqual(ans1);
  });
});
