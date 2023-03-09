import { FC, DragEvent } from 'react';
import { Button, ThemeButton } from '../../../shared/ui/Button/Button';

import { Container } from '../../../shared/ui/Container/Container';

interface BlockProps {
  array: string[];
  mainTheme: ThemeButton;
  secondaryTheme?: ThemeButton;
  condition?: boolean;
  element?: string;
  dragStartHandler?: (e: DragEvent<HTMLDivElement>) => void;
  dropHandler: (e: DragEvent<HTMLDivElement>) => void;
}

export const Block: FC<BlockProps> = ({
  array,
  mainTheme,
  secondaryTheme,
  element,
  condition,
  dragStartHandler,
  dropHandler
}: BlockProps) => {
  return (
    <Container dragStartHandler={dragStartHandler!} dropHandler={dropHandler}>
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
