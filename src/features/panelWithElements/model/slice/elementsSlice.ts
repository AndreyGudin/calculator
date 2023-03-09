import { createSlice } from '@reduxjs/toolkit';
import { ElementsSchema } from '../../types/elementsSchema';

const initialState: ElementsSchema = {
  value: null
};

export const elementsSlice = createSlice({
  name: 'elements',
  initialState,
  reducers: {
    save: (state, payload) => {
      state.value = payload.payload;
    }
  }
});

export const { actions: elementsActions } = elementsSlice;
export const { reducer: elementsReducer } = elementsSlice;
