<template lang="html">
  <div class="content-login">
    <div class="size margin">
      <pre v-show="send">
        {{login.step}}
        {{user.type}}
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
          <li class="tab-link" :class="{active :  user.type === 'studio'}" @click="user.type = 'studio'">
            <span>Studio</span>
          </li>
          <li class="tab-link" :class="{active :  user.type === 'artist'}" @click="user.type = 'artist'">
            <span>Artist</span>
          </li>
          <li class="tab-link" :class="{active :  user.type === 'client'}" @click="user.type = 'client'">
            <span>Client</span>
          </li>
        </ul>

        <form class="">
          <div class="input-block-inline">
            <label for=""><i class="fas fa-user"></i></label>
            <input type="text" name="" value="" class="input-block" placeholder="Username" v-model="user.name">
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
            <button type="button" name="button" class="btn btn-primary btn-block" @click="submitRegister()">Register</button>
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
<div class="" v-show="login.step === 2 && user.type === 'artist'">
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
    <div class="login-block">
      <form class="">
        <div class="container-input input-file container align-center column text-align-center">
          <label for="avatar" class="container-avatar container align-center column text-align-center">
            <input type="file" v-on:change="avatarUpload()" id="avatar" name="avatar" accept="image/png, image/jpeg" />
            <div class="avatar-img avatar-img-lg container align-center">
              <i class="fas fa-camera"></i>
            </div>
            <span class="link">Upload a profile photo</span>
          </label>
        </div>

        <div class="container-input">
          <label for="">Name</label>
          <input type="text" name="" value="" class="input-block" placeholder="Name" v-model="user.firstName">
        </div>

        <div class="container-input">
          <label for="">Last name</label>
          <input type="text" name="" value="" class="input-block" placeholder="Last name" v-model="user.lastName">
        </div>

        <div class="container-input">
          <label for="">Gender</label>
          <input type="text" name="" value="" class="input-block" placeholder="Gender" v-model="user.gender">
        </div>

        <div class="container-input">
          <label for="">Age</label>
          <input type="text" name="" value="" class="input-block" placeholder="Age" v-model="user.age">
        </div>

        <div class="container-input">
          <label for="">Location</label>
          <input type="text" name="" value="" class="input-block" placeholder="Location" v-model="user.location">
        </div>

        <div class="input-block">
          <label for="">Available for travelling?</label>
          <input type="checkbox" name="" value="" v-model="user.availableTravelling">
        </div>

      </form>
    </div>
  </div>
  <div class="container align-center column container-next-step fade-up delay-2">
    <button type="button" name="button" class="btn btn-primary btn-block" @click="submitRegister()">Next <i class="fas fa-angle-right"></i></button>
    <span>or</span>
    <a href="#">Do it later</a>
  </div>
</div>

<!-- step 2 artist -->

    </div>
  </div>
</template>

<script>
export default {
  layout: 'sign',
  data() {
    return {
      send: false,
      login: {
        step: 2,
        type: 'artist'
      },
      user: {
        type: 'artist',
        name: '',
        email: '',
        password: '',
        image: '',
        firstName: '',
        lastName: '',
        gender: '',
        age: '',
        location: '',
        availableTravelling: ''
      }
    }
  },
  methods: {
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
    }

  }
}
</script>

<style lang="scss">
</style>
