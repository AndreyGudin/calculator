import { ElementsSchema } from '../../../../features/panelWithElements';
import { ConstructorSchema } from '../../DndProvider/model/types/constructorSchema';

export interface StateSchema {
  currentElement: ElementsSchema;
  elements: ConstructorSchema;
}
