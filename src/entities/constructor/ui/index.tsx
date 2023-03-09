import { DragEvent, FC } from 'react';
import { useSelector } from 'react-redux';
import { StateSchema } from '../../../app/providers/StoreProvider';

import svg_constructor from '../../../shared/assets/place.svg';

interface ConstructorProps {
  dragOverHandler: (e: DragEvent<HTMLDivElement>) => void;
  // dragLeaveHandler?: (e: DragEvent<HTMLDivElement>) => void;
  dragEnterHandler: (e: DragEvent<HTMLDivElement>) => void;
  dragEndHandler: (e: DragEvent<HTMLDivElement>) => void;
  dropHandler: (e: DragEvent<HTMLDivElement>) => void;
  children: React.ReactNode;
}

export const Constructor: FC<ConstructorProps> = (props: ConstructorProps) => {
  const isDropped = useSelector((state: StateSchema) => state.elements.dropped);
  const {
    dragOverHandler,
    // dragLeaveHandler,
    dragEnterHandler,
    dragEndHandler,
    dropHandler,
    children
  } = props;
  return (
    <div
      className="flex flex-col gap-3 w-[243px] h-[448px] border-2 border-dashed rounded justify-center items-center"
      onDragOver={(e) => dragOverHandler!(e)}
      // onDragLeave={(e) => dragLeaveHandler!(e)}
      onDragEnd={(e) => dragEndHandler(e)}
      onDrop={(e) => dropHandler(e)}
      onDragEnter={dragEnterHandler}
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
      {children}
    </div>
  );
};
