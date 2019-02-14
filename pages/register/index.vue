<template lang="html">
  <div class="content-login">
    <div class="size margin">
      <div>
        {{ $store.state.error }}
      </div>
      <!-- step 1 -->
      <div v-if="step === 1">
        <div class="text-align-center title">
          <span class="h1 fade-up">Register</span>
        </div>
        <div class="container-login fade-up delay-1">
          <div class="login-block">
            <p class="margin-bottom-20">Choose a profile a type:</p>
            <ul class="tabs container align-center wrap justify-content-around">
              <li class="tab-link" :class="{ active :  profileType === 'studio' }" @click="profileType = 'studio'">
                <span>Studio</span>
              </li>
              <li class="tab-link" :class="{ active :  profileType === 'artist' }" @click="profileType = 'artist'">
                <span>Artist</span>
              </li>
              <li class="tab-link" :class="{ active :  profileType === 'client' }" @click="profileType = 'client'">
                <span>Client</span>
              </li>
            </ul>

            <form>
              <div class="input-block-inline">
                <label><i class="fas fa-user"></i></label>
                <input type="text" class="input-block" placeholder="Username" v-model="user.username">
              </div>

              <div class="input-block-inline">
                <label><i class="fas fa-envelope"></i></label>
                <input type="text" class="input-block" placeholder="E-mail" v-model="user.email">
              </div>

              <div class="input-block-inline">
                <label><i class="fas fa-lock"></i></label>
                <input type="password" class="input-block" placeholder="********" v-model="user.password">
              </div>

              <div class="container align-center">
                <button
                  type="button"
                  class="btn btn-primary btn-block"
                  @click="register(user)"
                >Done!</button>
              </div>
            </form>
          </div>
        </div>
        <div class="text-align-center margin-top-20 fade-up delay-2">
          <p>Already have an account? Enter <nuxt-link to="/login">HERE</nuxt-link></p>
        </div>
      </div>
      <!-- step 1 -->

      <!-- step 2 artist -->
      <div v-else-if="step === 2 && profileType === 'artist'">
        <div class="text-align-center title">
          <span class="h1 fade-up">Complete your registration</span>
        </div>
        <div class="head-steps-2 fade-up delay-1">
          <div class="text-align-center">
            <span class="h2">Artist</span>
          </div>
          <ul class="list-none container-steps container align-center">
            <li class="container align-center column text-align-center">
              <div class="steps-ball container align-center disabled">
                1
              </div>
              <span>Login info</span>
            </li>
            <li class="container align-center column text-align-center">
              <div class="steps-ball container align-center active">
                2
              </div>
              <span>Personal info</span>
            </li>
            <li class="container align-center column text-align-center">
              <div class="steps-ball container align-center disabled">
                3
              </div>
              <span>Professional info</span>
            </li>
          </ul>
        </div>
        <div class="container-login fade-up delay-1">
          <div class="back-arrow">
            <div class="link" @click="step = 1">
              <i class="fas fa-angle-left"></i>
              <span>Back</span>
            </div>
          </div>
          <div class="login-block full">
              <ProfilePictureUpload></ProfilePictureUpload>
              <div class="container wrap container-form">
                <div class="group flex-basis-200 flex-grow-1">
                  <input type="text" name="name" required v-model="user.firstName">
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label>Name</label>
                </div>
                <div class="group flex-basis-200 flex-grow-1">
                  <input type="text" required v-model="user.lastName">
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label>Last name</label>
                </div>
                <div class="group flex-basis-200 flex-grow-1">
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
                <div class="group flex-basis-200 flex-grow-1">
                  <input
                    type="number"
                    required
                    v-model="user.age"
                  >
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label>Age</label>
                </div>
              </div>
          </div>
        </div>
        <no-ssr>
          <location @update="data => user.location = data"/>
        </no-ssr>
        <div class="container-next-step border-top-0 fade-up delay-1">
          <div class="input-block input-check container align-center text-align-center">
            <label>Available for travelling?</label>
            <input type="checkbox" class="checkbox" v-model="user.availableTravelling">
            <div class="check-bg" @click="user.availableTravelling = !user.availableTravelling" :class="{yes : user.availableTravelling}">
              <div class="check-yes fade delay-1" v-show="user.availableTravelling">
                YES
              </div>
              <div class="check-ball" :class="{yes : user.availableTravelling}"></div>
              <div class="check-no fade delay-1" v-show="!user.availableTravelling">
                NO
              </div>
            </div>
          </div>
        </div>
        <div class="container align-center column container-next-step fade-up delay-1">
          <button
            type="button"
            class="btn btn-primary btn-block"
            @click="update({ user, step: 2 })"
          >Next <i class="fas fa-angle-right"></i></button>
          <span>or</span>
          <a href="#">Do it later</a>
        </div>
      </div>
      <!-- step 2 artist -->

      <!-- step 3 artist -->
      <div v-else-if="step === 3 && profileType === 'artist'">
        <div class="text-align-center title">
          <span class="h1 fade-up">Complete your registration</span>
        </div>
        <div class="head-steps-2 fade-up delay-1">
          <div class="text-align-center">
            <span class="h2">Artist</span>
          </div>
          <ul class="list-none container-steps container align-center">
            <li class="container align-center column text-align-center">
              <div class="steps-ball container align-center disabled">
                1
              </div>
              <span>Login info</span>
            </li>
            <li class="container align-center column text-align-center">
              <div class="steps-ball container align-center disabled">
                2
              </div>
              <span>Personal info</span>
            </li>
            <li class="container align-center column text-align-center">
              <div class="steps-ball container align-center active">
                3
              </div>
              <span>Professional info</span>
            </li>
          </ul>
        </div>
        <div class="container-login fade-up delay-1">
          <div class="back-arrow">
            <div class="link" @click="step = 2">
              <i class="fas fa-angle-left"></i>
              <span>Back</span>
            </div>
          </div>
          <div class="container wrap align-center container-form margin-top-10">
            <div class="flex-basis-200 flex-grow-1">
              <p>Tattoo Style(s)</p>
              <ul class="list-none container wrap">
                <li class="label" v-for="(tattooStyle, index) in tattooStyles" >
                  {{ tattooStyle.title }}
                  <i class="far fa-times-circle" @click="removeTattooStyle(index)"></i>
                </li>
              </ul>
              <div class="group">
                <input type="text" required v-model="newTattooStyle">
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Enter a tattoo style</label>
                <i class="fas btn-edit fa-plus" @click="addTattooStyle()"></i>
              </div>
            </div>

            <div class="flex-basis-200 flex-grow-1">
              <p>Work at any Studio?</p>
              <ul class="list-none container wrap">
                <li class="label" v-for="(studio, index) in studios" >
                  {{ studio.title }}
                  <i class="far fa-times-circle" @click="removeStudio(index)"></i>
                </li>
              </ul>
              <div class="group">
                <input type="text" required v-model="newStudio">
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Enter a tattoo studio</label>
                <i class="fas btn-edit fa-plus" @click="addStudio()"></i>
              </div>
            </div>

            <div class="group flex-basis-400">
              <input
                type="number"
                required
                v-model="user.age"
              >
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Tell a little about the studio</label>
              <div class="container justify-content-end">
                <i>500 characters</i>
              </div>
            </div>

          </div>
          <div class="login-block full">
              <div class="container wrap container-form align-items-end">
                <div class="group flex-basis-200 flex-grow-1">
                  <input type="text" name="name" required v-model="user.firstName">
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label>@username</label>
                  <i class="fab btn-edit fa-instagram"></i>
                </div>
                <div class="flex-basis-200 flex-grow-1">
                  <p>Use your instagram profile to show your work. You can choose your favorite photos.</p>
                </div>
              </div>
          </div>
        </div>
        <div class="container align-center column container-next-step fade-up delay-1">
          <div class="margin-bottom-20">
            <p>By registering you agree with Worbink`s <a href="#">Terms and Conditions.</a> </p>
          </div>
          <button
            type="button"
            class="btn btn-primary btn-block"
            @click="update({ user, step: 'last' })"
          >Done!</button>
          <span>or</span>
          <a href="#">Skip this step</a>
        </div>
      </div>
      <!-- step 3 artist -->

      <!-- step 2 studio -->
      <div v-else-if="step === 2 && profileType === 'studio'">
        <div class="text-align-center title">
          <span class="h1 fade-up">Complete your registration</span>
        </div>
        <div class="head-steps-2 fade-up delay-1">
          <div class="text-align-center">
            <span class="h2">Studio</span>
          </div>
          <ul class="list-none container-steps container align-center">
            <li class="container align-center column text-align-center">
              <div class="steps-ball container align-center disabled">
                1
              </div>
              <span>Login info</span>
            </li>
            <li class="container align-center column text-align-center">
              <div class="steps-ball container align-center active">
                2
              </div>
              <span>General info</span>
            </li>
            <li class="container align-center column text-align-center">
              <div class="steps-ball container align-center disabled">
                3
              </div>
              <span>Artist</span>
            </li>
          </ul>
        </div>
        <div class="container-login fade-up delay-1">
          <div class="back-arrow">
            <div class="link" @click="step = 1">
              <i class="fas fa-angle-left"></i>
              <span>Back</span>
            </div>
          </div>
          <div class="login-block full">
              <ProfilePictureUpload></ProfilePictureUpload>
              <div class="container wrap container-form">
                <div class="group flex-basis-400 margin">
                  <input type="text" name="name" required v-model="user.firstName">
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label>Name</label>
                </div>

                <div class="group flex-basis-1200 flex-grow-1">
                  <textarea
                    v-model="user.aboutStudio"
                  ></textarea>
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label>Tell a little about the studio</label>
                  <div class="container justify-content-end">
                    <i>500 characters</i>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <no-ssr>
          <location @update="data => user.location = data"/>
        </no-ssr>
        <div class="container-next-step border-top-0 fade-up delay-1">
          <div class="input-block input-check container align-center text-align-center">
            <label>Available for guests?</label>
            <input type="checkbox" class="checkbox" v-model="user.availableGuest">
            <div class="check-bg" @click="user.availableGuest = !user.availableGuest" :class="{yes : user.availableGuest}">
              <div class="check-yes fade delay-1" v-show="user.availableGuest">
                YES
              </div>
              <div class="check-ball" :class="{yes : user.availableGuest}"></div>
              <div class="check-no fade delay-1" v-show="!user.availableGuest">
                NO
              </div>
            </div>
          </div>
        </div>
        <div class="container-workingtime container align-center column text-align-center fade-up delay-1">
          <div class="margin-bottom-10">
            <label class="h1">Working time</label>
          </div>
          <div class="workingtime-box container wrap">
            <div class="group flex-basis-200 flex-grow-1">
              <input type="time" name="from" required v-model="user.time.from">
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>From</label>
            </div>
            <div class="group flex-basis-200 flex-grow-1">
              <input type="time" name="from" required v-model="user.time.to">
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>To</label>
            </div>
            <div class="group flex-basis-200 flex-grow-1">
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
          </div>
        </div>
        <div class="container align-center column container-next-step fade-up delay-1">
          <button
            type="button"
            class="btn btn-primary btn-block"
            @click="update({ user, step: 2 })"
          >Next <i class="fas fa-angle-right"></i></button>
          <span>or</span>
          <a href="#">Do it later</a>
        </div>
      </div>
      <!-- step 2 studio -->

      <!-- step 3 studio -->
      <div v-else-if="step === 3 && profileType === 'studio'">
        <div class="text-align-center title">
          <span class="h1 fade-up">Complete your registration</span>
        </div>
        <div class="head-steps-2 fade-up delay-1">
          <div class="text-align-center">
            <span class="h2">Studio</span>
          </div>
          <ul class="list-none container-steps container align-center">
            <li class="container align-center column text-align-center">
              <div class="steps-ball container align-center disabled">
                1
              </div>
              <span>Login info</span>
            </li>
            <li class="container align-center column text-align-center">
              <div class="steps-ball container align-center disabled">
                2
              </div>
              <span>General info</span>
            </li>
            <li class="container align-center column text-align-center">
              <div class="steps-ball container align-center active">
                3
              </div>
              <span>Artists</span>
            </li>
          </ul>
        </div>

        <div class="container-login fade-up delay-1">
          <div class="back-arrow">
            <div class="link" @click="step = 2">
              <i class="fas fa-angle-left"></i>
              <span>Back</span>
            </div>
          </div>
            <div class="margin-bottom-10">
              <div class="text-align-center">
                <label class="h1">Add your artists profiles to your team</label>
              </div>
            </div>
            <div class="workingtime-box container wrap">
              <div class="group flex-basis-200 flex-grow-1">
                <input type="text" name="from" required v-model="teamName">
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Enter an artist name</label>
                <i @click="addTeam" class="fas btn-edit fa-plus"></i>
              </div>
            </div>
            <div class="workingtime-box container wrap">
              <div class="group flex-basis-200 flex-grow-1">
                <ul>
                  <li v-for="teamName in team">{{ teamName }}</li>
                </ul>
              </div>
            </div>
        </div>

        <div class="container align-center column container-next-step fade-up delay-1">
          <div class="margin-bottom-20">
            <p>By registering you agree with Worbink`s <a href="#">Terms and Conditions.</a> </p>
          </div>
          <button
            type="button"
            class="btn btn-primary btn-block"
            @click="update({ user, step: 'last' })"
          >Done!</button>
          <span>or</span>
          <a href="#">Skip this step</a>
        </div>
      </div>
      <!-- step 3 studio -->

      <!-- step 2 client -->
      <div v-else-if="step === 2 && profileType === 'client'">
        <div class="text-align-center title">
          <span class="h1 fade-up">Complete your registration</span>
        </div>
        <div class="head-steps-2 fade-up delay-1">
          <div class="text-align-center">
            <span class="h2">Client</span>
          </div>
          <ul class="list-none container-steps min-steps container align-center">
            <li class="container align-center column text-align-center">
              <div class="steps-ball container align-center disabled">
                1
              </div>
              <span>Login info</span>
            </li>
            <li class="container align-center column text-align-center">
              <div class="steps-ball container align-center active">
                2
              </div>
              <span>Personal info</span>
            </li>
          </ul>
        </div>
        <div class="container-login fade-up delay-1">
          <div class="back-arrow">
            <div class="link" @click="step = 1">
              <i class="fas fa-angle-left"></i>
              <span>Back</span>
            </div>
          </div>
          <div class="login-block full">
            <div class="container-input input-file container align-center column text-align-center">
              <label for="avatar" class="container-avatar container align-center column text-align-center">
                <input type="file" v-on:change="avatarUpload()" id="avatar" name="avatar" accept="image/png, image/jpeg" />
                <div class="avatar-img avatar-img-lg container align-center">
                  <i class="fas fa-camera"></i>
                </div>
                <span class="link">Upload a profile photo</span>
              </label>
            </div>
              <div class="container wrap container-form">
                <div class="group flex-basis-200 flex-grow-1">
                  <input type="text" name="name" required v-model="user.firstName">
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label>Name</label>
                </div>
                <div class="group flex-basis-200 flex-grow-1">
                  <input type="text" required v-model="user.lastName">
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label>Last name</label>
                </div>
                <div class="group flex-basis-200 flex-grow-1">
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
                <div class="group flex-basis-200 flex-grow-1">
                  <input type="text" required v-model="user.age">
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label>Age</label>
                </div>
                <div class="group flex-basis-400">
                  <input type="number" required v-model="user.bio">
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label>Tell a little about you</label>
                  <div class="container justify-content-end">
                    <i>500 characters</i>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <no-ssr>
          <location @update="data => user.location = data"/>
        </no-ssr>
        <div class="container align-center column container-next-step fade-up delay-1">
          <div class="margin-bottom-20">
            <p>By registering you agree with Worbink`s <a href="#">Terms and Conditions.</a> </p>
          </div>
          <button
            type="button"
            class="btn btn-primary btn-block"
            @click="update({ user, step: 'last' })"
          >Done!</button>
          <span>or</span>
          <a href="#">Do it later</a>
        </div>
      </div>
      <!-- step 2 client -->
    </div>
  </div>
</template>

<script>
import location from '@/components/location'
import { mapActions } from 'vuex'
import ProfilePictureUpload from '@/components/ProfilePictureUpload'

export default {
  layout: 'sign',

  middleware: 'public',

  components: {
    location,
    ProfilePictureUpload
  },

  asyncData(context) {
    return {
      profileType: context.store.state.profileType || context.query.type
    }
  },
  data() {
    return {
      user: {
        username: '',
        profileType: 'artist',
        email: '',
        password: '',
        pictureUrl: '',
        firstName: '',
        lastName: '',
        gender: '',
        age: '',
        location: '',
        availableTravelling: true,
        availableGuest: true,
        time: {
          to: '08:00',
          from: '18:00'
        },
        tattoo: {
          style: '',
          studio: ''
        },
        tattooStyles: [],
        studios: [],
        team: []
      },
      newTattooStyle: '',
      tattooStyles: [],
      newStudio: '',
      studios: [],
      teamName: '',
      team: []
    };
  },

  computed: {
    step: {
      get() {
        return this.$store.state.step
      },
      set(val) {
        this.$store.commit('setStep', val)
      }
    }
  },
  methods: {

    ...mapActions({
      register: 'account/register',
      update: 'account/update'
    }),

    avatarUpload() {
    },

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
    },

    addStudio() {
      this.studios = _.concat(this.studios, {
        title: this.newStudio
      })
      this.newStudio = ''
      this.user.studios = this.studios
    },

    removeStudio(index) {
      this.studios.splice(index, 1)
      this.user.studios = this.studios
    },


    addTeam() {
      this.team = _.concat(this.team, this.teamName)
      this.user.team = this.team
      this.teamName = ''
    }
  },

  watch: {
    profileType: function(type) {
      this.$store.commit('setProfileType', type)
    }
  }
};
</script>
