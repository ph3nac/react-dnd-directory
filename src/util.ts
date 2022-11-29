import { ContentType, DataType } from './@types/contentType';

export const moveContent = (dragId: string, hoverId: string) => {};

// ------------------------------------------------------------
// isAncestor
// ------------------------------------------------------------

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

// ------------------------------------------------------------
// sortByIndex
// ------------------------------------------------------------
const sorByIndex = (elem1: ContentType, elem2: ContentType): number => {
  if (elem1.index < elem2.index) {
    return -1;
  }
  if (elem1.index > elem2.index) {
    return 1;
  }
  return 0;
};

// ------------------------------------------------------------
// OrderedDirContents
// ------------------------------------------------------------
export const OrderedDirContents = (data: DataType, currentId: string) => {
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

// ------------------------------------------------------------
// OrderedFileData
// ------------------------------------------------------------
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

  sameDirContents.sort(sorByIndex);

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

// ------------------------------------------------------------
// OrderedDirData
// ------------------------------------------------------------
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

  sameDirContents.sort(sorByIndex);

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
