// ------------------------------------------------------------
// OrderedFileData
// ------------------------------------------------------------

import { ContentType, DataType } from '@/@types/contentType';
import { SorByIndex } from './SortByIndex';

export const OrderedFileData = (
  data: DataType,
  droppingId: string,
  draggingId: string,
): DataType => {
  const droppingParentId = data[droppingId].parentId;
  const draggingParentId = data[draggingId].parentId;

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

  const droppingIndex = data[droppingId].index;
  const draggingIndex = data[draggingId].index;
  let spliceIndex = droppingIndex;

  if (draggingParentId !== droppingParentId) {
    contentsIdArray.splice(droppingIndex, 0, draggingId);
  } else if (draggingParentId === droppingParentId) {
    if (draggingIndex < droppingIndex) spliceIndex = droppingIndex - 1;
    contentsIdArray.splice(draggingIndex, 1);
    contentsIdArray.splice(spliceIndex, 0, draggingId);
  }

  const retData: DataType = JSON.parse(JSON.stringify(data)) as DataType;

  contentsIdArray.forEach((contentId, i) => {
    retData[contentId].index = i;
  });
  retData[draggingId].parentId = data[droppingId].parentId;

  return retData;
};
