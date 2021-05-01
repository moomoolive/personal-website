<template>
    <div>

        <div class="projects-container">

            <div
                v-for="(project, projectIndex) in projects"
                :key="projectIndex"
                class="project-container"
            >

                <div class="computer-display-container">
                    <img 
                        src="~@/assets/computerTransparent.png"
                        class="transparent-computer" 
                        alt="computer"
                    >
                    <img 
                        :src="require(`@/assets/projectPhotos/${project.pathToPhoto}`)"
                        class="website-photo" 
                        :alt="'photo of ' + project.description.title"
                    >
                </div>

                <div class="project-description-container">
                    <div class="project-title">
                        {{ project.description.title }}
                    </div>
                    <div>
                        {{ project.description.shortText }}
                    </div>

                    <div class="tags-container">
                        <div
                            v-for="tag in project.tags"
                            :key="tag"
                            class="tag-container"
                        >
                            <fa-icon icon="hashtag" class="hashtag" />
                            {{ tag }}
                        </div>
                    </div>

                    <div class="long-project-explanation-container">
                        
                        <div class="open-explanation-section" @click="toggleProjectExplanation(project.name)">
                            <span>
                                <fa-icon 
                                    :icon="
                                        showingExplanation === project.name ?
                                            'arrow-down' : 
                                            `arrow-right`
                                    " 
                                    class="explanation-arrow" 
                                />
                            </span>
                            {{ showingExplanation === project.name ? 'Hide' : "Show" }} Longer Explanation
                        </div>

                        <collapse-transition :duration="500">
                            <div v-show="showingExplanation === project.name" class="long-project-explanation">
                                {{ project.description.longText }}
                            </div>
                        </collapse-transition>

                    </div>

                    <div 
                        v-if="project.technologies" 
                        class="tech-stack-container"
                    >
                        
                        <div class="open-stack-section" @click="toggleStack(project.name)">
                            <fa-icon 
                                :icon="
                                    showingStack === project.name ?
                                        'arrow-down' : 
                                        `arrow-right`
                                " 
                                :class="`stack-icon`" 
                            />
                            {{ showingStack === project.name ? "Hide" : "Show"}} Full Project Stack
                        </div>
                        
                        <collapse-transition :duration="500">
                            <div v-show="showingStack === project.name">
                                <div
                                    v-for="(techInfo, stackSide) in project.technologies"
                                    :key="stackSide"
                                    class="technologies-container"
                                >
                                    <div :class="`stack-side-header ${stackSide}`">
                                        {{ capitalize(stackSide) }}
                                    </div>
                                    <div class="technology-ordering">
                                        <div
                                            v-for="tech in project.technologies[stackSide]"
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
                        </collapse-transition>

                    </div>

                    <div class="outbound-icons-container">
                        <div
                            v-for="(link, linkIndex) in project.externalLinks"
                            :key="linkIndex" 
                            class="outbound-link-container"
                            @click="openInNewTab(link.url)"
                        >
                            <fa-icon :icon="link.icon || 'globe'" :class="`outbound-icon ${link.iconColor || 'blue'}`" />
                            <span class="outbound-icon-text">
                                {{ link.text || 'Default Text' }}
                            </span>
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
            showingStack: '',
            showingExplanation: ''
        }
    },
    methods: {
        openInNewTab(url="https://random.site") {
            return urlHelpers.openURLInNewTab(url)
        },
        capitalize(str="hi") {
            return str.slice(0, 1).toUpperCase() + str.slice(1)
        },
        toggleStack(projectName="khateebRemind") {
            return this.toggleDropdownItem("showingStack", projectName)
        },
        toggleProjectExplanation(projectName="khateebRemind") {
            return this.toggleDropdownItem("showingExplanation", projectName)
        },
        toggleDropdownItem(keyName="showingStack", projectName="khateebRemind") {
            if (this[keyName]=== projectName)
                return this['reset' + this.capitalize(keyName)]()
            else
                return this[keyName] = projectName
        },
        resetDropdownItem(keyName="showingStack") {
            return this[keyName] = 'none'
        },
        resetShowingStack() {
            return this.resetDropdownItem("showingStack")
        },
        resetShowingExplanation() {
            return this.resetDropdownItem("showingExplanation")
        },
        techStackIcons(techName="javascript") {
            switch(techName) {
                case "vue":
                    return { icon: ['fab', 'vuejs'], color: 'green' }
                case 'SASS':
                    return { icon: ['fab', 'sass'], color: 'pink' }
                case "javascript":
                    return { icon: ['fab', 'js'], color: 'orange' }
                case 'docker':
                    return { icon: ['fab', 'docker'], color: 'blue' }
                case "PWA":
                    return { icon: 'mobile-alt', color: 'purple' }
                case "python":
                    return { icon: ['fab', 'python'], color: 'yellow' }
                case 'mongo':
                case 'postgres':
                    return { icon: 'database', color: 'red' }
                case 'express':
                case 'flask':
                case 'feathers':
                    return { icon: 'server' }
                case 'bootstrap':
                    return { icon: ['fab', 'bootstrap'], color: 'purple' }
                case "AWS":
                    return { icon: ['fab', 'aws'], color: 'orange' }
                case 'node':
                    return { icon: ['fab', 'node-js'], color: 'green' }
                case 'tensorflow':
                    return { icon: 'brain', color: 'pink' }
                default:
                    return { icon: techName }
            }
        }
    },
    created() {
        this.resetShowingStack()
        this.resetShowingExplanation()
    }
}
</script>

