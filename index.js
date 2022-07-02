module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  overrides: [
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: 'postcss-scss',
      extends: ['stylelint-config-standard-scss'],
    },
    {
      files: ['*.less', '**/*.less'],
      customSyntax: 'postcss-less',
    },
    {
      files: [
        '*.js',
        '**/*.js',
        '*.jsx',
        '**/*.jsx',
        '*.ts',
        '**/*.ts',
        '*.tsx',
        '**/*.tsx',
      ],
      customSyntax: '@stylelint/postcss-css-in-js',
    },
  ],
  ignoreFiles: ['build', 'coverage', 'dist', 'lib', 'node_modules'],
};
