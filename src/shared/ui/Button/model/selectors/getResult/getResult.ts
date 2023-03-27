import { StateSchema } from '../../../../../../app/providers/StoreProvider';

export const getResult = (state: StateSchema) => state.calculator.result;
