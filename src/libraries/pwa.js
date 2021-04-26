async function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        try {
            await window.navigator.serviceWorker.register('./service-worker.js')
            console.log(`Service worker has been registered`)
            return 0
        } catch {
            console.error(`An err occurred when registering service worker`)
            return 1
        }
    }
}

export default {
    registerServiceWorker
}