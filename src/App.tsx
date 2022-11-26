/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useEffect, useState } from 'react';
import { DataT } from './contentType';
import { Dir } from './DirComponent';
import { File } from './FileComponent';

export const DataContext = createContext({});

const App = () => {
  const [data, setData] = useState<DataT>({ id: 1, contents: [] });
  useEffect(() => {
    setData(DataMock);
  }, []);

  return (
    <DataContext.Provider value={{ data, setData }}>
      <div className="App">
        {data.contents.map((content) => {
          if (content.type === 'file') {
            return <File {...content} />;
          }
          if (content.type === 'dir') {
            return <Dir {...content} />;
          }
          return <div />;
        })}
      </div>
    </DataContext.Provider>
  );
};
export default App;
