<template lang="html">
<div class="menu">
  <div class="size margin">
    <div class="menu-container container wrap align-items-center justify-content-between">
      <div class="menu-logo">
         <img src="~/assets/img/logo.png" class="logo" alt="" />
      </div>

      <div class="menu-btn container">
        <button type="button" name="button" class="btn btn-outline btn-margin-right">Login</button>
        <button type="button" name="button" class="btn">Register</button>
      </div>

      <div class="menu-btn-responsive">
        <button type="button" name="button" class="btn btn-outline">
          <i class="fas fa-sign-in-alt"></i>
          Enter
        </button>
      </div>

    </div>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.menu {
  width: 100%;
  background: $color-light;
  padding: 5px;
  box-sizing: border-box;
}

.logo {
  width: 100%;
  max-width: 120px;
}

.menu-container {
  min-height: 50px;
}

.menu-btn {
  display: flex;
}

.menu-btn-responsive {
  display: none;
}

@media (max-width: 480px) {
  .menu-btn {
    display: none;
  }
  .menu-btn-responsive {
    display: flex;
  }
}

@media (max-width: 236px) {
  .menu-container {
    flex-direction: column;
    .btn {
      margin-top: 5px;
    }
  }
}
</style>
