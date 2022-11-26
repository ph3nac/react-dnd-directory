/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/prefer-default-export */
/** @jsxImportSource @emotion/react */
import { FC } from 'react';
import { liStyle } from './style';

type FileProps = {
  id: string;
  text: string;
  moveContent: unknown;
};
export const File: FC<FileProps> = ({ id, text, moveContent }) => (
  <li css={liStyle} key={id}>
    {text}
  </li>
);
