process.env.DEBUG = 'nuxt:*'

module.exports = {
  loading: {
    color: '#f48c39'
  },
  head: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
    ,
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/the-grid-flexbox@2.0.1/css/the-grid.min.css' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.3.1/css/all.css' }
    ]
  },
  css: [
    '@/assets/css/main.scss'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',

    ['nuxt-sass-resources-loader', '@/assets/css/base/_variables.scss']
  ],
  axios: {
    baseURL: process.env.API_URL
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/local', method: 'post', propertyName: 'jwt' },
          logout: { url: '/auth/local/logout', method: 'post' },
          user: { url: '/users/me', method: 'get', propertyName: false }
        }
      }
    }
  }
}
