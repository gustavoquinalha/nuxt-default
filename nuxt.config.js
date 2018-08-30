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
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
    ,
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/the-grid-flexbox@2.0.1/css/the-grid.min.css' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.3.1/css/all.css' }
    ],
    script: [
    ]
  },
  modules: [
    ['nuxt-sass-resources-loader', '@/assets/css/base/_variables.scss']
  ],
}
