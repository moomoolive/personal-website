const contactConfig = {
    email: process.env.VUE_APP_EMAIL,
    github: process.env.VUE_APP_GITHUB,
    linkedIn: process.env.VUE_APP_LINKEDIN
}

const appInfoConfig = {
    frameworkWebsite: 'https://vuejs.org/'
}

export default {
    get contactConfig() {
        return contactConfig
    },
    get appInfoConfig() {
        return appInfoConfig
    }
}