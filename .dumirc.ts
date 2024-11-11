import { defineConfig } from 'dumi';
import { defineThemeConfig, baseTheme } from 'dumi-theme-chakra';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'Hara-UI',
    logo: '/favicon.svg',
    ...defineThemeConfig({
      thumbBackground: false,
      brand: baseTheme.colors.blue,
    }),
  },
});
