import pwaHelpers from './libraries/pwa.js'

// eslint-disable-next-line
if (process.env.NODE_ENV === 'production')
    pwaHelpers.registerServiceWorker()

const app = window.document.getElementById("app")
app.innerHTML = "hello from webpack"