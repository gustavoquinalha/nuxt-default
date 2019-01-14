<template lang="html">
<div class="bg-content">
  <div class="size margin content" id="content">

    <div class="title text-align-center">
      <h2>Start your connections right now and share you art with world</h2>
    </div>

    <div class="cards-container container wrap">

      <div class="card flex-basis-200 flex-grow-1 text-align-center">
        <div class="card-img card-img_studio"></div>
        <div class="card-title">
          <h3 class="h2">Studio</h3>
        </div>
        <div class="card-desc">
          <p>Enjoy the experience and bring different artists as a guest for yout studio.</p>
        </div>
        <div class="card-btn">
          <nuxt-link to="/register?type=studio" class="btn">Register now</nuxt-link>
        </div>
      </div>

      <div class="card flex-basis-200 flex-grow-1 text-align-center">
        <div class="card-img card-img_artist"></div>
        <div class="card-title">
          <h3 class="h2">Artist</h3>
        </div>
        <div class="card-desc">
          <p>Book with the best studios in the right place around the world.</p>
        </div>
        <div class="card-btn">
          <nuxt-link to="/register?type=artist" class="btn">Register now</nuxt-link>
        </div>
      </div>

      <div class="card flex-basis-200 flex-grow-1 text-align-center">
        <div class="card-img card-img_client"></div>
        <div class="card-title">
          <h3 class="h2">Client</h3>
        </div>
        <div class="card-desc">
          <p>Follow your preferer tattoo artist and see where he will be tattooing.</p>
        </div>
        <div class="card-btn">
          <nuxt-link to="/register?type=client" class="btn">Register now</nuxt-link>
        </div>
      </div>

    </div>

  </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.content {
  padding: 50px 0;
}

.title {
  padding: 0 10px;
  box-sizing: border-box;
}

.cards-container {
}

.card {
  margin: 10px;
}

.card-img {
  min-height: 200px;
  width: 100%;
  background: $color-primary;
  margin-bottom: 20px;
}

.card-img_studio {
  background: url('~assets/img/home/studio.png'), $color-primary;
}

.card-img_artist {
  background: url('~assets/img/home/artist.png'), $color-primary;
}

.card-img_client {
  background: url('~assets/img/home/client.png'), $color-primary;
}

.card-img_studio,
.card-img_artist,
.card-img_client {
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

.card-desc {
  margin-top: 15px;
  margin-bottom: 20px;
}

@media (max-width: 480px) {
  .bg-content {
    background: $color-light;
      .content {
        background: $color-white;
        border-radius: 3px;
      }
  }

  .card {
    border-bottom: 1px solid #ddd;
    padding-bottom: 30px;
    margin-bottom: 20px;
    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
      margin-bottom: 0;
    }
  }
}
</style>
