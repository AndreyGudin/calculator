import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CalculatorScheme } from '../types/calculatorScheme';

const initialState: CalculatorScheme = {
  operation: null,
  result: '0',
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
    printResult: (state, payload: PayloadAction<string>) => {
      const result = payload.payload;
      let textToDisplay = result.length > 10 ? (+result).toFixed(9) : result;
      console.log(textToDisplay);
      if (textToDisplay === 'NaN' || textToDisplay === 'Infinity')
        textToDisplay = 'Не определенно';
      state.result = textToDisplay;
    },
    clearValues: (state) => {
      state.value1 = null;
      state.value2 = null;
    }
  }
});

export const { actions: calculatorActions } = calculatorSlice;
export const { reducer: calculatorReducer } = calculatorSlice;
