export default async function writing(yo) {
  yo.fs.copy(yo.templatePath('_babelrc'), yo.destinationPath('.babelrc'));
  yo.fs.copy(yo.templatePath('_eslintrc'), yo.destinationPath('.eslintrc'));
  yo.fs.copy(yo.templatePath('_gitignore'), yo.destinationPath('.gitignore'));
  yo.fs.copy(yo.templatePath('_npmrc'), yo.destinationPath('.npmrc'));
  yo.fs.copy(
    yo.templatePath('_prettierignore'),
    yo.destinationPath('.prettierignore')
  );
  yo.fs.copy(
    yo.templatePath('nodemon.json'),
    yo.destinationPath('nodemon.json')
  );
  yo.fs.copy(
    yo.templatePath('tsconfig.json'),
    yo.destinationPath('tsconfig.json')
  );
  yo.fs.copyTpl(
    yo.templatePath('_package.json'),
    yo.destinationPath('package.json'),
    yo.context
  );
  yo.fs.copyTpl(yo.templatePath('src'), yo.destinationPath('src'), yo.context);
}
