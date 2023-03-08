import { useState } from 'react';

import { PanelWithElements } from '../feature/panelWithElements/ui';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <PanelWithElements />
    </div>
  );
}

export default App;
