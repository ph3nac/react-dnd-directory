/** @jsxImportSource @emotion/react */
import { ContentType, DataType } from '@/@types/contentType';

const sorByIndex = (elem1: ContentType, elem2: ContentType): number => {
  if (elem1.index < elem2.index) {
    return -1;
  }
  if (elem1.index > elem2.index) {
    return 1;
  }
  return 0;
};

export const DirContents = (data: DataType, currentId: string) => {
  const dirContents: ContentType[] = [];
  Object.keys(data).forEach((key, i) => {
    const content = data[key];
    if (content.parentId === currentId) {
      dirContents.push(content);
    }
  });
  dirContents.sort(sorByIndex);
  return dirContents;
};
