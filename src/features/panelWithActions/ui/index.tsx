import { useDroppable } from '@dnd-kit/core';
import { FC, DragEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StateSchema } from '../../../app/providers/StoreProvider/';
import { Constructor } from '../../../entities/constructor/ui';
import { ModeSwitcher } from '../../../entities/modeSwitcher/ui';
import { constructorActions } from '../model/slice/constructorSlice';

export const PanelWithActions: FC = () => {
  const dispatch = useDispatch();
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable1'
  });
  const elements = useSelector((state: StateSchema) => state.elements.value);
  const current = useSelector(
    (state: StateSchema) => state.currentElement.value
  );

  return (
    <div className="flex flex-col gap-[30px]">
      <ModeSwitcher />
      <Constructor></Constructor>
    </div>
  );
};
