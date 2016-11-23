import Vue from 'vue'
// Create a vue instance so we get reacitivity for free
const main = new Vue({
  data: {
    online: true
  }
})

// The method which sets the current online/offline status
function updateStatus () {
  if (typeof window.navigator.onLine === 'undefined') {
    // If the browser doesn't support connection status reports
    // assume that we are online because most apps' only react
    // when they now that the connection has been interrupted
    main.online = true
  } else {
    main.online = window.navigator.onLine
  }
}

// Initial setup
updateStatus()

// Setup the listeners
window.addEventListener('online', () => updateStatus())
window.addEventListener('offline', () => updateStatus())

export default main
