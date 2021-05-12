<template>
  <div id="app">

    <particles-bg 
      color="#00BFFF" 
      type="cobweb"
      class="homepage-background"
    />

    <app-header class="app-header" />

    <vue-page-transition name="fade-in-right">
      <router-view class="viewing-page" />
    </vue-page-transition>
    
    <app-footer class="app-footer" />

  </div>
</template>

<script>
import appHeader from './components/header/main.vue'
import appFooter from './components/Footer.vue'

import { ParticlesBg } from "particles-bg-vue"

export default {
  name: "AppMain",
  components: {
    appHeader,
    appFooter,
    ParticlesBg
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: getColor("off-white");
  min-width: $appMinimumWidth;
  overflow: hidden;
}

div {
  margin: 0 0 0 0;
  padding: 0 0 0 0;
}

body {
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  background: getColor("dark-grey");
}

button {
  outline: none;
  border: none;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: getColor("light-purple");
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: getColor("dark-grey");
}

::-webkit-scrollbar-thumb {
  background: getColor("grey", 0.6);
}

::-webkit-scrollbar-thumb:hover {
  background: getColor("grey", 0.6);
}

.app-header {
  position: fixed;
  top: 0;
  z-index: 10;
}

.viewing-page {
  padding-top: 50px;
  min-height: 90vh;
}

.homepage-background {
  position: fixed;
  height: 100vh !important;
  width: 100vw !important;
  min-width: 1100px !important;
  left: 2.5vw;
  top: 0;
  z-index: -1;
  margin-left: auto;
  margin-right: auto;
}

@media screen and (min-width: $tabletWidth) {

}

@media screen and (min-width: $desktopWidth) {
  .viewing-page {
    padding-top: 65px;
  }
}
</style>
