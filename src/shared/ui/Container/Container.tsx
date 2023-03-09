import { DragEvent, FC } from 'react';

interface ContainerProps {
  children: React.ReactNode;
  dragStartHandler: (e: DragEvent<HTMLDivElement>) => void;
}

export const Container: FC<ContainerProps> = (props: ContainerProps) => {
  const { children, dragStartHandler } = props;
  return (
    <div
      draggable
      className="flex flex-wrap items-center gap-2 box-border max-w-[240px] bg-white p-1 shadow-md shadow-slate-400 rounded"
      onDragStart={dragStartHandler}
    >
      {children}
    </div>
  );
};
