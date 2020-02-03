<template>
  <div class="private">
    <img alt="Vue logo" src="../assets/logo.png">
    <Private msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
    import Private from '@/components/Private.vue'

    export default {
      name: 'home',
      components: {
        Private,
      }
    }
</script>
