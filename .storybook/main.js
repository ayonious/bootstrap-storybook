/** @type {import('@storybook/react-vite').StorybookConfig} */
export default {
  stories: ['../src/components/**/*.stories.@(js|jsx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
  ],
  framework: '@storybook/react-vite',
};
