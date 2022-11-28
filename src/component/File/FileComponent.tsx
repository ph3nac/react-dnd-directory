/* eslint-disable @typescript-eslint/naming-convention */
/** @jsxImportSource @emotion/react */
import { FC, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { liStyle } from '../../style';

type FileProps = {
  id: string;
  text: string;
  moveContent: unknown;
};
export const File: FC<FileProps> = ({ id, text, moveContent }) => {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: ['File', 'Dir'],
  });
  const [, drag] = useDrag(() => ({
    type: 'File',
    item: { id: id },
  }));
  drag(drop(ref));
  return (
    <li css={liStyle} key={id} ref={ref}>
      {text}
    </li>
  );
};
