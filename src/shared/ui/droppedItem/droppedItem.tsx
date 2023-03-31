import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Display } from '../../../entities/Display/ui/Display';
import { Button } from '../Button';
import { ElementsData } from '../Container';

interface DroppedItemProps {
  elements: ElementsData;
}

export const DroppedItem: FC<DroppedItemProps> = ({
  elements
}: DroppedItemProps) => {
  let component = null;
  if (elements.type === 'button')
    component = (
      <Button className={elements.theme} key={uuidv4()}>
        {elements.text}
      </Button>
    );
  if (elements.type === 'display')
    component = <Display text={elements.text} key={uuidv4()} />;
  return component;
};
