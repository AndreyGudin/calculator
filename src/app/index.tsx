import { useState } from 'react';
import { Constructor } from '../entities/constructor/ui';
import { Display } from '../entities/display/ui';
import { ModeSwitcher } from '../entities/modeSwitcher/ui';
import { Button, ThemeButton } from '../shared/ui/Button/Button';
import { Container } from '../shared/ui/Container/Container';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Container>
        <Display text="0" />
      </Container>
      <Constructor />
    </div>
  );
}

export default App;
