<template lang="html">
  <div class="content-login">
    <div class="size margin">
      <pre v-show="send">
        {{login.step}}
        {{profileType}}
        {{user}}
      </pre>
<!-- step 1 -->
  <div class="" v-show="login.step === 1">
    <div class="text-align-center title">
      <span class="h1 fade-up">Register</span>
    </div>
    <div class="container-login fade-up delay-1">
      <div class="login-block">
        <p class="margin-bottom-20">Choose a profile a type:</p>
        <ul class="tabs container align-center wrap justify-content-around">
          <li class="tab-link" :class="{active :  profileType === 'studio'}" @click="profileType = 'studio'">
            <span>Studio</span>
          </li>
          <li class="tab-link" :class="{active :  profileType === 'artist'}" @click="profileType = 'artist'">
            <span>Artist</span>
          </li>
          <li class="tab-link" :class="{active :  profileType === 'client'}" @click="profileType = 'client'">
            <span>Client</span>
          </li>
        </ul>

        <form class="">
          <div class="input-block-inline">
            <label for=""><i class="fas fa-user"></i></label>
            <input type="text" name="" value="" class="input-block" placeholder="Username" v-model="user.username">
          </div>

          <div class="input-block-inline">
            <label for=""><i class="fas fa-envelope"></i></label>
            <input type="text" name="" value="" class="input-block" placeholder="E-mail" v-model="user.email">
          </div>

          <div class="input-block-inline">
            <label for=""><i class="fas fa-lock"></i></label>
            <input type="password" name="" value="" class="input-block" placeholder="********" v-model="user.password">
          </div>

          <div class="container align-center">
            <button
              type="button"
              name="button"
              class="btn btn-primary btn-block"
              @click="register({
                username: user.username,
                email: user.email,
                password: user.password,
                profileType
              })"
            >Done!</button>
          </div>
        </form>
        <pre v-show="send">
          {{user}}
        </pre>
      </div>
    </div>
    <div class="text-align-center margin-top-20 fade-up delay-2">
      <p>Already have an account? Enter <nuxt-link to="/login">HERE</nuxt-link></p>
    </div>
  </div>
<!-- step 1 -->

<!-- step 2 artist -->
<div class="" v-show="login.step === 2 && profileType === 'artist'">
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
      <div class="link" @click="login.step = 1">
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
            <input type="text" name="lastName" required v-model="user.lastName">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Last name</label>
          </div>
          <div class="group flex-basis-200 flex-grow-1">
            <select class="" name="lastName" required v-model="user.gender">
              <option value=""></option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Gender</label>
          </div>
          <div class="group flex-basis-200 flex-grow-1">
            <input type="text" name="lastName" required v-model="user.ager">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Age</label>
          </div>
        </div>
    </div>
  </div>
  <div class="container-location container align-center column text-align-center fade-up delay-1">
    <div class="margin-bottom-10">
      <label for="" class="h1">Location</label>
    </div>
    <div class="group">
      <input type="text" name="lastName" required v-model="user.location">
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Enter your location</label>
      <i class="btn-edit fas fa-pen"></i>
    </div>
    <div class="container-map">
      <iframe width="100%" height="300" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/search?key=AIzaSyD6TwKebgynScOZTqJtpDQ5GvhrZtVQZNA&q=Tattoo+In+Nova+York" allowfullscreen></iframe>
    </div>
  </div>
  <div class="container-next-step border-top-0 fade-up delay-1">
    <div class="input-block input-check container align-center text-align-center">
      <label for="">Available for travelling?</label>
      <input type="checkbox" name="" class="checkbox" value="" v-model="user.availableTravelling">
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
    <button type="button" name="button" class="btn btn-primary btn-block" @click="submitRegister()">Next <i class="fas fa-angle-right"></i></button>
    <span>or</span>
    <a href="#">Do it later</a>
  </div>
</div>
<!-- step 2 artist -->

