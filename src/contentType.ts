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
