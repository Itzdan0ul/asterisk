import fs from 'fs'

export default async (context: any): Promise<void> => {
  const localesDir = context.appOutDir + '/locales/'

  fs.readdir(localesDir, (err: NodeJS.ErrnoException | null, files: string[]) => {
    if (!(files && files.length)) return

    files.forEach((i) => {
      const isMatch =  i.match(/en-US\.pak/)

      if (isMatch === null) fs.unlinkSync(localesDir + i)
    })
  })
}