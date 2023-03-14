import { ElementStructure } from '../../../../../shared/ui/Container/types';

export interface ConstructorSchema {
  value: ElementStructure[];
  droppedIds: Record<string, boolean>;
  dropped: boolean;
}

export interface DroppedIdsPayload {
  id: string;
  dropped: boolean;
}
