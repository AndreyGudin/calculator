import { FC, DragEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StateSchema } from '../../../app/providers/StoreProvider/';
import { Constructor } from '../../../entities/constructor/ui';
import { ModeSwitcher } from '../../../entities/modeSwitcher/ui';
import { constructorActions } from '../model/slice/constructorSlice';

export const PanelWithActions: FC = () => {
  const dispatch = useDispatch();
  const elements = useSelector((state: StateSchema) => state.elements.value);
  const current = useSelector(
    (state: StateSchema) => state.currentElement.value
  );
  const dropHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    dispatch(constructorActions.update(current));
    dispatch(constructorActions.switch(true));
    console.log('drop');
  };

  const dragEndHandler = (e: DragEvent<HTMLDivElement>) => {
    console.log('drag end');
  };

  const dragOverHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log('drag over');
  };

  const dragEnterHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log('drag enter');
  };

  return (
    <div className="flex flex-col gap-[30px]">
      <ModeSwitcher />
      <Constructor
        dropHandler={dropHandler}
        dragEndHandler={dragEndHandler}
        dragOverHandler={dragOverHandler}
        dragEnterHandler={dragEnterHandler}
      >
        {elements.map((elem: string) => {
          return (
            <div
              className="w-full"
              dangerouslySetInnerHTML={{ __html: elem }}
            ></div>
          );
        })}
      </Constructor>
    </div>
  );
};
