import { expect, fn } from 'storybook/test';
import { Button } from './button';

export default {
  title: 'Components/Button',
  component: Button,
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    children: 'Click me',
  },
  play: async ({ canvas, userEvent, args }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Click me' }));
    await expect(args.onClick).toHaveBeenCalledOnce();
  },
};

export const Large = {
  args: {
    children: 'Large Button',
    style: { fontSize: '1.5em' },
  },
};
export const Disabled = {
  args: { children: 'Disabled', disabled: true },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button')).toBeDisabled();
  },
};
