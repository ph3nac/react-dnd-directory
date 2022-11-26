/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
/** @jsxImportSource @emotion/react */
import { FC, useContext } from 'react';
import { liStyle, ulStyle } from './style';
import { DataContext } from './DataContext';

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
      </ul>
    </li>
  );
};
