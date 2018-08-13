process.env.DEBUG = 'nuxt:*'

module.exports = {
  mode: 'universal',
  dev: true,
  isDev: true,
  debug: true,
  env: 'development',
  srcDir: 'client/',
  build: {
    watch: [ 'server/' ]
  }
}