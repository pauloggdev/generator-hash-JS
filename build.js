const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/CreateHash.ts'],
  bundle: true,
  outfile: 'dist/bundle.js',
  format: 'esm',
  sourcemap: true,
}).catch(() => process.exit(1));