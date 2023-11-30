import type { Meta, StoryObj } from '@storybook/react';
import MenuItem from './MenuItem';



// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Example/MenuItem',
    component: MenuItem,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        title: { control: 'text', description: 'The label of the MenuItem' },
        icon: { control: 'text', description: 'The icon of the MenuItem, Fontawesome icons are only supported' },
        active: { control: 'boolean', description: 'Control if the menu item is active or not', defaultValue: false }
    },
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Profile: Story = {
    args: {
        title: 'Profile',
        icon: 'faUser'
        // icon: 'Button',
    },
};