<!-- step 3 artist -->
<div class="" v-show="login.step === 3 && profileType === 'artist'">
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
      <div class="link" @click="login.step = 2">
        <i class="fas fa-angle-left"></i>
        <span>Back</span>
      </div>
    </div>
    <div class="container wrap align-center container-form margin-top-10">
      <div class="flex-basis-200 flex-grow-1">
        <p>Tattoo Style(s)</p>
        <ul class="list-none container wrap">
          <li class="label" v-for="tattooStyle in tattooStyles" >
            {{ tattooStyle.title }}
            <i class="far fa-times-circle" @click="$emit('remove')"></i>
          </li>
        </ul>
        <div class="group">
          <input type="text" name="lastName" required v-model="newTattoStyle">
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Enter a tattoo style</label>
          <i class="fas btn-edit fa-plus" @click="addNewTattoStyle()"></i>
        </div>
      </div>

      <div class="flex-basis-200 flex-grow-1">
        <p>Work at any Studio?</p>
        <ul class="list-none container wrap">
          <li class="label" v-for="studio in studios" >
            {{ studio.title }}
            <i class="far fa-times-circle" @click="$emit('remove')"></i>
          </li>
        </ul>
        <div class="group">
          <input type="text" name="lastName" required v-model="newStudio">
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Enter a tattoo studio</label>
          <i class="fas btn-edit fa-plus" @click="addStudio()"></i>
        </div>
      </div>

      <div class="group flex-basis-400">
        <input type="text" name="lastName" required v-model="user.ager">
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
    <button type="button" name="button" class="btn btn-primary btn-block" @click="submitRegister()">Done!</button>
    <span>or</span>
    <a href="#">Skip this step</a>
  </div>
</div>
<!-- step 3 artist -->

<!-- step 2 studio -->
<div class="" v-show="login.step === 2 && profileType === 'studio'">
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
      <div class="link" @click="login.step = 1">
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
          <div class="group flex-basis-400 margin">
            <input type="text" name="name" required v-model="user.firstName">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Name</label>
          </div>

          <div class="group flex-basis-1200 flex-grow-1">
            <input type="text" name="lastName" required v-model="user.ager">
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
  <div class="container-location container align-center column text-align-center fade-up delay-1">
    <div class="margin-bottom-10">
      <label for="" class="h1">Location</label>
    </div>
    <div class="group">
      <input type="text" name="lastName" required v-model="user.location">
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Enter your location</label>
      <i class="btn-edit fas fa-pen"></i>
    </div>
    <div class="container-map">
      <iframe width="100%" height="300" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/search?key=AIzaSyD6TwKebgynScOZTqJtpDQ5GvhrZtVQZNA&q=Tattoo+In+Nova+York" allowfullscreen></iframe>
    </div>
    <div class="input-block input-check container align-center text-align-center border-map">
      <label for="">Available for guests?</label>
      <input type="checkbox" name="" class="checkbox" value="" v-model="user.availableGuest">
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
      <label for="" class="h1">Working time</label>
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
        <select class="" name="lastName" required v-model="user.gender">
          <option value=""></option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
        </select>
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Repeat</label>
      </div>
    </div>
  </div>
  <div class="container align-center column container-next-step fade-up delay-1">
    <button type="button" name="button" class="btn btn-primary btn-block" @click="submitRegister()">Next <i class="fas fa-angle-right"></i></button>
    <span>or</span>
    <a href="#">Do it later</a>
  </div>
</div>
<!-- step 2 studio -->

