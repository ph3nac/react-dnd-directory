// export type FileT = {
//   id: string;
//   text: string;
//   type: 'file';
// };

// export type DirT = {
//   id: string;
//   text: string;
//   type: 'dir';
//   contents: ContentT[];
// };

// export type ContentT = FileT | DirT;

// export type DataT = {
//   id: string;
//   contents: ContentT[] | [];
// };

export type FileType = {
  id: string;
  type: 'file';
  parentId: string | undefined;
  text: string;
};

export type DirType = {
  id: string;
  type: 'dir';
  parentId: string | undefined;
  text: string;
};
type ContentType = FileType | DirType;

export type DataType = {
  [id: string]: ContentType;
};
