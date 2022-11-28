/* eslint-disable @typescript-eslint/naming-convention */
/** @jsxImportSource @emotion/react */
import { DataContext } from '@/DataContext';
import { isAncestor } from '@/util';
import { FC, useContext, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { liStyle } from '../../style';

type FileProps = {
  id: string;
  text: string;
  moveContent: unknown;
};
export const File: FC<FileProps> = ({ id, text, moveContent }) => {
  const [data, setData] = useContext(DataContext);
  const ref = useRef(null);

  const [, drop] = useDrop<{ id: string }, unknown, unknown>({
    accept: ['File', 'Dir'],
    drop: (item) => {
      const draggingId = item.id;
      const droppingId = id;
      if (draggingId === droppingId) return;
      if (isAncestor(draggingId, droppingId, data)) return;
      data[draggingId].parentId = data[droppingId].parentId;
      setData({ ...data });
      console.log(`dropped into file id:${id}`);
    },
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
