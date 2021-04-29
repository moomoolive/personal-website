<template>
    <div class="footer-container">
        <div>
            <div class="contact">
                Contact
            </div>
            <div class="contact-icons-container">

                <div @click="openInNewTab(githubLink)">
                    <fa-icon :icon="['fab', 'github']" class="contact-icon" />
                </div>

                <div>
                    <a :href="`mailto:${email}`">
                        <fa-icon icon="mail-bulk" class="contact-icon" />
                    </a> 
                </div>

                <div @click="openInNewTab(linkedInLink)">
                    <fa-icon :icon="['fab', 'linkedin-in']" class="contact-icon" />
                </div>
            </div>
        </div>
        <div
            class="source-code-text"
            @click="openInNewTab(websiteRepo)"
        >
            Check Out Source Code
        </div>
        <div 
            class="framework-text" 
            @click="openInNewTab(frameworkWebsite)"
        >
            Made with 
            <fa-icon :icon="['fab', 'vuejs']" />
        </div>
    </div>
</template>

<script>
import Config from '$config'

import urlHelpers from '@/libraries/urls.js'

export default {
    name: "appFooter",
    data() {
        return {
            email: Config.contactConfig.email,
            frameworkWebsite: Config.appInfoConfig.frameworkWebsite,
            githubLink: Config.contactConfig.github,
            linkedInLink: Config.contactConfig.linkedIn,
            websiteRepo: Config.appInfoConfig.websiteRepo
        }
    },
    methods: {
        openInNewTab(url="https://random.site") {
            return urlHelpers.openURLInNewTab(url)
        }
    }
}
</script>

<style lang="scss">
.footer-container {
    padding-top: 10px;
    padding-bottom: 5px;
    min-width: $appMinimumWidth;
    width: 100vw;
}

.contact {
    color: getColor("light-purple");
    font-size: 14px;
    margin-bottom: 3px;
}

.contact-icons-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.contact-icon {
    font-size: 18px;
    margin-left: 7px;
    margin-right: 7px;
    text-decoration: none;
    color: getColor('off-white');
    cursor: pointer;

    &:hover {
        color: getColor('light-blue');
    }
}

.framework-text, .source-code-text {
    margin-top: 10px;
    font-size: 12px;
    cursor: pointer;

    &:hover {
        color: getColor("light-blue");
    }
}

.source-code-text {
    color: getColor("light-orange");
}

.framework-text {
    color: getColor("light-green");
}

@media screen and (min-width: $tabletWidth) {
    .framework-text {
        margin-top: 10px;
    }
}
</style>