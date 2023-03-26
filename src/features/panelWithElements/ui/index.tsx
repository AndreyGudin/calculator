import { FC } from 'react';
import { useSelector } from 'react-redux';
import { getDroppedIds } from '../../../app/providers/DndProvider/model/selectors/getDroppedIds/getDroppedIds';

import { Block } from '../../../entities/block/ui';
import { Display } from '../../../entities/display/ui';
import { getCurrentMode } from '../../../entities/modeSwitcher';
import { Button, ThemeButton } from '../../../shared/ui/Button/ui/Button';
import { Container } from '../../../shared/ui/Container/ui/Container';

export const PanelWithElements: FC = () => {
  const currentMode = useSelector(getCurrentMode);
  const droppedIds = useSelector(getDroppedIds);
  const isVisible = currentMode === 'runtime' ? 'invisible' : 'visible';
  const operations = ['/', 'X', '-', '+'];
  const numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', ','];

  return (
    <div className={`flex flex-col gap-3 ${isVisible}`}>
      <Container
        id="draggable1"
        disabled={droppedIds['draggable1']}
        data={{
          elem: [{ type: 'display', theme: '', text: '0' }],
          id: 'draggable1'
        }}
      >
        <Display text="0" />
      </Container>
      <Block
        array={operations}
        mainTheme={ThemeButton.OPERATION}
        id="draggable2"
      />
      <Block
        id="draggable3"
        array={numbers}
        mainTheme={ThemeButton.NUMBER}
        secondaryTheme={ThemeButton.NUMBERx2}
        condition={true}
        element="0"
      />
      <Container
        data={{
          elem: [{ type: 'button', theme: ThemeButton.BIG, text: '=' }],
          id: 'draggable4'
        }}
        disabled={droppedIds['draggable4']}
        id="draggable4"
      >
        <Button theme={ThemeButton.BIG} onClick={() => console.log('click')}>
          =
        </Button>
      </Container>
    </div>
  );
};
