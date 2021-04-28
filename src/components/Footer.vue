<template>
    <div class="footer-container">
        <div class="contact-container">
            <a :href="`mailto:${email}`" class="contact">
                Contact Me
            </a>
        </div>
        <div 
            class="framework-text" 
            @click="toFrameworkProvider()"
        >
            Created with 
            <svg 
                aria-hidden="true" 
                focusable="false" 
                data-prefix="fab" 
                data-icon="vuejs" 
                class="framework-icon svg-inline--fa fa-vuejs fa-w-14" 
                role="img" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 448 512">
                    <path 
                        fill="currentColor" 
                        d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z">
                    </path>
                </svg>
        </div>
    </div>
</template>

<script>
import Config from '$config'

export default {
    name: "appFooter",
    data() {
        return {
            email: Config.contactConfig.email,
            frameworkWebsite: Config.appInfoConfig.frameworkWebsite
        }
    },
    methods: {
        toFrameworkProvider() {
            return window.open(this.frameworkWebsite, '_blank')
        }
    }
}
</script>

<style lang="scss">
.footer-container {
    background: getColor("grey");
    padding-top: 10px;
    padding-bottom: 5px;
    min-width: $appMinimumWidth;
    width: 100vw;
}

.contact-container {
    text-align: left;
    padding-left: 10px;
}

.contact {
    color: getColor("light-blue");
    text-decoration:  none;
    font-size: 15px;
    
    &:hover {
        color: getColor("light-purple");
    }
}

.framework-text {
    text-align: right;
    margin-top: 20px;
    font-size: 12px;
    margin-right: 10px;
    color: getColor("light-green");
}

.framework-icon {
    height: 20px;
    width: 20px;
    position: relative;
    top: 5px;
}

@media screen and (min-width: $tabletWidth) {
    .framework-text {
        margin-top: 10px;
    }
}
</style>