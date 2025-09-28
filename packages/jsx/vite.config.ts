import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        'jsx-runtime': resolve(__dirname, 'src/jsx-runtime.ts'),
      },
      formats: ['es'],
      fileName: (format, entryName) => `${entryName}.js`,
    },
    rollupOptions: {
      external: ['@types/react'],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId;
          if (facadeModuleId) {
            const relativePath = facadeModuleId.replace(
              __dirname + '/src/',
              '',
            );
            return relativePath.replace('.ts', '.js');
          }
          return '[name].js';
        },
      },
    },
    minify: 'esbuild',
    sourcemap: false,
    target: 'es2020',
    outDir: 'dist',
    emptyOutDir: true,
  },
  esbuild: {
    target: 'es2020',
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
  },
});
