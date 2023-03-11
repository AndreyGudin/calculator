import { closestCenter, DndContext } from '@dnd-kit/core';
import { ReactNode } from 'react';
import { DragEndEvent } from '@dnd-kit/core';
import { useDispatch, useSelector } from 'react-redux';
import { constructorActions } from '../model/slice/constructorSlice';

interface DndProviderProps {
  children?: ReactNode;
}

export const DndProvider = (props: DndProviderProps) => {
  const { children } = props;
  const dispatch = useDispatch();

  const dragEndHandler = (e: DragEndEvent) => {
    dispatch(constructorActions.switch(true));
    dispatch(constructorActions.update(e.active?.data.current));
  };
  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={dragEndHandler}>
      {children}
    </DndContext>
  );
};
