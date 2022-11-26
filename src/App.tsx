import { createContext, useEffect, useState } from 'react';
import { DataT } from './contentType';
import { Dir } from './dir';

export const DataContext = createContext({});

const App = () => {
  const [data, setData] = useState<DataT>({ id: 1, contents: [] });
  useEffect(() => {
    setData(DataMock);
  }, []);

  return <div className="App" />;
};
export default App;
