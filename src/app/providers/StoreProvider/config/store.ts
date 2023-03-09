import { configureStore } from '@reduxjs/toolkit';
import { constructorReducer } from '../../../../features/panelWithActions/model/slice/constructorSlice';
import { elementsReducer } from '../../../../features/panelWithElements/model/slice/elementsSlice';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      currentElement: elementsReducer,
      elements: constructorReducer
    },
    devTools: true
  });
}
