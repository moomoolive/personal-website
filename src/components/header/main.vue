<template>
    <div class="navigation-container">
        
        <div class="main-navigation">
            
            <div class="website-logo " @click="redirect('/')">
                <fa-icon icon="laptop-code" class="navigation-icon" />
            </div>

            <div class="left-side-navigation">
                <fa-icon 
                    :class="`navigation-icon expandable-menu${showNavigation ? ' open' : ''}`" 
                    icon="bars" 
                    @click="toggleNavigationMenu()" 
                />
                <div class="large-screen-navigation navigation-icon">
                    <span 
                        v-for="(pageInfo, pageIndex) in pageList" 
                        :key="pageIndex"
                        class="large-screen-navigation-item"
                        @click="redirect(pageInfo.path)"
                    >
                        {{ pageInfo.name }}
                    </span>
                </div>
            </div>
            
        </div>

        <collapse-transition :duration="500">
            <div 
                v-show="showNavigation" 
                :class="`navigation-pages-list-container${showNavigation ? '' : ' closed'}`"
            >
                <div 
                    v-for="(pageInfo, pageIndex) in pageList" 
                    :key="pageIndex"
                    class="navigation-page-container"
                    @click="redirect(pageInfo.path)"
                >
                    {{ pageInfo.name }}
                </div>
            </div>
        </collapse-transition>

    </div>
</template>

<script>
import { CollapseTransition } from "@ivanv/vue-collapse-transition"

import pageList from './headerLinks.json'

export default {
    name: "appHeader",
    components: {
        CollapseTransition
    },
    data() {
        return {
            showNavigation: false,
            pageList
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
    background: getColor("light-grey");
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
    font-size: 20px;
    position: relative;
    bottom: 5px;

    &:last-child {
        margin-right: 0;
    }

    &:hover {
        color: getColor('light-green');
    }
}

.expandable-menu {
    &.open {
        color: getColor("light-blue");
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

  .website-logo {
      top: 12px;
  }
  
}
</style>