<template>
    <div class="navigation-container">
        <div class="main-navigation">
            <div class="website-logo " @click="redirect('/')">
                <fa-icon icon="laptop-code" class="navigation-icon" />
            </div>
            <div class="left-side-navigation">
                <fa-icon 
                    class="navigation-icon expandable-menu" 
                    icon="bars" 
                    @click="toggleNavigationMenu()" 
                />
                <div class="large-screen-navigation navigation-icon">
                    <span class="large-screen-navigation-item" @click="redirect('/portfolio')">
                        Portfolio
                    </span>
                    <span class="large-screen-navigation-item" @click="redirect('/about')">
                        About
                    </span>
                </div>
            </div>
        </div>
        <collapse-transition :duration="500">
            <div 
                v-show="showNavigation" 
                :class="`navigation-pages-list-container${showNavigation ? '' : ' closed'}`"
            >
                <div class="navigation-page-container" @click="redirect('/portfolio')">
                    Portfolio
                </div>
                <div class="navigation-page-container" @click="redirect('/about')">
                    About
                </div>
            </div>
        </collapse-transition>
    </div>
</template>

<script>
import { CollapseTransition } from "@ivanv/vue-collapse-transition"

export default {
    name: "appHeader",
    components: {
        CollapseTransition
    },
    data() {
        return {
            showNavigation: false
        }
    },
    methods: {
        toggleNavigationMenu() {
            this.showNavigation = !this.showNavigation
        },
        closeNavigationMenu() {
            this.showNavigation = false
        },
        redirect(path="/portfolio") {
            if (path === this.$route.fullPath)
                return
            this.closeNavigationMenu()
            return this.$router.push(path)
        }
    }
}
</script>

<style lang="scss" scoped>
.navigation-container {
    min-width: $appMinimumWidth;
    width: 100vw;
    padding: 0 0 0 0 !important;
}

.website-logo {
    position: absolute;
    left: 20px;
}

.main-navigation {
    background: getColor("grey");
    padding-top: 7px;
    padding-bottom: 7px;
}

.left-side-navigation {
    text-align: right;
    margin-right: 20px;
}

.navigation-icon {
    color: getColor("light-purple");
    font-size: 28px;
    cursor: pointer;
}

.navigation-pages-list-container {
    background: getColor("light-grey");

    &.closed {
        background: getColor("grey");
    }
}

.navigation-page-container {
    padding-top: 10px;
    padding-bottom: 10px;
    color: getColor("light-purple");
    font-size: 20px;
    cursor: pointer;

    &:hover {
        background: getColor('light-green');
        color: getColor("dark-grey");
    }
}

.large-screen-navigation {
    display: none;
}

.large-screen-navigation-item {
    margin-right: 15px;
    font-size: 23px;
    position: relative;
    bottom: 3px;

    &:last-child {
        margin-right: 0;
    }

    &:hover {
        color: getColor('light-green');
    }
}

@media screen and (min-width: $tabletWidth) {
    .navigation-container {
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .navigation-page-container {
        padding-top: 15px;
        padding-bottom: 15px;
    }
}

@media screen and (min-width: $desktopWidth) {
  .expandable-menu {
      display: none;
  }

  .large-screen-navigation {
      display: block;
  }

  .main-navigation {
      padding-top: 12px;
      padding-bottom: 12px;
  }
  
}
</style>