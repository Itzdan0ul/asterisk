import os from 'os'
import { Platform } from '../../../src/main/platform'

describe('Platform', () => {
  it('Should be the same as the current platform.', () => {
    const platform: Platform = new Platform(os.platform())
    expect(platform._platform).toEqual(os.platform())
  })
  it('Should return the specified height according to the platform.', () => {
    const platform: Platform = new Platform(os.platform())
    const height: number = platform.setWindowHeight()

    switch (platform._platform) {
      case 'win32':
        expect(height).toBe(364)
        break;
      case 'linux':
        expect(height).toBeNull()
        break
    }
  })
})