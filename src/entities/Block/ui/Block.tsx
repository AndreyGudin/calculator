import { FC } from 'react';
import { useSelector } from 'react-redux';

import { getDroppedIds } from '../../../app/providers/DndProvider';
import { Button, ThemeButton } from '../../../shared/ui/Button';
import { Container } from '../../../shared/ui/Container';

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
