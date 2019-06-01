const { join } = require('path')

module.exports = (acyort) => {
  const { base, public: publicDir } = acyort.config.get()

  acyort.hooks.tap('pigeon_after_fetch', (issues) => {
    for (let i = 0; i < issues.length; i += 1) {
      issues[i].milestone = { title: 'blog' }
    }
  })

  acyort.hooks.tap('pigeon_after_render', () => {
    acyort.fs.outputFileSync(join(base, publicDir, 'CNAME'), 'acyort.am0200.com')
  })
}
