module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        root: ['.'],
        alias: {
          '@sharedComponents': './src/shared/components',
          '@sharedConstants': './src/shared/constant',
          '@container': './src/core/container',
          '@sharedHelper': './src/shared/helper',
          '@presenter': './src/core/presenter',
          '@sharedAssets': './src/shared/assets',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        blacklist: null, // DEPRECATED
        whitelist: null, // DEPRECATED
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
  ],
};
