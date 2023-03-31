import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { DroppedItem } from '../../../shared/ui/DroppedItem/DroppedItem';
import { getCurrentMode } from '../../modeSwitcher';
import {
  constructorActions,
  getElements
} from '../../../app/providers/DndProvider';
import { Container, ElementStructure } from '../../../shared/ui/Container';

interface DroppedItemsProps {
  items: ElementStructure[];
}

export const DroppedItems: FC<DroppedItemsProps> = ({
  items
}: DroppedItemsProps) => {
  const droppedElements = useSelector(getElements);
  const currentMode = useSelector(getCurrentMode);
  const dispatch = useDispatch();

  const onDoubleClickHandler = (id: string) => {
    const elements: ElementStructure[] = structuredClone(droppedElements);
    const indexToDelete = elements.findIndex((elem) => elem.id === id);
    if (currentMode === 'constructor') {
      elements.splice(indexToDelete, 1);
      dispatch(constructorActions.update(elements));
      dispatch(constructorActions.dropped({ id, dropped: false }));
    }
  };

  return (
    <>
      {items.map((element) => {
        return (
          <Container
            id={element.id}
            key={element.id}
            disabled={currentMode === 'constructor' ? false : true}
            onDoubleClickHandler={onDoubleClickHandler}
          >
            {element.elem.map((e) => {
              return <DroppedItem elements={e} key={uuidv4()} />;
            })}
          </Container>
        );
      })}
    </>
  );
};
