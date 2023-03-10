import { useDraggable } from '@dnd-kit/core';
import { FC } from 'react';

interface ContainerProps {
  children: React.ReactNode;
  id: string;
}

export const Container: FC<ContainerProps> = (props: ContainerProps) => {
  const { children, id } = props;
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `draggable${id}`,
    data: {
      value: 'data'
    }
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`
      }
    : undefined;
  return (
    <div
      className="flex flex-wrap items-center gap-2 box-border max-w-[240px] bg-white p-1 shadow-md shadow-slate-400 rounded"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      {children}
    </div>
  );
};
