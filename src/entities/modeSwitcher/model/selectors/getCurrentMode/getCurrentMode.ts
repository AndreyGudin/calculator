import { StateSchema } from '../../../../../app/providers/StoreProvider';

export const getCurrentMode = (state: StateSchema) => state.mode.currentMode;
