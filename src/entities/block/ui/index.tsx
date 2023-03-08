import { FC } from 'react';
import { Button, ThemeButton } from '../../../shared/ui/Button/Button';

import { Container } from '../../../shared/ui/Container/Container';

interface BlockProps {
  array: string[];
  mainTheme: ThemeButton;
  secondaryTheme?: ThemeButton;
  condition?: boolean;
  element?: string;
}

export const Block: FC<BlockProps> = ({
  array,
  mainTheme,
  secondaryTheme,
  element,
  condition
}: BlockProps) => {
  return (
    <Container>
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
