/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/prefer-default-export */
/** @jsxImportSource @emotion/react */
import { FC } from 'react';
import { FileT } from './contentType';
import { liStyle } from './style';

export const File: FC<FileT> = ({ id, text, type }) => (
  <li css={liStyle} key={`${id}-file`}>
    {text}
  </li>
);
