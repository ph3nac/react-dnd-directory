import { ContentType, DataType } from '@/@types/contentType';
import { SorByIndex } from './SortByIndex';

export const ContentsIdArray = (
  data: DataType,
  droppingParentId: string | undefined,
): string[] => {
  const sameDirContents: ContentType[] = [];

  Object.keys(data).forEach((key, i) => {
    const content = data[key];
    if (content.parentId === droppingParentId) {
      sameDirContents.push(content);
    }
  });

  sameDirContents.sort(SorByIndex);

  const contentsIdArray: string[] = [];

  sameDirContents.forEach((content) => {
    contentsIdArray.push(content.id);
  });
  return contentsIdArray;
};
