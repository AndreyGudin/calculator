import { configureStore } from '@reduxjs/toolkit';
import { elementsReducer } from '../../../../features/panelWithElements/model/slice/elementsSlice';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      elements: elementsReducer
    }
  });
}