<style lang="scss" scoped>
.projects-container {
    margin-top: 50px;
    margin-bottom: 50px;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.project-container {
    max-width: 600px;
    width: 75%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    text-align: left;
}

.project-description-container {
    background: getColor("grey", 0.4);
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 2px;
    padding-top: 20px;
}

.computer-display-container {
    position: relative;
    top: 0;
    left: 0;
    width: 270px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 35px;
}

.transparent-computer {
    width: 100%;
    position: relative;
    left: 0;
    top: 0;
    z-index: 0;
}

.website-photo {
    width: 257px;
    height: 148px;
    position: absolute;
    left: 6px;
    top: 7px;
}

.project-title {
    font-size: 23px;
    color: getColor("light-purple");
}

.project-image-container {
    width: 100%;
}

.project-image {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 2px;
}

.outbound-icons-container {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
}

.outbound-icon {
    font-size: 13px;
    margin-right: 3px;
    color: getColor('light-blue');

    &.green {
        color: getColor('light-green');
    }

    &.orange {
        color: getColor("light-orange");
    }
}

.hashtag {
    font-size: 12px;
}

.stack-icon, .explanation-arrow {
    color: getColor("light-purple");
    margin-right: 5px;
}

.tag-container {
    background: getColor("light-red");
    margin-right: 12px;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 4px;
    padding-right: 4px;
    border-radius: 4px;
    margin-bottom: 10px;

    &:hover {
        background: getColor("light-blue");
        cursor: default;
    }
}

.outbound-link-container {
    margin-bottom: 7px;
}

.outbound-icon-text {
    margin-right: 20px;
    cursor: pointer;

    &:hover {
        color: getColor("light-purple");
    }
}

.tags-container {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
}

.tech-stack-container {
    margin-top: 10px;
}

.technologies-container {
    margin-top: 20px;
}

// this has to be one of the worst names ever
// but I couldn't think of a better one :(
.technology-ordering {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.technology-container {
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
}

.long-project-explanation-container {
    margin-top: 20px;
}

.long-project-explanation {
    margin-top: 10px;
    color: getColor("silver");
}

.technology-text {
    margin-bottom: 15px;
}

.stack-side-header {
    color: getColor('light-purple');

    &.client {
        color: getColor('light-red');
    }

    &.server {
        color: getColor('light-blue');
    }

    &.devOps {
        color: getColor('light-orange');
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

.open-explanation-section, .open-stack-section {
    cursor: pointer;
}

.homepage-background {
  height: 100% !important;
  width: 95vw !important;
  margin-left: auto;
  margin-right: auto;
  position: fixed;
  z-index: -1;
}

@media screen and (min-width: $tabletWidth) {
    .project-container {
        padding-top: 25px;
        padding-top: 25px;
        padding-left: 20px;
        padding-right: 20px;
    }

    .project-image-container {
        width: 30%;
    }

    .project-title {
        text-align: left;
        font-size: 27px;
    }
    
    .project-image {
        margin-left: 0 !important;
    }

    .transparent-computer {
        
    }

    .computer-display-container  {
        width: 370px;
    }

    .website-photo {
        width: 357px;
        height: 208px;
        left: 7px;
        top: 8px;
    }

}

@media screen and (min-width: $desktopWidth) {
    .project-container {
        padding-left: 27px;
        padding-right: 27px;
    }
}
</style>