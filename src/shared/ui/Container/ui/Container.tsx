import { DragOverlay, useDraggable } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import { FC } from 'react';
import { CSS } from '@dnd-kit/utilities';
import { ElementStructure } from '../types';

interface ContainerProps {
  children: React.ReactNode;
  data?: ElementStructure;
  id: string;
}

export const Container: FC<ContainerProps> = (props: ContainerProps) => {
  const { children, id, data } = props;
  // const { attributes, listeners, setNodeRef, transform } = useDraggable({
  //   id: data?.id ? data?.id : id,
  //   data
  // });
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: data?.id ? data?.id : id, data });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };
  const divStyle =
    'flex flex-wrap items-center gap-2 box-border max-w-[240px] bg-white p-1 shadow-md shadow-slate-400 rounded';
  const dragOverlayContent = isDragging ? (
    <div
      className={divStyle}
      style={{
        opacity: isDragging ? '0.5' : '',
        boxShadow: isDragging
          ? '0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)'
          : ''
      }}
    >
      {children}
    </div>
  ) : null;
  return (
    <>
      <div
        className={divStyle}
        ref={setNodeRef}
        style={style}
        {...listeners}
        {...attributes}
      >
        {children}
      </div>
      <DragOverlay dropAnimation={null}>{dragOverlayContent}</DragOverlay>
    </>
  );
};
