import { DataContext } from '@/DataContext';
import { moveContent } from '@/util';
import cuid from 'cuid';
import { useContext } from 'react';
import { Dir } from '../Dir/DirComponent';
import { File } from '../File/FileComponent';

export const Page = () => {
  const [data, setData] = useContext(DataContext);
  return (
    <ul>
      {data ? (
        Object.keys(data).map((key) => {
          const content = data[key];
          if (content.parentId === undefined) {
            if (content.type === 'file') {
              return (
                <File
                  key={content.id}
                  id={content.id}
                  text={content.text}
                  moveContent={moveContent}
                />
              );
            }
            return (
              <Dir
                key={content.id}
                id={content.id}
                text={content.text}
                moveContent={moveContent}
              />
            );
          }
          return <div key={cuid()} />;
        })
      ) : (
        <div key={cuid()} />
      )}
    </ul>
  );
};
