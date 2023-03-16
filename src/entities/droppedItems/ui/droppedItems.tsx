import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { getElements } from '../../../app/providers/DndProvider/model/selectors/getElements/getElements';
import { constructorActions } from '../../../app/providers/DndProvider/model/slice/constructorSlice';
import { ElementStructure } from '../../../shared/ui/Container/types';
import { Container } from '../../../shared/ui/Container/ui/Container';
import { DroppedItem } from '../../../shared/ui/DroppedItem/droppedItem';

interface DroppedItemsProps {
  items: ElementStructure[];
}

export const DroppedItems: FC<DroppedItemsProps> = ({
  items
}: DroppedItemsProps) => {
  const droppedElements = useSelector(getElements);
  const dispatch = useDispatch();

  const onDoubleClickHandler = (id: string) => {
    const elements: ElementStructure[] = structuredClone(droppedElements);
    const indexToDelete = elements.findIndex((elem) => elem.id === id);
    elements.splice(indexToDelete, 1);
    dispatch(constructorActions.update(elements));
    dispatch(constructorActions.dropped({ id, dropped: false }));
  };

  return (
    <>
      {items.map((element) => {
        return (
          <Container
            id={element.id}
            key={element.id}
            disabled={false}
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
