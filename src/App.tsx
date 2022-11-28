/** @jsxImportSource @emotion/react */
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Page } from './component/Page/PageComponent';
import { DataContextWrapper } from './DataContext';

const App = () => (
  <DataContextWrapper>
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Page />
      </div>
    </DndProvider>
  </DataContextWrapper>
);
export default App;
