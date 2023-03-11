import { configureStore } from '@reduxjs/toolkit';
import { elementsReducer } from '../../../../features/panelWithElements/model/slice/elementsSlice';
import { constructorReducer } from '../../DndProvider/model/slice/constructorSlice';
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
