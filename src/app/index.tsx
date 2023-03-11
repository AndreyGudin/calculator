import { PanelWithElements } from '../features/panelWithElements';
import { PanelWithActions } from '../features/panelWithActions';
import { StoreProvider } from './providers/StoreProvider';
import { DndContext } from '@dnd-kit/core';
import { closestCenter } from '@dnd-kit/core';
import { DndProvider } from './providers/DndProvider/ui';

function App() {
  return (
    <StoreProvider>
      <DndProvider>
        <div className="App flex gap-[56px] items-end">
          <PanelWithElements />
          <PanelWithActions />
        </div>
      </DndProvider>
    </StoreProvider>
  );
}

export default App;
