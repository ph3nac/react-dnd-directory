/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { DataContext } from '@/DataContext';
import { useContext, useRef } from 'react';
import { useDrop } from 'react-dnd';
import { OrderedDirData } from '@/utils/OrderedDirData';
import { OrderedDirContents } from '@/utils/OrderedDirContents';
import { Dir } from '../Dir/DirComponent';
import { File } from '../File/FileComponent';

export const Page = () => {
  const ref = useRef(null);
  const [data, setData] = useContext(DataContext);
  const [, drop] = useDrop<{ id: string }, unknown, unknown>({
    accept: ['File', 'Dir'],
    // TODO: re-order dragging parent and add top
    drop: (item) => {
      const draggingId = item.id;
      const droppingId = undefined;
      const orderedPageData = OrderedDirData(data, droppingId, draggingId);
      setData({ ...orderedPageData });
      console.log('dropped into page');
    },
  });
  drop(ref);
  const orderedPageContents = OrderedDirContents(data, undefined);
  return (
    <div>
      <div
        css={css`
          background: green;
          padding: 24px;
        `}
        ref={ref}
      />
      <ul
        css={css`
          border: 0;
          padding: 0;
          margin: 0;
        `}
      >
        {orderedPageContents.map((content) => {
          if (content.type === 'file') {
            return (
              <File key={content.id} id={content.id} text={content.text} />
            );
          }
          return <Dir key={content.id} id={content.id} text={content.text} />;
        })}
      </ul>
    </div>
  );
};
