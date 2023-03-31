import { DndContext } from '@dnd-kit/core';
import { ReactNode } from 'react';
import { DragEndEvent } from '@dnd-kit/core';
import { useDispatch } from 'react-redux';

import { constructorActions } from '../model/slice/constructorSlice';

interface DndProviderProps {
  children?: ReactNode;
}

export const DndProvider = (props: DndProviderProps) => {
  const { children } = props;
  const dispatch = useDispatch();

  const dragEndHandler = (e: DragEndEvent) => {
    console.log('e.active?.data.current', e.active?.data.current);
    if (e.active.id !== e.over?.id) {
      dispatch(constructorActions.switch(true));
      dispatch(constructorActions.add(e.active?.data.current));
      dispatch(
        constructorActions.dropped({ id: e.active.id as string, dropped: true })
      );
    }
  };

  return <DndContext onDragEnd={dragEndHandler}>{children}</DndContext>;
};
