<template>
  <nav class="navbar navbar-dark bg-dark">
    <!-- Navbar content -->
    <a class="navbar-brand" href="#">Mon livre d'or</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link to="home" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="example" class="nav-link">Example Vue.js</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Mes articles</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Je créer un article</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
  @import "./header";
</style>
