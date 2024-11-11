import { createModuleFederationConfig } from '@module-federation/modern-js';

export default createModuleFederationConfig({
  name: 'modernjs',
  filename: 'remoteEntry.js',
  remotes: {
    "hero": 'hero@http://localhost:4201/mf-manifest.json'
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
    'react-router-dom': { singleton: true }
  },
});