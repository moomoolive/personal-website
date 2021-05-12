<template>
    <div>
        <div class="content-container">

        <div class="description-preheader">
            بسم الله الرحمن الرحيم
        </div>

        <div class="my-picture-container">
            <img 
                src="@/assets/me.jpg"
                class="my-picture" 
                alt="a picture of me"
            >
        </div>
        
        <div class="my-description-container">
            <div class="description-header">
                Hey, I'm Mostafa...
            </div>
            <div class="description-main">
                ...and I know I'm REALLY handsome, so stop staring so hard!
                Like it's okay to take peek or two but sheesh -
                have some modesty.<br><br>
                
                Jokes aside,
                I'm a full-stack web developer who's strength lies in developing
                with Javascript - on both sides of the stack. I also have the ability to
                drop down close to metal to write code in Rust and have experience
                with the Sci-Py Python libraries (Tensorflow, Numpy, etc.).<br><br>

                I studied at the University of Calgary and currently reside in Calgary,
                Alberta, Canada.<br><br>

                If you'd like to get know me better just send me an email or connect
                with me on LinkedIn.
            </div>
            <div class="interests-header">
                Some of my Interests:
            </div>
            <div class="interests-container">
                <div
                    v-for="interest in interests"
                    :key="interest"
                    class="interest-container"
                >
                    {{ interest }}
                </div>
            </div>
        </div>

        <div class="contact-information-container">
            <div class="contact-information-section" @click="openInNewTab(resumeLink)">
                <fa-icon icon="newspaper" class="icon orange" />
                Take a Look at my Resume
            </div>
            <div class="contact-information-section" @click="openInNewTab(githubLink)">
                <fa-icon :icon="['fab', 'github-alt']" class="icon red" />
                Check Out My Projects
            </div>
            <div class="contact-information-section" @click="openInNewTab(linkedInLink)">
                <fa-icon :icon="['fab', 'linkedin']" class="icon purple" />
                Connect With Me
            </div>
            <div class="contact-information-section">
                <a :href="`mailto:${email}`">
                    <fa-icon icon="pen" class="green icon" />
                    Email Me
                </a>
            </div>
        </div>

        </div>
    </div>
</template>

<script>
import Config from '$config'

import urlHelpers from '@/libraries/urls.js'

export default {
    name: "about",
    data() {
        return {
            email: Config.contactConfig.email,
            githubLink: Config.contactConfig.github,
            linkedInLink: Config.contactConfig.linkedIn,
            resumeLink: Config.externalLinksConfig.resume,
            interests: [
                "Jellybeans",
                "Progressive Web Apps", 
                "Single Page Applications", 
                "Natural Language Processing",
            ]
        }
    },
    methods: {
        openInNewTab(url="https://random.site") {
            return urlHelpers.openURLInNewTab(url)
        }
    }
}
</script>

<style lang="scss" scoped>
.content-container {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    max-width: 1000px;
    margin-top: 60px;
}

.my-picture-container {
    height: 300px;
    width: 300px;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
    border: 6px solid getColor("off-white");
}

.my-picture {
    height: 100%;
    position: relative;
    left: -45px;
}

.contact-information-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    margin-top: 80px;
    margin-bottom: 80px;
}

.contact-information-section {
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    cursor: pointer;
    
    &:hover {
        color: getColor('light-blue');
    }
}

a {
    color: getColor('off-white');

    &:hover {
        color: getColor("light-blue");
    }
}

.icon {
    margin-right: 5px;

    &.green {
        color: getColor('light-green');
    }

    &.red {
        color: getColor('light-red');
    }

    &.purple {
        color: getColor('light-purple');
    }

    &.orange {
        color: getColor('light-orange');
    }
}

.my-description-container {
    margin-top: 60px;
}

.description-header {
    margin-top: 20px;
    font-size: 30px;
}

.description-preheader {
    color: getColor("light-purple");
    margin-bottom: 10px;
}

.description-main {
    margin-top: 20px;
    color: getColor('silver');
}

.interests-container {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.interest-container {
    background: getColor("grey");
    margin-left: 10px;
    margin-right: 10px;
    padding-top: 7px;
    padding-bottom: 7px;
    padding-left: 7px;
    padding-right: 7px;
    margin-bottom: 15px;
    border-radius: 4px;
    color: getColor("light-purple");
    cursor: default;
    
    &:hover {
        color: getColor('light-blue');
    }
}

.interests-header {
    margin-top: 80px;
}

@media screen and (min-width: $tabletWidth) {
    .contact-information-container {
        flex-direction: row;
    }

    .interests-container {
        flex-direction: row;
    }
}

@media screen and (min-width: $desktopWidth) {
  
}
</style>