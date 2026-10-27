/** @type {import('@storybook/react-vite').Preview} */
export default {
  tags: ['autodocs'],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: { codePanel: true },
    a11y: { test: 'todo' },
  },
};
