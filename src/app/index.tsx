import { useState } from 'react';
import { ModeSwitcher } from '../entities/modeSwitcher/ui';
import { Button, ThemeButton } from '../shared/ui/Button/Button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello World!</h1>
      <Button theme={ThemeButton.OPERATION}>1</Button>
      <ModeSwitcher />
    </div>
  );
}

export default App;
