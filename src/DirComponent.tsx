/** @jsxImportSource @emotion/react */
import { FC, useContext } from 'react';
import { liStyle, ulStyle } from './style';
import { DataContext } from './DataContext';
import { File } from './FileComponent';

type DirProps = {
  id: string;
  text: string;
  moveContent: unknown;
};

export const Dir: FC<DirProps> = ({ id, text, moveContent }) => {
  const [data, setData] = useContext(DataContext);
  return (
    <li css={liStyle} key={`${id}`}>
      <ul css={ulStyle}>
        <div>{text}</div>
        {Object.keys(data!).map((key) => {
          const content = data![key];
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
        })}
      </ul>
    </li>
  );
};
