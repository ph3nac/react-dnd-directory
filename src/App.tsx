/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import { DataContext, DataContextWrapper } from './DataContext';
import { Dir } from './DirComponent';
import { File } from './FileComponent';
import { moveContent } from './util';

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
              return (
                <Dir
                  id={content.id}
                  text={content.text}
                  moveContent={moveContent}
                />
              );
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
