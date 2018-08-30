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
  },
  css: [
    '@/assets/css/main.scss'
  ],
  head: {
    script: [
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/the-grid-flexbox@2.0.1/css/the-grid.min.css' }
    ]
  },
  modules: [
    ['nuxt-sass-resources-loader', '@/assets/css/base/_variables.scss']
  ],
}
