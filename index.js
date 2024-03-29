module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
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
  ],
  ignoreFiles: ['build', 'coverage', 'dist', 'lib', 'node_modules'],
};
