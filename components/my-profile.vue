<template lang="html">
  <div>
    <ProfilePictureUpload></ProfilePictureUpload>
    <div class="container container-box-content">
      <div class="box-content">
        <div class="content-size">
          <div class="title text-align-center">
            <span class="h2">Acces Info</span>
          </div>
          <div class="container column container-form margin-top-10">
            <div class="group">
              <input
                type="text"
                name="name"
                required
                v-model="user.profileType"
              >
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Profile type</label>
              <i class="btn-edit fas fa-pen"></i>
            </div>
            <div class="group">
              <input
                type="text"
                name="name"
                required
                v-model="user.firstName"
              >
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>First name</label>
              <i class="btn-edit fas fa-pen"></i>
            </div>
            <div class="group">
              <input
                type="text"
                required
                v-model="user.lastName"
              >
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Last name</label>
              <i class="btn-edit fas fa-pen"></i>
            </div>
            <div class="group">
              <input
                type="text"
                required
                v-model="user.email"
              >
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Email</label>
              <i class="btn-edit fas fa-pen"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="space space-32"></div>
      <div class="box-content">
        <div class="content-size">
          <div class="title text-align-center">
            <span class="h2">Personal Info</span>
          </div>
          <div class="container column container-form margin-top-10">
            <div class="group">
              <select
                required
                v-model="user.gender"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Gender</label>
            </div>
            <div class="group">
              <input
                type="text"
                required
                v-model="user.age"
              >
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Age</label>
              <i class="btn-edit fas fa-pen"></i>
            </div>
            <div class="group">
              <textarea
                rows="4"
                v-model="user.about"
              ></textarea>
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>About you</label>
              <i class="btn-edit fas fa-pen"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="margin-top-16">
      <no-ssr>
        <location
          @update="data => user.location = data"
          :location="user.location"
        />
      </no-ssr>
      <div class="container-next-step border-top-0 fade-up delay-1">
        <div class="input-block input-check container align-center text-align-center">
          <label>Available for travelling?</label>
          <input
            type="checkbox"
            class="checkbox"
            v-model="user.availableTravelling"
          >
          <div
            class="check-bg"
            @click="user.availableTravelling = !user.availableTravelling"
            :class="{ yes: user.availableTravelling }"
          >
            <div
              class="check-yes fade delay-1"
              v-show="user.availableTravelling"
            >YES</div>
            <div
              class="check-ball"
              :class="{ yes : user.availableTravelling }"
            ></div>
            <div
              class="check-no fade delay-1"
              v-show="!user.availableTravelling"
            >NO</div>
          </div>
        </div>
      </div>
    </div>

    <div class="margin-top-16">
      <div class="box-content">
        <div class="margin-bottom-10 text-align-center">
          <label class="h1">Work</label>
        </div>
        <div class="group margin" style="max-width: 500px">
          <input
            type="text"
            required
            v-model="user.instagram"
          >
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Instagram</label>
          <i class="btn-edit fas fa-pen"></i>
        </div>

        <div class="container-insta">
          <div class="insta-thumb" v-for="x in 11">
            <div class="insta-thumb-block">
              <img src="https://cache-graphicslib.viator.com/graphicslib/thumbs360x240/7845/SITours/ingresso-de-acesso-priorit-rio-para-a-torre-eiffel-com-anfitri-o-in-paris-299567.jpg" />
            </div>
          </div>
          <div class="insta-thumb">
            <div class="insta-thumb-block more">
              Ver todas
            </div>
          </div>
        </div>

        <div class="container wrap margin-top-32">
          <div class="flex-basis-400 flex-grow-1">
            <p>Tattoo Style(s)</p>
            <ul class="list-none container wrap margin-bottom-16">
              <li class="label" v-for="(tattooStyle, index) in tattooStyles" >
                {{ tattooStyle.title }}
                <i class="far fa-times-circle" @click="removeTattooStyle(index)"></i>
              </li>
            </ul>
            <div class="group">
                <input
                  type="text"
                  required
                  v-model="newTattooStyle"
                >
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Enter a tattoo style</label>
                <i class="fas btn-edit fa-plus" @click="addTattooStyle()"></i>
            </div>
          </div>
            <div class="flex-basis-400 flex-grow-1">
            <p>Work at:</p>
            <div class="group">
              <b class="color-primary">Bernartti Tattoo Studio</b>
            </div>
          </div>
        </div>

        <div class="container align-center">
          <button
            type="button"
            class="btn btn-primary btn-block"
            @click="update({ user, step: 2 })"
          >Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import location from '@/components/location'
  import ProfilePictureUpload from '@/components/ProfilePictureUpload'
  import { mapActions } from 'vuex'

  export default {
    components: {
      location,
      ProfilePictureUpload
    },
    data() {
      return {
        newTattooStyle: '',
        tattooStyles: [],
        user: {}
      }
    },
    created() {
      this.user = _.cloneDeep(this.$auth.user)
      this.tattooStyles = this.user.tattooStyles || []
    },
    methods: {
      
      ...mapActions({
        update: 'account/update'
      }),
      
      addTattooStyle() {
        this.tattooStyles = _.concat(this.tattooStyles, {
          title: this.newTattooStyle
        })
        this.newTattooStyle = ''
        this.user.tattooStyles = this.tattooStyles
      },

      removeTattooStyle(index) {
        this.tattooStyles.splice(index, 1)
        this.user.tattooStyles = this.tattooStyles
      }
    }
  }
</script>
