/* eslint-disable @typescript-eslint/naming-convention */
/** @jsxImportSource @emotion/react */
import { DataContext } from '@/DataContext';
import { isAncestor, OrderedFileData } from '@/util';
import { FC, useContext, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { liStyle } from '../../style';

type FileProps = {
  id: string;
  text: string;
};
export const File: FC<FileProps> = ({ id, text }) => {
  const [data, setData] = useContext(DataContext);
  const ref = useRef(null);

  const [, drop] = useDrop<{ id: string }, unknown, unknown>({
    accept: ['File', 'Dir'],
    // TODO: 下から上にに移動する並べ替えが機能しない?
    drop: (item) => {
      const draggingId = item.id;
      const droppingId = id;
      if (isAncestor(draggingId, droppingId, data)) return;
      if (draggingId === droppingId) return;
      const orderedFileData = OrderedFileData(data, droppingId, draggingId);
      setData({ ...orderedFileData });
      // setData({ ...data });
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
