import { createSelector } from '@reduxjs/toolkit';
import { getElements } from '../getElements/getElements';

export const getElementsIds = createSelector(getElements, (elements) =>
  elements.map((elem) => elem.id)
);
