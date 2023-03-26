import { createSlice } from '@reduxjs/toolkit';
import { CalculatorScheme } from '../types/calculatorScheme';

const initialState: CalculatorScheme = {
  operation: null,
  result: null,
  value: null
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    pressDigitButton: (state, payload) => {
      state.value = payload.payload;
    },
    pressOperationButton: (state, payload) => {
      state.operation = payload.payload;
    },
    printResult: (state, payload) => {
      state.result = payload.payload;
    }
  }
});

export const { actions: calculatorActions } = calculatorSlice;
export const { reducer: calculatorReducer } = calculatorSlice;
