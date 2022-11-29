// ------------------------------------------------------------
// sortByIndex
// ------------------------------------------------------------

import { ContentType } from '@/@types/contentType';

export const SorByIndex = (elem1: ContentType, elem2: ContentType): number => {
  if (elem1.index < elem2.index) {
    return -1;
  }
  if (elem1.index > elem2.index) {
    return 1;
  }
  return 0;
};
