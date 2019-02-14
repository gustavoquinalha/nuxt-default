import webpack from 'webpack'

export default {
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
    '@nuxtjs/style-resources'
    // , ['nuxt-sass-resources-loader', '@/assets/css/base/_variables.scss']
  ],
  styleResources: {
    scss: [
      'assets/css/base/_variables.scss'
    ]
  },
  axios: {
    baseURL: process.env.API_URL
  },
  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      // disable redirect
      home: '/logged/my-account'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/local', method: 'post', propertyName: 'jwt' },
          user: { url: '/users/me', method: 'get', propertyName: false }
          // login: { url: '/login', method: 'post', propertyName: 'token' },
          // logout: { url: '/logout', method: 'post' },
          // user: { url: '/me', method: 'get', propertyName: false }
        },
        tokenRequired: true,
        tokenType: 'bearer'
      }
    }
  },
  plugins: [
    { src: '~/plugins/vue2-google-maps', ssr: false }
  ],
  build: {
    transpile: [/^vue2-google-maps($|\/)/],
    plugins: [
      new webpack.ProvidePlugin({
        '_': 'lodash'
      })
    ]
  }
}
