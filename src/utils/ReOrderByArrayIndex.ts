import { DataType } from '@/@types/contentType';

export const ReOrderByArrayIndex = (
  data: DataType,
  idArray: string[],
): DataType => {
  const retData: DataType = JSON.parse(JSON.stringify(data)) as DataType;

  idArray.forEach((contentId, i) => {
    retData[contentId].index = i;
  });
  return retData;
};