<!-- step 3 artist -->
<div class="" v-show="login.step === 3 && profileType === 'studio'">
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
      <div class="link" @click="login.step = 2">
        <i class="fas fa-angle-left"></i>
        <span>Back</span>
      </div>
    </div>

      <div class="margin-bottom-10">
        <div class="text-align-center">
          <label for="" class="h1">Add your artists profiles to your team</label>
        </div>
      </div>
      <div class="workingtime-box container wrap">
        <div class="group flex-basis-200 flex-grow-1">
          <input type="text" name="from" required v-model="user.username">
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Enter an artist name</label>
          <i class="fas btn-edit fa-plus"></i>
        </div>
      </div>

  </div>

  <div class="container align-center column container-next-step fade-up delay-1">
    <div class="margin-bottom-20">
      <p>By registering you agree with Worbink`s <a href="#">Terms and Conditions.</a> </p>
    </div>
    <button type="button" name="button" class="btn btn-primary btn-block" @click="submitRegister()">Done!</button>
    <span>or</span>
    <a href="#">Skip this step</a>
  </div>
</div>
<!-- step 3 artist -->

<!-- step 2 client -->
<div class="" v-show="login.step === 2 && profileType === 'client'">
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
      <div class="link" @click="login.step = 1">
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
            <input type="text" name="lastName" required v-model="user.lastName">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Last name</label>
          </div>
          <div class="group flex-basis-200 flex-grow-1">
            <select class="" name="lastName" required v-model="user.gender">
              <option value=""></option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Gender</label>
          </div>
          <div class="group flex-basis-200 flex-grow-1">
            <input type="text" name="lastName" required v-model="user.ager">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Age</label>
          </div>
          <div class="group flex-basis-400">
            <input type="text" name="lastName" required v-model="user.ager">
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
  <div class="container-location container align-center column text-align-center fade-up delay-1">
    <div class="margin-bottom-10">
      <label for="" class="h1">Location</label>
    </div>
    <div class="group">
      <input type="text" name="lastName" required v-model="user.location">
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Enter your location</label>
      <i class="btn-edit fas fa-pen"></i>
    </div>
    <div class="container-map">
      <iframe width="100%" height="300" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/search?key=AIzaSyD6TwKebgynScOZTqJtpDQ5GvhrZtVQZNA&q=Tattoo+In+Nova+York" allowfullscreen></iframe>
    </div>
  </div>

  <div class="container align-center column container-next-step fade-up delay-1">
    <div class="margin-bottom-20">
      <p>By registering you agree with Worbink`s <a href="#">Terms and Conditions.</a> </p>
    </div>
    <button
      type="button"
      name="button"
      class="btn btn-primary btn-block"
      @click="register({
        username,
        email,
        password
      })"
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
import { mapActions } from 'vuex'
export default {
  name: 'register',
  layout: 'sign',
  data() {
    return {
      profileType: 'artist',
      send: false,
      login: {
        step: 1,
        type: 'artist'
      },
      user: {
        type: 'artist',
        username: '',
        email: '',
        password: '',
        image: '',
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
        }
      },
      newTattoStyle: '',
      tattooStyles: [{
          id: 1,
          title: 'Old School',
        },
        {
          id: 2,
          title: 'New School',
        }
      ],
      nextTattoStyleID: 3,
      newStudio: '',
      studios: [{
        id: 1,
        title: 'Bernarti Studio',
      }],
      nextStudioID: 2,
    }
  },
  methods: {
    ...mapActions({
      register: 'account/register'
    }),

    submitRegister() {
      if (this.login.step === 1) {
        this.login.step = 2;
        console.log('register');
      } else if (this.login.step === 2) {
        this.login.step = 3;
        console.log('Complete your registration');
      } else if (this.login.step === 3) {
        this.login.step = 4;
        console.log('Complete your registration');
      }
    },

    avatarUpload() {
      console.log('upload img');
    },

    addNewTattoStyle: function() {
      this.tattooStyles.push({
        id: this.nextTattoStyleID++,
        title: this.newTattoStyle
      })
      this.newTattoStyle = ''
    },

    addStudio: function() {
      this.studios.push({
        id: this.nextStudioID++,
        title: this.newStudio
      })
      this.newStudio = ''
    }

  }
}
</script>

<style lang="scss">
</style>
