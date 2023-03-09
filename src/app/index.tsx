import { PanelWithElements } from '../features/panelWithElements';
import { PanelWithActions } from '../features/panelWithActions';
import { StoreProvider } from './providers/StoreProvider';

function App() {
  return (
    <StoreProvider>
      <div className="App flex gap-[56px] items-end">
        <PanelWithElements />
        <PanelWithActions />
      </div>
    </StoreProvider>
  );
}

export default App;
