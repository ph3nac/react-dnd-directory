// ------------------------------------------------------------
// OrderedDirData
// ------------------------------------------------------------

import { ContentType, DataType } from '@/@types/contentType';
import { SorByIndex } from './SortByIndex';

export const OrderedDirData = (
  data: DataType,
  droppingId: string,
  draggingId: string,
): DataType => {
  const droppingParentId = data[droppingId].parentId;

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

  contentsIdArray.splice(0, 0, draggingId);

  const retData = data;
  contentsIdArray.forEach((contentId, i) => {
    retData[contentId].index = i;
  });

  retData[draggingId].parentId = droppingId;

  return retData;
};
