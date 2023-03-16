import { DragOverlay } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import { FC } from 'react';
import { CSS } from '@dnd-kit/utilities';
import { ElementStructure } from '../types';

interface ContainerProps {
  children: React.ReactNode;
  data?: ElementStructure;
  id: string;
  customStyle?: React.CSSProperties | undefined;
  disabled: boolean;
}

export const Container: FC<ContainerProps> = (props: ContainerProps) => {
  const { children, id, data, customStyle, disabled } = props;
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({
    id: data?.id ? data?.id : id,
    data,
    disabled: typeof disabled === 'boolean' ? disabled : false
  });

  const additionalStyle = customStyle ? { ...customStyle } : '';
  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: disabled || isDragging ? 0.5 : 1,
    ...additionalStyle
  };
  const divStyle =
    'flex flex-wrap items-center gap-2 box-border max-w-[240px] bg-white p-1 shadow-md shadow-slate-400 rounded';
  const dragOverlayContent = isDragging ? (
    <div
      className={divStyle}
      style={{
        opacity: isDragging ? '1' : '',
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
