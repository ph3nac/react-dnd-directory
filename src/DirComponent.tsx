/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
/** @jsxImportSource @emotion/react */
import { FC } from 'react';
import { ContentT, DirT } from './contentType';
import { liStyle, ulStyle } from './style';
import { File } from './FileComponent';

type DirProps = {
  id: number;
  text: string;
  contents: ContentT[];
  moveContent: unknown;
};

export const Dir: FC<DirProps> = ({ id, text, moveContent, contents }) => (
  <li css={liStyle} key={`${id}-folder`}>
    <ul css={ulStyle}>
      <div>{text}</div>
      {contents.map((content) => {
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
              contents={content.contents}
              moveContent={moveContent}
            />
          );
        }
        return <div />;
      })}
    </ul>
  </li>
);
