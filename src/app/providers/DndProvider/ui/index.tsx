import { closestCenter, DndContext } from '@dnd-kit/core';
import { ReactNode } from 'react';
import { DragEndEvent } from '@dnd-kit/core';
import { useDispatch, useSelector } from 'react-redux';
import { constructorActions } from '../model/slice/constructorSlice';
import { ElementStructure } from '../../../../shared/ui/Container/types';

interface DndProviderProps {
  children?: ReactNode;
}

export const DndProvider = (props: DndProviderProps) => {
  const { children } = props;
  const dispatch = useDispatch();

  const dragEndHandler = (e: DragEndEvent) => {
    console.log('e', e.over);
    console.log('a', e.active);
    if (e.active.id !== e.over?.id) {
      dispatch(constructorActions.switch(true));
      dispatch(constructorActions.add(e.active?.data.current));
    }
  };
  return <DndContext onDragEnd={dragEndHandler}>{children}</DndContext>;
};
