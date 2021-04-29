<template>
  <div class="home">

    <div class="landing-page-message-container-layer">
      
      <div class="landing-page-message-container">
        
        <div class="header-text">
          Mostafa Elbannan
        </div>
        
        <div class="sub-header-text">
          Full-Stack Developer
        </div>

        <div class="languages-container">
          <div>
            <fa-icon :icon="['fab', 'python']" class="language-logo python" />
          </div>

          <div>
            <fa-icon :icon="['fab', 'js']" class="language-logo js" />
          </div>

          <div>
            <fa-icon :icon="['fab', 'rust']" class="language-logo rust" />  
          </div>

        </div>

        <div>
          <button class="portfolio-button" @click="$router.push('/portfolio')">
            Portfolio
          </button>
        </div>

      </div>

    </div>

  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding-top: 0 !important;
}

.landing-page-message-container-layer {
  position: absolute;
  top: 23vh;
  left: 5vw;
  width: 90vw;
  margin-left: auto;
  margin-right: auto;
}

.landing-page-message-container {
  max-width: 800px;
  margin-right: auto;
  margin-left: auto;
}

.header-text {
  font-size: 30px;
}

.sub-header-text {
  font-size: 20px;
  color: getColor("light-purple");
}

.language-logo {
  margin-top: 12px;
  margin-left: 15px;
  margin-right: 15px;
  cursor: default;
  font-size: 65px;

  &.python {
    color: getColor('light-green');
  }

  &.js {
    color: getColor('light-orange');
  }

  &.rust {
    color: getColor('light-red');
  }
}

.languages-container {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 190px;
  margin-left: auto;
  margin-right: auto;
}

.portfolio-button {
  margin-top: 32px;
  font-size: 19px;
  background: transparent;
  color: getColor("dark-purple");
  font-weight: bold;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 10px;
  padding-right: 10px;
  border: 3px solid getColor("dark-purple");
  
  &:hover {
    background: getColor("off-white");
    border-color: getColor("off-white");
  }
}

@media screen and (min-width: $tabletWidth) {
  .header-text {
    font-size: 40px;
  }

  .sub-header-text {
    font-size: 28px;
  }

  .languages-container {
    max-width: none;
  }

  .language-logo {
    margin-top: 0;
  }

  .landing-page-message-container-layer {
    top: 29vh;
  }

  .portfolio-button {
    font-size: 23px;
    margin-top: 40px;
  }
}

@media screen and (min-width: $desktopWidth) {
  .header-text {
    font-size: 50px;
  }

  .sub-header-text {
    font-size: 32px;
  }
}
</style>