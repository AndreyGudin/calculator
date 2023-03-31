import { configureStore } from '@reduxjs/toolkit';

import { modeReducer } from '../../../../entities/modeSwitcher';
import { elementsReducer } from '../../../../features/PanelWithElements';
import { calculatorReducer } from '../../../../shared/ui/Button';
import { constructorReducer } from '../../DndProvider';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      currentElement: elementsReducer,
      elements: constructorReducer,
      mode: modeReducer,
      calculator: calculatorReducer
    },
    devTools: true
  });
}
