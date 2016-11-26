<style>
  .offline-indicator {
    background: #E8EDE9;
    border-radius: 3px;
    border-bottom: 2px solid #d3d9d4;
    padding: 15px 5px;
    text-align: center;
    width: 100%;
    margin: 5px 0;
    font-family: sans-serif;
    color: #202126;
    box-sizing: border-box;
  }

  .slideup-enter-active, .slideup-leave-active {
    transition: transform .2s, opacity .2s;
    transform: none;
    opacity: 1;
  }

  .slideup-enter, .slideup-leave-active {
    opacity: 0;
    transform: translateY(-100%);
  }
</style>

<template>
  <transition name="slideup">
    <div class="offline-indicator" v-if="!online">{{ statusMessage }}</div>
  </transition>
</template>

<script>
  import ConnectionStatus from '../ConnectionStatus'
  export default {
    props: ['message'],
    computed: {
      online () {
        return ConnectionStatus.online
      },
      statusMessage() {
        if (typeof this.message !== 'undefined') {
          return this.message
        }
        return 'You are offline.'
      },
    }
  }
</script>
