import { StateSchema } from '../../../../StoreProvider';

export const getDroppedIds = (state: StateSchema) => state.elements.droppedIds;
