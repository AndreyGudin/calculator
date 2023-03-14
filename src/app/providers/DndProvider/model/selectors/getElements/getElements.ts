import { StateSchema } from '../../../../StoreProvider';

export const getElements = (state: StateSchema) => state.elements.value;
