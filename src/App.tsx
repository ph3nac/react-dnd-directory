/* eslint-disable react/jsx-no-constructed-context-values */
/** @jsxImportSource @emotion/react */
import { Dispatch, SetStateAction, useContext } from 'react';
import { DataType } from './contentType';
import { DataContext, DataContextWrapper } from './DataContext';
import { DataMock } from './DataMock';
import { Dir } from './DirComponent';
import { File } from './FileComponent';
import { moveContent } from './util';

type DataContextType = [
  data: DataType | undefined,
  setData: Dispatch<SetStateAction<DataType | undefined>>,
];

const App = () => {
  const [data, setData] = useContext(DataContext);

  return (
    <DataContextWrapper>
      <div className="App">
        {data ? (
          Object.keys(data).map((key) => {
            const content = data[key];
            if (content.parentId === undefined) {
              if (content.type === 'file') {
                return (
                  <File
                    id={content.id}
                    text={content.text}
                    moveContent={moveContent}
                  />
                );
              }
              if (content.type === 'dir') {
                return (
                  <Dir
                    id={content.id}
                    text={content.text}
                    moveContent={moveContent}
                  />
                );
              }
              return <div />;
            }
            return <div />;
          })
        ) : (
          <div />
        )}
      </div>
    </DataContextWrapper>
  );
};
export default App;
