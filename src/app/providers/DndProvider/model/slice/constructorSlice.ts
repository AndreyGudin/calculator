import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ConstructorSchema,
  DroppedIdsPayload
} from '../types/constructorSchema';

const initialState: ConstructorSchema = {
  value: [],
  droppedIds: {},
  dropped: false
};

export const constructorSlice = createSlice({
  name: 'constructor',
  initialState,
  reducers: {
    add: (state, payload) => {
      state.value = [...state.value, payload.payload];
    },
    update: (state, payload) => {
      state.value = [...payload.payload];
    },
    switch: (state, payload) => {
      state.dropped = payload.payload;
    },
    dropped: (state, payload: PayloadAction<DroppedIdsPayload>) => {
      state.droppedIds[payload.payload.id] = payload.payload.dropped;
    }
  }
});

export const { actions: constructorActions } = constructorSlice;
export const { reducer: constructorReducer } = constructorSlice;
