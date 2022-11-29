// ------------------------------------------------------------
// isAncestor
// ------------------------------------------------------------

import { DataType } from '@/@types/contentType';

export const IsAncestor = (
  draggingId: string,
  droppingId: string | undefined,
  data: DataType,
): boolean => {
  if (droppingId === undefined) return false;
  if (draggingId === data[droppingId].parentId) return true;
  IsAncestor(draggingId, data[droppingId].parentId, data);
  return false;
};
