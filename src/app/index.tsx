import { useState } from 'react';

import { PanelWithElements } from '../feature/panelWithElements/ui';
import { PanelWithActions } from '../feature/panelWithActions/ui';

function App() {
  return (
    <div className="App flex gap-[56px] items-end">
      <PanelWithElements />
      <PanelWithActions />
    </div>
  );
}

export default App;
