import { ComponentStory, ComponentMeta } from '@storybook/react';
import cuid from 'cuid';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { File } from './FileComponent';

type T = typeof File;

export default {
  title: 'File',
  component: File,
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (args) => (
  <DndProvider backend={HTML5Backend}>
    <File {...args} />
  </DndProvider>
);
export const Default = Template.bind({});
Default.args = {
  id: cuid(),
  text: 'file1',
};
