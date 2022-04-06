module.exports = {
  // You will want to change this to wherever your Stories will live
  stories: ['../src/**/*.stories.mdx', '../src/**/stories/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          modules: true,
        },
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    '@storybook/addon-actions',
    'storybook-readme/register',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
}
