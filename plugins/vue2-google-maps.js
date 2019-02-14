import Vue from "vue"
import * as VueGoogleMaps from "vue2-google-maps"

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCvCEMGku2G97Srpc_14XGxKIVxfRtptZI",
    libraries: "places" // necessary for places input
  }
})