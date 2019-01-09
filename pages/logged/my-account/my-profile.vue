<template lang="html">
<div>
  <div class="container-picture">
    <input type="file" id="profilePicture" class="hidden" @change="fileChange">
    <label for="profilePicture">
      <div class="profile-picture">
        <img :src="$store.getters['account/pictureUrl']">
      </div>
      <span>Change profile photo</span>
    </label>
  </div>
  <div class="container container-box-content">
    <div class="box-content">
      <div class="content-size">
        <div class="title text-align-center">
          <span class="h2">Acces Info</span>
        </div>
        <div class="container column container-form margin-top-10">
          <div class="group">
            <input type="text" name="name" required v-model="user.type">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Profile type</label>
            <i class="btn-edit fas fa-pen"></i>
          </div>
          <div class="group">
            <input type="text" name="name" required v-model="user.firstName">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>First name</label>
            <i class="btn-edit fas fa-pen"></i>
          </div>
          <div class="group">
            <input type="text" name="lastName" required v-model="user.lastName">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Last name</label>
            <i class="btn-edit fas fa-pen"></i>
          </div>
          <div class="group">
            <input type="text" name="lastName" required v-model="user.email">
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
            <select class="" name="lastName" required v-model="user.gender">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Gender</label>
            <i class="btn-edit fas fa-pen"></i>
          </div>
          <div class="group">
            <input type="text" name="lastName" required v-model="user.age">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Age</label>
            <i class="btn-edit fas fa-pen"></i>
          </div>
          <div class="group">
            <textarea rows="4" v-model="user.about"></textarea>
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
    <div class="container-location container align-center column text-align-center fade-up delay-1 full-width">
      <div class="margin-bottom-10">
        <label for="" class="h1">Location</label>
      </div>
      <div class="group max-width">
        <input type="text" name="lastName" required v-model="user.location">
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Enter your location</label>
        <i class="btn-edit fas fa-pen"></i>
      </div>
      <div class="container-map">
        <iframe width="100%" height="300" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/search?key=AIzaSyD6TwKebgynScOZTqJtpDQ5GvhrZtVQZNA&q=Tattoo+In+Nova+York" allowfullscreen></iframe>
      </div>
      <div class="padding-16">
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
    </div>
  </div>

  <div class="margin-top-16">
    <div class="box-content">
      <div class="margin-bottom-10 text-align-center">
        <label for="" class="h1">Work</label>
      </div>
      <div class="group margin" style="max-width: 500px">
        <input type="text" name="lastName" required v-model="user.instagram">
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
        <div class="flex-basis-400 flex-grow-1">
        <p>Work at:</p>
        <div class="group">
          <b class="color-primary">Bernartti Tattoo Studio</b>
        </div>
      </div>
     </div>

    </div>
  </div>

</div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        type: "Artist",
        name: "Lucas",
        email: "lucaslucas@gmail.com",
        image: "",
        firstName: "Lucas",
        lastName: "Da Silva",
        gender: "Male",
        instagram: "@lcuaslucas",
        age: "22 years old",
        location: "Rio de Janeiro, RJ - Brazil",
        availableTravelling: true,
        availableGuest: true,
        about: "Lore ipusm aosid asoid oaisjdaosidj oaisj",
        time: {
          to: "08:00",
          from: "18:00"
        },
        tattoo: {
          style: "",
          studio: ""
        }
      },
      newTattoStyle: "",
      tattooStyles: [
        {
          id: 1,
          title: "Old School"
        },
        {
          id: 2,
          title: "New School"
        }
      ],
      nextTattoStyleID: 3
    };
  },
  methods: {
    submitRegister() {
      if (this.login.step === 1) {
        this.login.step = 2;
        console.log("register");
      } else if (this.login.step === 2) {
        this.login.step = 3;
        console.log("Complete your registration");
        if (this.type === "client") {
          this.$router.replace({ path: "/logged/my-account" });
        }
      } else if (this.login.step === 3) {
        this.login.step = 4;
        console.log("done");
        this.$router.replace({ path: "/logged/my-account" });
      }
    },

    addNewTattoStyle: function() {
      this.tattooStyles.push({
        id: this.nextTattoStyleID++,
        title: this.newTattoStyle
      });
      this.newTattoStyle = "";
    },

    fileChange(event) {
      this.$store.dispatch('account/uploadProfilePic', event.target.files[0])
    }
  }
};
</script>

<style lang="scss">
.container-picture {
  margin: 0 auto;
  text-align: center;
  padding-bottom: 32px;
  span {
    color: $color-primary;
    cursor: pointer;
    transition: 0.3s;
  }
  label {
    display: inline-block;
    width: auto;
    margin: 0 auto;
    &:hover {
      span {
        color: $color-primary-dark;
      }
      .profile-picture {
        transform: scale(1.1, 1.1);
      }
    }
  }
}

.profile-picture {
  cursor: pointer;
  width: 80px;
  height: 80px;
  background: $color-primary;
  margin: 0 auto;
  border-radius: 50%;
  margin-bottom: 8px;
  overflow: hidden;
  transition: 0.3s;
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
}
</style>
