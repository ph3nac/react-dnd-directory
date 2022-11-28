/** @jsxImportSource @emotion/react */
import { FC, useContext } from 'react';
import cuid from 'cuid';
import { liStyle, ulStyle } from '../../style';
import { DataContext } from '../../DataContext';
import { File } from '../File/FileComponent';

type DirProps = {
  id: string;
  text: string;
  moveContent: unknown;
};

export const Dir: FC<DirProps> = ({ id, text, moveContent }) => {
  const [data, setData] = useContext(DataContext);
  return (
    <li css={liStyle} key={id}>
      {text}
      <ul css={ulStyle}>
        {Object.keys(data).map((key) => {
          const content = data[key];
          if (content.parentId === id) {
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
        })}
      </ul>
    </li>
  );
};
