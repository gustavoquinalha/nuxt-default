import Vue from "vue"
import * as VueGoogleMaps from "vue2-google-maps"

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAzC_d2au40KiJgRQF9DZ8P8dFBt084Rp0 ",
    libraries: "places" // necessary for places input
  }
})