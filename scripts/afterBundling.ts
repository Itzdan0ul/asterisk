import path from 'path';
import fs from 'fs-extra';

const imagesDir: string = path.join(__dirname, '../src/renderer/assets/images');
const dest: string = path.join(__dirname, '../src/renderer/dist/assets/images');

fs.copySync(imagesDir, dest);
