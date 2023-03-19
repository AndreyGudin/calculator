import { configureStore } from '@reduxjs/toolkit';
import { modeReducer } from '../../../../entities/modeSwitcher/model/slice';
import { elementsReducer } from '../../../../features/panelWithElements/model/slice/elementsSlice';
import { constructorReducer } from '../../DndProvider/model/slice/constructorSlice';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      currentElement: elementsReducer,
      elements: constructorReducer,
      mode: modeReducer
    },
    devTools: true
  });
}
