import { StateSchema } from '../../../../../../app/providers/StoreProvider';

export const getValues = (state: StateSchema) => {
  return { value1: state.calculator.value1, value2: state.calculator.value2 };
};
