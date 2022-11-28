export type FileType = {
  id: string;
  type: 'file';
  parentId: string | undefined;
  text: string;
  index: number;
};

export type DirType = {
  id: string;
  type: 'dir';
  parentId: string | undefined;
  text: string;
  index: number;
};
export type ContentType = FileType | DirType;

export type DataType = {
  [id: string]: ContentType;
};
