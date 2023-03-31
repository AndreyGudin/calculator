import { createSlice } from '@reduxjs/toolkit';
import { Mode, ModeSchema } from '../types/modeSchema';

const initialState: ModeSchema = {
  currentMode: Mode.CONSTRUCTOR
};

export const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    switchMode: (state, payload) => {
      state.currentMode = payload.payload;
    }
  }
});

export const { actions: modeActions } = modeSlice;
export const { reducer: modeReducer } = modeSlice;
