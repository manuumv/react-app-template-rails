import path from 'path';
const basePath = `${__dirname}/../..`;

export const storybookAlias = {
  common: path.join(basePath, 'src/common'),
  core: path.join(basePath, 'src/core'),
  actions: path.join(basePath, 'src/actions'),
  assets: path.join(basePath, 'src/assets'),
  reducers: path.join(basePath, 'src/reducers'),
  model: path.join(basePath, 'src/model'),
  containers: path.join(basePath, 'src/containers'),
  styles: path.join(basePath, 'src/styles'),
  '@emotion/styled': path.join(basePath, 'node_modules/@emotion/styled'),
  '@emotion/react': path.join(basePath, 'node_modules/@emotion/react'),
  // Resolve path issue for emotion v11
  '@emotion/core': path.resolve('node_modules/@emotion/react'),
  'emotion-theming': path.resolve('node_modules/@emotion/react'),
};
