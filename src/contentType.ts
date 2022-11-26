export type FileT = {
  id: number;
  text: string;
  type: 'file';
};

export type DirT = {
  id: number;
  text: string;
  type: 'dir';
  contents: ContentT[];
};

export type ContentT = FileT | DirT;
