<template>
    <div class="navigation-container">
        
        <div class="main-navigation">
            
            <div class="website-logo " @click="redirect('/')">
                <fa-icon icon="laptop-code" class="navigation-icon logo" />
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
                    <span 
                        class="large-screen-navigation-item"
                        @click="openInNewTab(resumeLink)"
                    >
                        Resume
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
                <div 
                    class="navigation-page-container" 
                    @click="openInNewTab(resumeLink)"
                >
                    Resume
                </div>
            </div>
        </collapse-transition>

    </div>
</template>

<script>
import { CollapseTransition } from "@ivanv/vue-collapse-transition"

import pageList from './headerLinks.json'

import urlHelpers from '@/libraries/urls.js'

import Config from '$config'

export default {
    name: "appHeader",
    components: {
        CollapseTransition
    },
    data() {
        return {
            showNavigation: false,
            pageList,
            resumeLink: Config.externalLinksConfig.resume
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
            this.closeNavigationMenu()
            if (path !== this.$route.fullPath) {
                return this.$router.push(path)
            }
        },
        openInNewTab(url="https://random.site") {
            this.closeNavigationMenu()
            return urlHelpers.openURLInNewTab(url)
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
    background: transparent;
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
    background: getColor("grey", 0.87);
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

a {
    &:hover {
        color: getColor("dark-grey");
    }
}

.download-large-screen-navigation-item {
    &:hover {
        color: getColor('light-green');
    }
}
 
.large-screen-navigation {
    display: none;
    cursor: default;
}

.large-screen-navigation-item {
    margin-right: 35px;
    font-size: 19px;
    position: relative;
    bottom: 5px;
    cursor: pointer;

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

  .left-side-navigation {
      margin-right: 30px;
  }
  
}
</style>