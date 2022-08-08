import fs from 'fs';

export default async (context: any): Promise<void> => {
  const localesDir = context.appOutDir + '/locales/';
  const locales = {
    en: /en-US\.pak/,
    es: /es-419\.pak/
  }

  fs.readdir(localesDir, (err: NodeJS.ErrnoException | null, files: string[]) => {
    if (err) throw err;
    if (!(files && files.length)) return;

    for (const file of files) {
      const isMatch = file.match(locales.en) || file.match(locales.es);

      if (isMatch === null) fs.unlinkSync(localesDir + file);
    }
  });
};
