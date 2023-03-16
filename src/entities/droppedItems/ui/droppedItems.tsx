import { FC } from 'react';

import { ElementStructure } from '../../../shared/ui/Container/types';
import { Container } from '../../../shared/ui/Container/ui/Container';
import { DroppedItem } from '../../../shared/ui/droppedItem/droppedItem';

interface DroppedItemsProps {
  items: ElementStructure[];
}

export const DroppedItems: FC<DroppedItemsProps> = ({
  items
}: DroppedItemsProps) => {
  return (
    <>
      {items.map((element) => {
        return (
          <Container id={element.id} key={element.id} disabled={false}>
            {element.elem.map((e) => {
              return <DroppedItem elements={e} />;
            })}
          </Container>
        );
      })}
    </>
  );
};
