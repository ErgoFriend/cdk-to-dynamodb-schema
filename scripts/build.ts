#!/usr/bin/env node
const {build} = require('estrella')
const {Generator} = require('npm-dts')

build({
  entry: ['src/main.ts', 'src/cli.ts'],
  outdir: 'dist',
  bundle: true,
  minify: true,
  format: 'cjs',
  platform: 'node',
})

// https://souporserious.com/bundling-typescript-with-esbuild-for-npm/
new Generator({
  entry: 'src/main.ts',
  output: 'dist/main.d.ts',
}).generate()