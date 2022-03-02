import { dirname } from 'path'
import { IconsaucePlugin } from '@iconsauce/plugin'

const materialIconsPlugin: IconsaucePlugin = {
  prefix: 'mi',
  regex: {
    code: /(mi)(\/[0-9a-z-]+){2}/gm,
    lib: /([a-zA-Z_\-/]+\/([0-9a-zA-Z_-]+)\/(baseline|outline|round|sharp)\.svg)/,
  },
  selector: (path: RegExpMatchArray) => `mi/${path[3]}/${path[2].replace(/[_]+/g, '-')}`,
  path: `${dirname(require.resolve('@material-icons/svg/package.json'))}/svg/**/@(baseline|outline|round|sharp).svg`,
}

export default materialIconsPlugin
module.exports = materialIconsPlugin
