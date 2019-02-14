<template>
  <div class="container-input input-file container align-center column text-align-center">
    <label for="avatar" class="container-avatar container align-center column text-align-center">
      <input id="avatar" type="file" @change="fileChange" ref="inputFile" name="avatar" accept="image/png, image/jpeg" />
      <div class="profile-picture avatar-img avatar-img-lg container align-center">
        <img v-if="$store.getters['account/pictureUrl']" :src="$store.getters['account/pictureUrl']">
        <i v-else class="fas fa-camera"></i>
      </div>
      <span class="link">Upload a profile photo</span>
    </label>
  </div>
</template>

<script>
export default {
  props: ['one'],
  methods: {
    fileChange(event) {
      try {
        if (event.target.files.length && event.target.files[0]) {
          this.$store.dispatch('account/uploadProfilePic', event.target.files[0])
          this.$refs.inputFile.$el.value = ''
        }
      } catch (error) {
        this.$refs.inputFile.value = ''
      }
    }
  }
}
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
