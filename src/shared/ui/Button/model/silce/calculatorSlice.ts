import { createSlice } from '@reduxjs/toolkit';
import { CalculatorScheme } from '../types/calculatorScheme';

const initialState: CalculatorScheme = {
  operation: null,
  result: null,
  value1: null,
  value2: null
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    saveValue1: (state, payload) => {
      state.value1 = payload.payload;
    },
    saveValue2: (state, payload) => {
      state.value2 = payload.payload;
    },
    pressOperationButton: (state, payload) => {
      state.operation = payload.payload;
    },
    printResult: (state, payload) => {
      state.result = payload.payload;
    },
    clearValues: (state) => {
      state.value1 = null;
      state.value2 = null;
    }
  }
});

export const { actions: calculatorActions } = calculatorSlice;
export const { reducer: calculatorReducer } = calculatorSlice;
