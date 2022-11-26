/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
/** @jsxImportSource @emotion/react */
import { FC } from 'react';
import { DirT } from './contentType';
import { liStyle, ulStyle } from './style';
import { File } from './FileComponent';

export const Dir: FC<DirT> = ({ id, text, type, contents }) => (
  <li css={liStyle} key={`${id}-folder`}>
    <ul css={ulStyle}>
      <div>{text}</div>
      {contents.map((content) => {
        if (content.type === 'file') {
          return <File {...content} />;
        }
        if (content.type === 'dir') {
          return <Dir {...content} />;
        }
        return <div />;
      })}
    </ul>
  </li>
);
