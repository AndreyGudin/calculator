import { createSlice } from '@reduxjs/toolkit';
import { ConstructorSchema } from '../types/constructorSchema';

const initialState: ConstructorSchema = {
  value: [],
  dropped: false
};

export const constructorSlice = createSlice({
  name: 'constructor',
  initialState,
  reducers: {
    update: (state, payload) => {
      console.log('first');
      state.value = [...state.value, payload.payload];
    },
    switch: (state, payload) => {
      state.dropped = payload.payload;
    }
  }
});

export const { actions: constructorActions } = constructorSlice;
export const { reducer: constructorReducer } = constructorSlice;
