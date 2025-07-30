<script setup>
import '@fortawesome/fontawesome-free/css/all.min.css'
import AuroraBackground from './assets/AuroraBackground.vue'
import BottomNav from './components/BottomNav.vue'
</script>

<template>
  <v-app>
    <AuroraBackground />
    <div class="main-bg">
      <router-view />
      <BottomNav />
    </div>
  </v-app>
</template>

<style scoped>
* {
  margin: 0;
  box-sizing: border-box;
}

.main-bg {
  min-height: 100vh;
  width: 100vw;
  position: relative;
  overflow-x: hidden;
}
</style>
