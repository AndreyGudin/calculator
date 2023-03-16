import { DragEndEvent, useDroppable } from '@dnd-kit/core';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StateSchema } from '../../../app/providers/StoreProvider';
import { DndContext } from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy
} from '@dnd-kit/sortable';

import svg_constructor from '../../../shared/assets/place.svg';
import { getElementsIds } from '../../../app/providers/DndProvider/model/selectors/getElementsIds/getElementsIds';
import { constructorActions } from '../../../app/providers/DndProvider/model/slice/constructorSlice';
import { getElements } from '../../../app/providers/DndProvider/model/selectors/getElements/getElements';
import { DroppedItems } from '../../droppedItems/ui/droppedItems';

export const Constructor: FC = () => {
  const droppedElements = useSelector(getElements);
  const dispatch = useDispatch();
  const items = useSelector(getElementsIds);
  const isDropped = useSelector((state: StateSchema) => state.elements.dropped);
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable1'
  });
  const style = {
    backgroundColor: isOver ? 'green' : undefined
  };

  const dragEndHandler = (e: DragEndEvent) => {
    if (e.active.id !== e.over?.id) {
      const oldIndex = items.indexOf(e.over?.id as string);
      const newIndex = items.indexOf(e.active.id as string);
      dispatch(
        constructorActions.update(
          arrayMove(droppedElements, oldIndex, newIndex)
        )
      );
    }
  };
  return (
    <DndContext onDragEnd={dragEndHandler}>
      <SortableContext strategy={verticalListSortingStrategy} items={items}>
        <div
          ref={setNodeRef}
          style={style}
          className={
            isDropped
              ? 'flex flex-col gap-3 w-[240px] h-[448px]'
              : 'flex flex-col gap-3 w-[240px] h-[448px] border-2 border-dashed rounded justify-center items-center'
          }
        >
          {isDropped ? null : (
            <>
              <img src={svg_constructor} alt="Place there" />
              <div className="flex flex-col items-center">
                <span className="text-sm text-[#5D5FEF] ">Перетащите сюда</span>
                <span className="inline-block w-[106px] text-xs text-center">
                  любой&nbsp;элемент из&nbsp;левой&nbsp;панели
                </span>
              </div>
            </>
          )}
          <DroppedItems items={droppedElements} />
        </div>
      </SortableContext>
    </DndContext>
  );
};
