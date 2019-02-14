<template>
  <div class="container-location container align-center column text-align-center fade-up delay-1">
    <div class="margin-bottom-10">
      <label for="" class="h1">Location</label>
    </div>
    <div class="group">
      <gmap-autocomplete
        :placeholder="location.formatted_address" 
        @place_changed="setPlace"
      >
      </gmap-autocomplete>
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Enter your location</label>
      <i class="btn-edit fas fa-pen"></i>
    </div>
    <div class="container-map">
      <gmap-map
        :center="center"
        :zoom="12"
        style="width:100%;  height: 400px;"
      >
        <gmap-marker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          @click="center=m.position"
        ></gmap-marker>
      </gmap-map>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: {},
      markers: [],
      places: [],
      currentPlace: {}
    };
  },

  props: ['location'],

  mounted() {
    if (this.location) {
      this.currentPlace = this.location
      const marker = {
        lat: this.currentPlace.geometry.location.lat,
        lng: this.currentPlace.geometry.location.lng
      };
      this.markers = [{ position: marker }];
      this.places = [this.currentPlace];
      this.center = marker;
    } else {
      this.geolocate();
    }
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
      this.currentPlace.coords = {
        lat: this.currentPlace.geometry.location.lat(),
        lng: this.currentPlace.geometry.location.lng()
      }
      this.addMarker();
      this.$emit('update', place);
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers = [{ position: marker }];
        this.places = [this.currentPlace];
        this.center = marker;
        this.currentPlace = null;
      }
    },
    go() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.center = marker;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
}
</script>