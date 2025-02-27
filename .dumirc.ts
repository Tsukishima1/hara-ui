import { defineConfig } from 'dumi';
import { defineThemeConfig, baseTheme } from 'dumi-theme-chakra';

export default defineConfig({
  base: '/hara-ui',
  publicPath: '/hara-ui/',
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'Hara-UI',
    logo: 'https://avatars.githubusercontent.com/u/116432998?v=4)',
    ...defineThemeConfig({
      thumbBackground: false,
      brand: baseTheme.colors.blue,
    }),
  },
});
