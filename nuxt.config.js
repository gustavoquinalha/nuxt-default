module.exports = {
  router: {
    base: '/'
  },
  css: [
    { src: 'node_modules/the-grid-flexbox/css/the-grid.min.css', lang: 'css' }
  ],
  head: {
    title: 'Template for Nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, minimum-scale=1, initial-scale=1' },
      { name: 'description', content: 'Vue Default description' }
    ],
    script: [
    ]
  },

  loading: {color: '#5ee4b7', height: '5px'},

  plugins: [
  ],
  modules: [
  ],
  proxy: [
  ],
  build: {
    extend (config, ctx) {
      config.module.rules.forEach((rule) => {
        if (rule.test.toString() === '/\\.vue$/') {
          rule.options.loaders.scss[2].options.data = '@import "./assets/css/main.scss";'
        }
      })
    }
  }
}
