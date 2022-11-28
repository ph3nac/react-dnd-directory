/** @jsxImportSource @emotion/react */
import { FC, useContext, useRef } from 'react';
import cuid from 'cuid';
import { useDrag, useDrop } from 'react-dnd';
import { css } from '@emotion/react';
import { isAncestor } from '@/util';
import { liStyle, ulStyle } from '../../style';
import { DataContext } from '../../DataContext';
import { File } from '../File/FileComponent';

type DirProps = {
  id: string;
  text: string;
  moveContent: unknown;
};

export const Dir: FC<DirProps> = ({ id, text, moveContent }) => {
  const ref = useRef(null);
  const [data, setData] = useContext(DataContext);
  const [, drop] = useDrop<{ id: string }, unknown, unknown>({
    accept: ['File', 'Dir'],
    drop: (item) => {
      const draggingId = item.id;
      const droppingId = id;
      if (draggingId === droppingId) return;
      if (isAncestor(draggingId, droppingId, data)) return;
      data[draggingId].parentId = droppingId;
      setData({ ...data });
      console.log(`dropped into dir id:${id}`);
    },
  });
  const [, drag] = useDrag({
    type: 'Dir',
    item: { id: id },
  });
  drag(drop(ref));
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
          {Object.keys(data).map((key) => {
            const content = data[key];
            if (content.parentId === id) {
              if (content.type === 'file') {
                return (
                  <File
                    key={content.id}
                    id={content.id}
                    text={content.text}
                    moveContent={moveContent}
                  />
                );
              }
              return (
                <Dir
                  key={content.id}
                  id={content.id}
                  text={content.text}
                  moveContent={moveContent}
                />
              );
            }
            return null;
          })}
        </ul>
      </li>
    </div>
  );
};
