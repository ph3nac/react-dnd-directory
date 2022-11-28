/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { DataContext } from '@/DataContext';
import { useContext, useRef } from 'react';
import { useDrop } from 'react-dnd';
import { Dir } from '../Dir/DirComponent';
import { File } from '../File/FileComponent';

export const Page = () => {
  const ref = useRef(null);
  const [data, setData] = useContext(DataContext);
  const [, drop] = useDrop<{ id: string }, unknown, unknown>({
    accept: ['File', 'Dir'],
    drop: (item) => {
      const draggingId = item.id;
      if (draggingId === undefined) return;
      data[draggingId].parentId = undefined;
      setData({ ...data });
      console.log('dropped into page');
    },
  });
  drop(ref);
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
        {data
          ? Object.keys(data).map((key) => {
              const content = data[key];
              if (content.parentId === undefined) {
                if (content.type === 'file') {
                  return (
                    <File
                      key={content.id}
                      id={content.id}
                      text={content.text}
                    />
                  );
                }
                return (
                  <Dir key={content.id} id={content.id} text={content.text} />
                );
              }
              return null;
            })
          : null}
      </ul>
    </div>
  );
};
