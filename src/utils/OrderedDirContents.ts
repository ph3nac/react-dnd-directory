// ------------------------------------------------------------
// OrderedDirContents
// ------------------------------------------------------------

import { ContentType, DataType } from '@/@types/contentType';
import { SorByIndex } from './SortByIndex';

export const OrderedDirContents = (
  data: DataType,
  currentId: string | undefined,
) => {
  const dirContents: ContentType[] = [];
  Object.keys(data).forEach((key, i) => {
    const content = data[key];
    if (content.parentId === currentId) {
      dirContents.push(content);
    }
  });
  dirContents.sort(SorByIndex);
  return dirContents;
};
