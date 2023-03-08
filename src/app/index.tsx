import { useState } from 'react';
import { ModeSwitcher } from '../entities/modeSwitcher/ui';
import { Button, ThemeButton } from '../shared/ui/Button/Button';
import { Container } from '../shared/ui/Container/Container';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello World!</h1>
      <Container>
        <Button theme={ThemeButton.BIG}>1</Button>
        <Button theme={ThemeButton.BIG}>1</Button>
        <Button theme={ThemeButton.BIG}>1</Button>
        <Button theme={ThemeButton.BIG}>1</Button>
      </Container>
    </div>
  );
}

export default App;
