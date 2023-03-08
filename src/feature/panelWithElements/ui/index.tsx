import { FC } from 'react';
import { Block } from '../../../entities/block/ui';
import { Display } from '../../../entities/display/ui';
import { Button, ThemeButton } from '../../../shared/ui/Button/Button';
import { Container } from '../../../shared/ui/Container/Container';

export const PanelWithElements: FC = () => {
  const operations = ['/', 'X', '-', '+'];
  const numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', ','];
  return (
    <div className="flex flex-col gap-3">
      <Container>
        <Display text="0" />
      </Container>
      <Block array={operations} mainTheme={ThemeButton.OPERATION} />
      <Block
        array={numbers}
        mainTheme={ThemeButton.NUMBER}
        secondaryTheme={ThemeButton.NUMBERx2}
        condition={true}
        element="0"
      />
    </div>
  );
};
