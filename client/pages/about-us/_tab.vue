<template lang="html">
  <div class="">
    <ul class="list-none container align-center wrap ul-social">
      <li
        :class="{
          'active': $route.path === tab.path
        }"
        v-for="tab in tabs"
        :key="tab.name"
      >
        <nuxt-link
          exact
          :to="tab.path"
          class="footer-link"
        >{{tab.name}}</nuxt-link>
      </li>
    </ul>
    <div
      v-show="$route.path === tab.path"
      v-for="tab in tabs"
      :key="tab.name"
    >
      {{tab.name}}
    </div>
  </div>
</template>

<script>
export default {
  layout: 'about',
  data() {
    return {
      tabs: [
        {
          path: '/about-us/',
          name: 'about-us'
        },
        {
          path: '/contact-us',
          name: 'contact-us'
        },
        {
          path: '/terms-and-conditions',
          name: 'terms-and-conditions'
        }
      ]
    }
  }
}
</script>

<style lang="css">
  .active {
    background-color: black;
  }
</style>
