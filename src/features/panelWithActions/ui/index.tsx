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

  return (
    <div className="flex flex-col gap-[30px]">
      <ModeSwitcher />
      <Constructor>
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
