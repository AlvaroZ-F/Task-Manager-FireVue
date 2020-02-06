<template>
  <div class="private">
    <img alt="Vue logo" src="../assets/logo.png">
    <login></login>
  </div>
</template>

<script>
// @ is an alias to /src
    import login from '@/components/login.vue'

    export default {
      name: 'home',
      components: {
        login,
      }
    }
</script>
