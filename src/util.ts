import { DataType } from './contentType';

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
