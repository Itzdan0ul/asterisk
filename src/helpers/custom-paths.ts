import path from 'path';
import moduleAlias from 'module-alias';

moduleAlias.addAliases({
  '@src': path.join(__dirname, '../'),
  '@main': path.join(__dirname, '../main'),
});
