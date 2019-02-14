<template lang="html">
<div class="size margin box-min my-account">

  <div class="title text-align-center fade">
    <span class="btn-back back-absolute flex-basis-100 fade-up delay-1">
      <nuxt-link to="/"><i class="fas fa-angle-left"></i> Back</nuxt-link>
    </span>
    <h2 class="h2">My account</h2>
  </div>

  <ul class="tabs container align-center wrap fade delay-1">
    <li class="tab-link tab-link-account" :class="{active :  tabActive === 'my-profile'}" @click="tabActive = 'my-profile'">
      <span>My profile</span>
    </li>
    <li class="tab-link tab-link-account" :class="{active :  tabActive === 'my-favorites'}" @click="tabActive = 'my-favorites'">
      <span>My Favorites</span>
    </li>
    <li class="tab-link tab-link-account" :class="{active :  tabActive === 'privacy'}" @click="tabActive = 'privacy'">
      <span>Privacy</span>
    </li>
    <!-- <li class="tab-link tab-link-account" :class="{active :  tabActive === 'messages'}" @click="tabActive = 'messages'">
      <span>Messages (1)</span>
    </li> -->
  </ul>

  <div class="fade delay-2">
    <!-- tab my profiles  -->
    <div class="fade-up" v-show="tabActive === 'my-profile'">
      <myProfile>
      </myProfile>
    </div>
    <!-- tab my profiles  -->

    <!-- tab my favorites -->
    <div class="fade-up" v-show="tabActive === 'my-favorites'">
      <div class="box-content">
        <div class="content-size">
          <div class="title text-align-center">
            <span class="h2">My favorites</span>
          </div>
          <div class="sub-title">
            <p>Worbink is a tool to connect people around the world throught a business network foccused in experience exchange. With that in mind, different kinds of profile(Clients, Artists and Studios) may want to contact you, that's why we respect your privacy.</p>
          </div>
        </div>
        <hr class="hr">
      </div>
      <div class="container align-center column container-btn-save">
        <button type="button" name="button" class="btn btn-primary btn-block">Save</button>
        <span>or</span>
        <a href="#">Cancel</a>
      </div>
    </div>
    <!-- tab my favorites -->

    <!-- tab privacy -->
    <div class="fade-up" v-show="tabActive === 'privacy'">
      <div class="box-content ">
        <div class="content-size">
          <div class="title text-align-center">
            <span class="h2">Privacy</span>
          </div>
          <div class="sub-title">
            <p>Worbink is a tool to connect people around the world throught a business network foccused in experience exchange. With that in mind, different kinds of profile(Clients, Artists and Studios) may want to contact you, that's why we respect your privacy.</p>
          </div>
        </div>
        <hr class="hr">
        <div class="container wrap container-form content-size">
          <div class="flex-basis-300 flex-grow-1">
            <label class="margin-bottom-20 block">Who can send you messages?</label>
            <label class="container-check">Clients
              <input type="checkbox" value="clients" v-model="whoSendMessages">
              <span class="checkmark"></span>
            </label>
            <label class="container-check">Artists
              <input type="checkbox" value="artists" v-model="whoSendMessages">
              <span class="checkmark"></span>
            </label>
            <label class="container-check">Studios
              <input type="checkbox" value="studios" v-model="whoSendMessages">
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="flex-basis-300 flex-grow-1">
            <label class="margin-bottom-20 block">Want to recieve notifications in your registered e-mail?</label>
            <label class="container-check">About new messages
              <input type="checkbox" value="messages" v-model="notifications">
              <span class="checkmark"></span>
            </label>
            <label class="container-check">About news from my favorites
              <input type="checkbox" value="favorites" v-model="notifications">
              <span class="checkmark"></span>
            </label>
            <label class="container-check">About new features
              <input type="checkbox" value="features" v-model="notifications">
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
      </div>
      <div class="container align-center column container-btn-save">
        <button type="button" name="button" class="btn btn-primary btn-block">Save</button>
        <span>or</span>
        <a href="#">Cancel</a>
      </div>
    </div>
    <!-- tab privacy -->

    <!-- tab messages -->
    <div class="fade-up" v-show="tabActive === 'messages'">
      <div class="box-content">
        <div class="content-size">
          <div class="title text-align-center">
            <span class="h2">Messages</span>
          </div>
          <div class="sub-title">
            <p>Worbink is a tool to connect people around the world throught a business network foccused in experience exchange. With that in mind, different kinds of profile(Clients, Artists and Studios) may want to contact you, that's why we respect your privacy.</p>
          </div>
        </div>
        <hr class="hr">
      </div>
      <div class="container align-center column container-btn-save">
        <button type="button" name="button" class="btn btn-primary btn-block">Save</button>
        <span>or</span>
        <a href="#">Cancel</a>
      </div>
    </div>
    <!-- tab messages -->
  </div>

</div>
</template>

<script>
import myProfile from "@/components/my-profile.vue"

export default {
  layout: "logged",
  components: {
    myProfile
  },
  middleware: 'auth',
  data() {
    return {
      tabActive: "my-profile",
      whoSendMessages: [],
      notifications: []
    };
  }
};
</script>

<style lang="scss">
.my-account {
  .tab-link span {
    text-transform: uppercase;
    font-weight: bold;
    color: $color-primary;
    &:hover {
      color: $color-secundary;
    }
  }
  .tab-link.active span {
    color: $color-dark;
  }
}
</style>
