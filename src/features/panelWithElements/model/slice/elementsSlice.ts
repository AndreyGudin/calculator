import { createSlice } from '@reduxjs/toolkit';
import { ElementsSchema } from '../types/elementsSchema';

const initialState: ElementsSchema = {
  value: []
};

export const elementsSlice = createSlice({
  name: 'currentElement',
  initialState,
  reducers: {
    save: (state, payload) => {
      console.log('first');
      state.value = [...state.value, payload.payload];
    }
  }
});

export const { actions: elementsActions } = elementsSlice;
export const { reducer: elementsReducer } = elementsSlice;
