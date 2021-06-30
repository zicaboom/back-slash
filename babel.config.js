module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        alias: {
            '@controllers': './src/controllers',
            '@entities': './src/entities',
            '@services': './src/services',
        }
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}