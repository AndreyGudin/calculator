import { ConstructorSchema } from '../../../../features/panelWithActions';
import { ElementsSchema } from '../../../../features/panelWithElements';

export interface StateSchema {
  currentElement: ElementsSchema;
  elements: ConstructorSchema;
}
