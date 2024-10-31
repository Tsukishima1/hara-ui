import { defineConfig } from 'dumi';
import { defineThemeConfig } from 'dumi-theme-chakra';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'Hara-UI',
    ...defineThemeConfig({
      thumbBackground: false,
    }),
  },
});
