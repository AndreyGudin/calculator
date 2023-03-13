import { createSlice } from '@reduxjs/toolkit';
import { ConstructorSchema } from '../types/constructorSchema';

const initialState: ConstructorSchema = {
  value: [],
  sortableItems: [],
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
    change: (state, payload) => {
      state.sortableItems = payload.payload;
    }
  }
});

export const { actions: constructorActions } = constructorSlice;
export const { reducer: constructorReducer } = constructorSlice;
