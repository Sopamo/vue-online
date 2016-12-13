# vue-online

> A reactive online/offline component for vue.js

![Vue online preview](https://raw.githubusercontent.com/Sopamo/vue-online/master/preview.gif)

# Usage
That's a basic example of a component which would just show the offline message if the user has no connection:

    <template>
      <div id="app">
        <OfflineIndicator></OfflineIndicator>
      </div>
    </template>

    <script>
    import { OfflineIndicator } from 'vue-online'

    export default {
      name: 'app',
      components: {
        OfflineIndicator
      }
    }
    </script>

# Advanced usage (with the reactive online variable)

You can use ConnectionStatus.online anywhere in your app, it updates dynamically as the connection of the user changes.

    <template>
      <div id="app">
        Connection: <span v-if="online">online</span><span v-if="!online">offline</span>
        <OfflineIndicator></OfflineIndicator>
      </div>
    </template>

    <script>
    import { OfflineIndicator, VueOnline } from 'vue-online'

    export default {
      name: 'app',
      computed: {
        online () {
          return VueOnline.isOnline
        }
      },
      components: {
        OfflineIndicator
      }
    }
    </script>

# Custom offline message

To use a custom message, simply specify it on the component:

    <OfflineIndicator message="Oh no, you're offline :("></OfflineIndicator>


# Custom styling

To style the offline indicator just use the css selector div.offline-indicator:

    div.offline-indicator {
      background: red;
      color: white;
    }
