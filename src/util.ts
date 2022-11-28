import { ContentType, DataType } from './@types/contentType';

export const moveContent = (dragId: string, hoverId: string) => {};

export const isAncestor = (
  draggingId: string,
  droppingId: string | undefined,
  data: DataType,
): boolean => {
  if (droppingId === undefined) return false;
  if (draggingId === data[droppingId].parentId) return true;
  isAncestor(draggingId, data[droppingId].parentId, data);
  return false;
};

const sorByIndex = (elem1: ContentType, elem2: ContentType): number => {
  if (elem1.index < elem2.index) {
    return -1;
  }
  if (elem1.index > elem2.index) {
    return 1;
  }
  return 0;
};

export const orderedData = (
  data: DataType,
  droppingId: string,
  draggingId: string,
): DataType => {
  const droppingParentId = data[draggingId].parentId;
  const sameDirContents: ContentType[] = [];
  Object.keys(data).forEach((key, i) => {
    const content = data[key];
    if (content.parentId === droppingParentId) {
      sameDirContents.push(content);
    }
  });
  sameDirContents.sort(sorByIndex);
  const contentsIdArray: string[] = [];
  sameDirContents.forEach((content) => {
    contentsIdArray.push(content.id);
  });

  const droppingIndex = data[droppingId].index;
  contentsIdArray.splice(droppingIndex, 0, draggingId);

  const retData = data;
  contentsIdArray.forEach((contentId, i) => {
    retData[contentId].index = i;
  });
  retData[draggingId].parentId = data[droppingId].parentId;
  return retData;
};
