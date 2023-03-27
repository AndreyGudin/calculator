import { ModeSchema } from '../../../../entities/modeSwitcher/';
import { ElementsSchema } from '../../../../features/panelWithElements';
import { CalculatorScheme } from '../../../../shared/ui/Button/model/types/calculatorScheme';
import { ConstructorSchema } from '../../DndProvider/model/types/constructorSchema';

export interface StateSchema {
  currentElement: ElementsSchema;
  elements: ConstructorSchema;
  mode: ModeSchema;
  calculator: CalculatorScheme;
}
