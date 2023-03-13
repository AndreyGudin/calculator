import { useDroppable } from '@dnd-kit/core';
import { DragEvent, FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StateSchema } from '../../../app/providers/StoreProvider';
import { v4 as uuidv4 } from 'uuid';
import { DndContext } from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy
} from '@dnd-kit/sortable';

import svg_constructor from '../../../shared/assets/place.svg';
import { Container } from '../../../shared/ui/Container/ui/Container';
import { Button } from '../../../shared/ui/Button/Button';
import { Display } from '../../display/ui';
import { getElementsIds } from '../../../app/providers/DndProvider/model/selectors/getElementsIds/getElementsIds';
import { constructorActions } from '../../../app/providers/DndProvider/model/slice/constructorSlice';

export const Constructor: FC = () => {
  const droppedElements = useSelector(
    (state: StateSchema) => state.elements.value
  );
  const dispatch = useDispatch();
  const items = useSelector(getElementsIds);
  const isDropped = useSelector((state: StateSchema) => state.elements.dropped);
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable1'
  });
  const style = {
    backgroundColor: isOver ? 'green' : undefined
  };

  return (
    <DndContext
      onDragEnd={(e) => {
        if (e.active.id !== e.over?.id) {
          const oldIndex = items.indexOf(e.over?.id as string);
          const newIndex = items.indexOf(e.active.id as string);
          dispatch(
            constructorActions.update(
              arrayMove(droppedElements, oldIndex, newIndex)
            )
          );
        }
      }}
    >
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
          {droppedElements.map((element) => {
            return (
              <Container id={element.id} key={element.id}>
                {element.elem.map((e) => {
                  let component = null;
                  if (e.type === 'button')
                    component = (
                      <Button className={e.theme} key={uuidv4()}>
                        {e.text}
                      </Button>
                    );
                  if (e.type === 'display')
                    component = <Display text={e.text} key={uuidv4()} />;
                  return component;
                })}
              </Container>
            );
          })}
        </div>
      </SortableContext>
    </DndContext>
  );
};
