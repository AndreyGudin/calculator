import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '../../../../StoreProvider';

export const getElements = (state: StateSchema) => state.elements.value;
