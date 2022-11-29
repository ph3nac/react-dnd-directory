// ------------------------------------------------------------
// OrderedDirData
// ------------------------------------------------------------

import { DataType } from '@/@types/contentType';
import { ContentsIdArray } from './ContentsIdArray';
import { ReOrderByArrayIndex } from './ReOrderByArrayIndex';

export const OrderedDirData = (
  data: DataType,
  droppingId: string,
  draggingId: string,
): DataType => {
  const draggingParentId = data[draggingId].parentId;
  const droppingDirIdArray: string[] = ContentsIdArray(data, droppingId);

  const draggingIndex = data[draggingId].index;
  let retData: DataType = JSON.parse(JSON.stringify(data)) as DataType;

  if (draggingParentId === droppingId) {
    droppingDirIdArray.splice(draggingIndex, 1);
    droppingDirIdArray.splice(0, 0, draggingId);
  } else if (draggingParentId !== droppingId) {
    const draggingParentIdArray = ContentsIdArray(data, draggingParentId);
    draggingParentIdArray.splice(draggingIndex, 1);
    droppingDirIdArray.splice(0, 0, draggingId);

    retData = ReOrderByArrayIndex(data, draggingParentIdArray);

    retData[draggingId].parentId = droppingId;
  }

  retData = ReOrderByArrayIndex(retData, droppingDirIdArray);

  return retData;
};
