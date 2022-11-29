// ------------------------------------------------------------
// OrderedFileData
// ------------------------------------------------------------

import { DataType } from '@/@types/contentType';
import { ContentsIdArray } from './ContentsIdArray';

export const OrderedFileData = (
  data: DataType,
  droppingId: string,
  draggingId: string,
): DataType => {
  const droppingParentId = data[droppingId].parentId;
  const draggingParentId = data[draggingId].parentId;

  const contentsIdArray = ContentsIdArray(data, droppingParentId);

  const droppingIndex = data[droppingId].index;
  const draggingIndex = data[draggingId].index;
  let spliceIndex = droppingIndex;

  const retData: DataType = JSON.parse(JSON.stringify(data)) as DataType;

  if (draggingParentId !== droppingParentId) {
    const draggingParentContentsIdArray = ContentsIdArray(
      data,
      draggingParentId,
    );

    draggingParentContentsIdArray.splice(draggingIndex, 1);
    contentsIdArray.splice(droppingIndex, 0, draggingId);

    draggingParentContentsIdArray.forEach((contentId, i) => {
      retData[contentId].index = i;
    });

    retData[draggingId].parentId = data[droppingId].parentId;
  } else if (draggingParentId === droppingParentId) {
    if (draggingIndex < droppingIndex) spliceIndex = droppingIndex - 1;
    contentsIdArray.splice(draggingIndex, 1);
    contentsIdArray.splice(spliceIndex, 0, draggingId);
  }

  contentsIdArray.forEach((contentId, i) => {
    retData[contentId].index = i;
  });
  return retData;
};
