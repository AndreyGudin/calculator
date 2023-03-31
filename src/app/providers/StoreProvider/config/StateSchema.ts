import { ModeSchema } from '../../../../entities/modeSwitcher/';
import { ElementsSchema } from '../../../../features/panelWithElements';
import { CalculatorScheme } from '../../../../shared/ui/Button';
import { ConstructorSchema } from '../../DndProvider';

export interface StateSchema {
  currentElement: ElementsSchema;
  elements: ConstructorSchema;
  mode: ModeSchema;
  calculator: CalculatorScheme;
}
