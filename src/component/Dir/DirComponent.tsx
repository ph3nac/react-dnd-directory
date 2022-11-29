/** @jsxImportSource @emotion/react */
import { FC, useContext, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { css } from '@emotion/react';
import { IsAncestor } from '@/utils/IsAncestor';
import { OrderedDirData } from '@/utils/OrderedDirData';
import { OrderedDirContents } from '@/utils/OrderedDirContents';
import { liStyle, ulStyle } from '../../style';
import { DataContext } from '../../DataContext';
import { File } from '../File/FileComponent';

type DirProps = {
  id: string;
  text: string;
};

export const Dir: FC<DirProps> = ({ id, text }) => {
  const ref = useRef(null);
  const [data, setData] = useContext(DataContext);
  const [, drop] = useDrop<{ id: string }, unknown, unknown>({
    accept: ['File', 'Dir'],
    drop: (item) => {
      const draggingId = item.id;
      const droppingId = id;
      if (draggingId === droppingId) return;
      if (IsAncestor(draggingId, droppingId, data)) return;

      // data[draggingId].parentId = droppingId;

      // TODO: Sort by index at Drop
      const orderedDirData = OrderedDirData(data, droppingId, draggingId);
      setData({ ...orderedDirData });
      console.log(`dropped into dir id:${id}`);
    },
  });
  const [, drag] = useDrag({
    type: 'Dir',
    item: { id: id },
  });
  drag(drop(ref));

  const orderedDirContents = OrderedDirContents(data, id);
  return (
    <div>
      <div
        ref={ref}
        css={css`
          background: grey;
          color: white;
        `}
      >
        {text}
      </div>
      <li css={liStyle} key={id}>
        <ul css={ulStyle}>
          {orderedDirContents.map((content) => {
            if (content.type === 'file') {
              return (
                <File key={content.id} id={content.id} text={content.text} />
              );
            }
            return <Dir key={content.id} id={content.id} text={content.text} />;
          })}
        </ul>
      </li>
    </div>
  );
};
