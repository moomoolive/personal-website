<template>
    <div>

        <div class="all-projects-container">

            <div
                v-for="(project, projectIndex) in projects"
                :key="projectIndex"
                class="project-container"
            >
                <!-- project picture -->
                <div @mouseleave="toggleImageOverlay(project.description.title, true)">
                    
                    <img 
                        :src="require(`@/assets/projectPhotos/${project.visualRepersentation.pathToVisual}`)"
                        class="project-photo" 
                        :alt="'photo of ' + project.description.title"
                        @mouseover="toggleImageOverlay(project.description.title, false)"
                    >

                    <div class="image-overlay-container">
                        <collapse-transition>
                            <div
                                v-show="imageOverlay === project.description.title" 
                                :class="`image-overlay`"
                            >
                            <div>
                                <fa-icon :icon="project.visualRepersentation.overlayIcon" class="image-overlay-icon"/>
                                <div>
                                    {{ project.visualRepersentation.overlayText }}
                                </div>
                            </div>


                            </div>
                        </collapse-transition>
                    </div>

                </div>

                <!-- buttons -->
                <div>
                    <button
                        v-for="(link, linkIndex) in project.externalLinks"
                        :key="linkIndex"
                        :class="`project-buttons ${project.externalLinks.length < 2 ? 'singular' : '' }`"
                        @click="openInNewTab(link.url)"
                    >
                        <span>
                            <fa-icon 
                                :icon="link.icon || 'globe'" 
                                :class="`outbound-icon ${link.iconColor}`"
                            />
                        </span>
                        {{ link.text }}
                    </button>
                </div>

                <!-- description -->
                <div class="project-description">
                    {{ project.description.shortText }}
                </div>

                <!-- technologies -->
                <div class="technologies-container">
                    <div
                        v-for="tech in project.technologies"
                        :key="tech"
                        class="technology-container"
                    >
                        <div>
                            <fa-icon 
                                :icon="techStackIcons(tech).icon" 
                                :class="`technology-icon ${techStackIcons(tech).color}`" 
                            />
                        </div>
                        <div class="technology-text">
                            {{ capitalize(tech) }}
                        </div>
                    </div>
                </div>

            </div>

        </div>
        
    </div>
</template>

<script>
import projects from './projects.json'

import urlHelpers from '@/libraries/urls.js'

import { CollapseTransition } from "@ivanv/vue-collapse-transition"

export default {
    name: "portfolio",
    components: {
        CollapseTransition
    },
    data() {
        return {
            projects,
            imageOverlay: ""
        }
    },
    methods: {
        toggleImageOverlay(title="project") {
            if (this.imageOverlay !== title) {
                return this.imageOverlay = title
            } else {
                return this.resetImageOverlay()
            }
        },
        setImageOverlay(value="none") {
            return this.imageOverlay = value
        },
        resetImageOverlay() {
            return this.setImageOverlay("none")
        },
        openInNewTab(url="https://random.site") {
            return urlHelpers.openURLInNewTab(url)
        },
        capitalize(str="hi") {
            return str.slice(0, 1).toUpperCase() + str.slice(1)
        },
        techStackIcons(techName="javascript") {
            switch(techName) {
                case "vue":
                    return { icon: ['fab', 'vuejs'], color: 'green' }
                case "javascript":
                    return { icon: ['fab', 'js'], color: 'orange' }
                case 'docker':
                    return { icon: ['fab', 'docker'], color: 'blue' }
                case "PWA":
                    return { icon: 'mobile-alt', color: 'purple' }
                case "flask":
                    return { icon: ['fab', 'python'], color: 'yellow' }
                case 'mongo':
                case 'postgres':
                    return { icon: 'database', color: 'red' }
                case 'bootstrap':
                    return { icon: ['fab', 'bootstrap'], color: 'purple' }
                case "AWS":
                    return { icon: ['fab', 'aws'], color: 'orange' }
                case 'node':
                    return { icon: ['fab', 'node-js'], color: 'green' }
                case 'tensorflow':
                    return { icon: 'brain', color: 'pink' }
                case 'html':
                    return { icon: ["fab", "html5"], color: "red" }
                case 'css':
                    return { icon: ["fab", "css3"], color: "blue" }
                default:
                    return { icon: techName }
            }
        },
        removeLoadingOverlay() {
            return window.setTimeout(() => this.isLoading = false, this.loadingTime)
        }
    },
    created() {
        this.resetImageOverlay()
    }
}
</script>

<style lang="scss" scoped>

.all-projects-container {
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    max-width: 1100px;
    min-width: 320px;
    width: 90%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.project-container {
    margin-bottom: 60px;
    width: 100%;
    max-width: 400px;
}

.project-photo {
    width: 100%;
    position: relative;
    z-index: 1;
}

.image-overlay {
    height: 276px;
    width: 100%;
    background: getColor("grey");
    z-index: 2;
    position: relative;
    bottom: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.image-overlay-icon {
    font-size: 40px;
    margin-bottom: 20px;
}

.image-overlay-container {
    height: 0;
}

.project-buttons {
    position: relative;
    top: -4px;
    width: 50%;
    background: transparent;
    border: 2px solid getColor("light-blue");
    color: getColor("off-white");
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 16px;

    &.singular {
        width: 100%;
    }

    &:hover {
        background: getColor("light-blue");
        color: black;
    }
}

.project-description {
    text-align: left;
    margin-top: 15px;
    height: 90px;
}

.technologies-container {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
}

.technology-container {
    width: 105px;
    margin-bottom: 10px;
}

.outbound-icon {
    margin-right: 3px;

    color: getColor('light-blue');

    &.green {
        color: getColor('light-green');
    }

    &.orange {
        color: getColor("light-orange");
    }
}

.technology-icon {
    margin-bottom: 2px;

    &.green {
        color: getColor('light-green');
    }

    &.purple {
        color: getColor('light-purple');
    }

    &.orange {
        color: getColor('light-orange');
    }

    &.red {
        color: getColor('light-red');
    }

    &.blue {
        color: getColor('light-blue');
    }

    &.pink {
        color: getColor('light-pink');
    }

    &.yellow {
        color: yellow;
    }
}
</style>