const Vue = require('vue')
const main = new Vue({
  data() {
    return {
      isOnline: true
    }
  }
})

// The method which sets the current online/offline status
function updateStatus() {
  if (typeof window.navigator.onLine === 'undefined') {
    // If the browser doesn't support connection status reports
    // assume that we are online because most apps' only react
    // when they now that the connection has been interrupted
    main.isOnline = true
  } else {
    main.isOnline = window.navigator.onLine
  }
}

// Initial setup
updateStatus()

// Setup the listeners
window.addEventListener('online', () => updateStatus())
window.addEventListener('offline', () => updateStatus())

module.exports = main
