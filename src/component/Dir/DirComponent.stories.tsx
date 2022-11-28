import { DataContextWrapper } from '@/DataContext';
import { dir1Id } from '@/DataMock';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Dir } from './DirComponent';

type T = typeof Dir;

export default {
  title: 'Dir',
  component: Dir,
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (args) => (
  <DataContextWrapper>
    <DndProvider backend={HTML5Backend}>
      <Dir {...args} />
    </DndProvider>
  </DataContextWrapper>
);
export const Default = Template.bind({});
Default.args = {
  id: dir1Id,
  text: 'dir1',
};
