<template lang="html">
  <div class="">

    <div class="">
      <tabContent/>
    </div>

    <div class="fade-up">
      <div class="title title-about container align-items-center wrap">
        <span class="btn-back flex-basis-100 fade-up delay-1">
          <nuxt-link to="/"><i class="fas fa-angle-left"></i> Back</nuxt-link>
        </span>
        <span class="h1 flex-grow-1 text-align-center fade-up">Contact us</span>
        <span class="flex-basis-100"></span>
      </div>

      <div class="fade-up delay-2">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <br>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <br>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>

  </div>
</template>

<script>
import tabContent from '@/components/about/tab.vue'

export default {
  components: {
    tabContent
  },
   layout: 'about'
}
</script>

<style lang="scss">

</style>
