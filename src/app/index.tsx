import { PanelWithElements } from '../features/panelWithElements';
import { PanelWithActions } from '../features/panelWithActions';
import { StoreProvider } from './providers/StoreProvider';
import { DndProvider } from './providers/DndProvider';

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
