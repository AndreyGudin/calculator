import { FC, DragEvent } from 'react';
import { useSelector } from 'react-redux';
import { getDroppedIds } from '../../../app/providers/DndProvider/model/selectors/getDroppedIds/getDroppedIds';
import { Button, ThemeButton } from '../../../shared/ui/Button/Button';

import { Container } from '../../../shared/ui/Container/ui/Container';

interface BlockProps {
  array: string[];
  mainTheme: ThemeButton;
  secondaryTheme?: ThemeButton;
  condition?: boolean;
  element?: string;
  id: string;
}

export const Block: FC<BlockProps> = ({
  array,
  mainTheme,
  secondaryTheme,
  element,
  condition,
  id
}: BlockProps) => {
  const elements = array.map((elem) => {
    const conditionTheme = !condition
      ? mainTheme
      : elem === element
      ? secondaryTheme!
      : mainTheme;
    return { type: 'button', theme: conditionTheme, text: elem };
  });
  const data = { elem: elements, id };
  const droppedIds = useSelector(getDroppedIds);
  console.log('data', data);
  return (
    <Container id={id} data={data} disabled={droppedIds[id]}>
      {array.map((elem, i) => {
        return (
          <Button
            theme={
              !condition
                ? mainTheme
                : elem === element
                ? secondaryTheme!
                : mainTheme
            }
            key={i}
          >
            {elem}
          </Button>
        );
      })}
    </Container>
  );
};
