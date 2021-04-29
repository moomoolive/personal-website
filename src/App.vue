<template>
  <div id="app">
    <app-header class="app-header" />
    <vue-page-transition name="fade-in-right">
      <router-view class="viewing-page" />
    </vue-page-transition>
    <app-footer class="app-footer" />
  </div>
</template>

<script>
import appHeader from './components/Header.vue'
import appFooter from './components/Footer.vue'

export default {
  name: "AppMain",
  components: {
    appHeader,
    appFooter
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
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: getColor("off-white");
}

::-webkit-scrollbar-thumb {
  background: getColor("light-grey");
}

::-webkit-scrollbar-thumb:hover {
  background: getColor("light-grey");
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

@media screen and (min-width: $tabletWidth) {

}

@media screen and (min-width: $desktopWidth) {
  
}
</style>
