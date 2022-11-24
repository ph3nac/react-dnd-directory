import { BookmarkBarMock } from './components/BookmarkBar/BookmarkBarMock';
import BookmarkBar from './components/BookmarkBar/BookmarkBar';

const App = () => (
  <div className="App">
    <BookmarkBar {...BookmarkBarMock} />
  </div>
);
export default App;
