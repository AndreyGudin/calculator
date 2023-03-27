import { StateSchema } from '../../../../../../app/providers/StoreProvider';

export const getCurrentOperation = (state: StateSchema) =>
  state.calculator.operation;
