(function() {
  const Vue = require('vue').default
  const main = new Vue({
    data: function () {
      return {
        isOnline: true
      }
    },
    methods: {
      updateStatus: function() {
        if (typeof window.navigator.onLine === 'undefined') {
          // If the browser doesn't support connection status reports
          // assume that we are online because most apps' only react
          // when they now that the connection has been interrupted
          main.isOnline = true
        } else {
          main.isOnline = window.navigator.onLine
        }
      }
    }
  })

  // Initial setup
  main.updateStatus()

  // Setup the listeners
  window.addEventListener('online', main.updateStatus)
  window.addEventListener('offline', main.updateStatus)

  module.exports = main
})()
