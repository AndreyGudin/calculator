import { PanelWithElements } from '../features/panelWithElements';
import { PanelWithActions } from '../features/panelWithActions';
import { StoreProvider } from './providers/StoreProvider';
import { DndContext } from '@dnd-kit/core';
import { closestCenter } from '@dnd-kit/core';

function App() {
  return (
    <StoreProvider>
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={(e) => console.log('data', e.active?.data.current)}
      >
        <div className="App flex gap-[56px] items-end">
          <PanelWithElements />
          <PanelWithActions />
        </div>
      </DndContext>
    </StoreProvider>
  );
}

export default App;
