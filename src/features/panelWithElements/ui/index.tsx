import { FC, DragEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StateSchema } from '../../../app/providers/StoreProvider';

import { Block } from '../../../entities/block/ui';
import { Display } from '../../../entities/display/ui';
import { Button, ThemeButton } from '../../../shared/ui/Button/Button';
import { Container } from '../../../shared/ui/Container/Container';
import { constructorActions } from '../../panelWithActions/model/slice/constructorSlice';
import { elementsActions } from '../model/slice/elementsSlice';

export const PanelWithElements: FC = () => {
  const dispatch = useDispatch();
  const elements = useSelector((state: StateSchema) => state.elements.value);
  const operations = ['/', 'X', '-', '+'];
  const numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', ','];

  const dragStartHandler = (e: DragEvent<HTMLDivElement>) => {
    console.log('e', (e.target as HTMLDivElement).innerHTML);
    dispatch(elementsActions.save((e.target as HTMLDivElement).innerHTML));
  };

  const dropHandler = (e: DragEvent<HTMLDivElement>) => {
    dispatch(constructorActions.update((e.target as HTMLDivElement).innerHTML));
    console.log('e1', (e.target as HTMLDivElement).innerHTML);
  };

  return (
    <div className="flex flex-col gap-3">
      <Container dragStartHandler={dragStartHandler} dropHandler={dropHandler}>
        <Display text="0" />
      </Container>
      <Block
        array={operations}
        mainTheme={ThemeButton.OPERATION}
        dragStartHandler={dragStartHandler}
        dropHandler={dropHandler}
      />
      <Block
        array={numbers}
        mainTheme={ThemeButton.NUMBER}
        secondaryTheme={ThemeButton.NUMBERx2}
        condition={true}
        element="0"
        dragStartHandler={dragStartHandler}
        dropHandler={dropHandler}
      />
      <Container dragStartHandler={dragStartHandler} dropHandler={dropHandler}>
        <Button theme={ThemeButton.BIG}>=</Button>
      </Container>
    </div>
  );
};
