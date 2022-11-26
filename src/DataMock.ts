import { DataT } from './contentType';

export const DataMock: DataT = {
  id: 1,
  contents: [
    {
      type: 'file',
      id: 1,
      text: 'file1',
    },
    {
      type: 'dir',
      id: 2,
      text: 'dir1',
      contents: [
        {
          type: 'file',
          id: 3,
          text: 'file2',
        },
        {
          type: 'dir',
          id: 4,
          text: 'dir2',
          contents: [],
        },
      ],
    },
  ],
};
