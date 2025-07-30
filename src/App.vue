<script setup>
import '@fortawesome/fontawesome-free/css/all.min.css';
import BottomNav from './components/BottomNav.vue';
</script>

<template>
  <v-app>
    <div class="main-bg">
      <div id="aurora-bg">
        <div class="aurora aurora1"></div>
        <div class="aurora aurora2"></div>
        <div class="aurora aurora3"></div>
        <div class="aurora aurora4"></div>
      </div>
      <router-view />
      <BottomNav />
    </div>
  </v-app>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main-bg {
  min-height: 100vh;
  width: 100vw;
  position: relative;
}

#aurora-bg {
  position: fixed;
  z-index: -1;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  pointer-events: none;
  overflow: hidden;
}

.aurora {
  position: absolute;
  width: 120vw;
  height: 120vh;
  top: -10vh;
  left: -10vw;
  opacity: 0.55;
  filter: blur(80px);
  will-change: transform, opacity;
  mix-blend-mode: lighten;
  pointer-events: none;
}

.aurora1 {
  background: radial-gradient(ellipse at 40% 60%, #00eaff 0%, transparent 70%);
  animation: aurora-move1 38s ease-in-out infinite alternate;
}
.aurora2 {
  background: radial-gradient(ellipse at 60% 40%, #a259ff 0%, transparent 70%);
  animation: aurora-move2 44s ease-in-out infinite alternate;
  opacity: 0.45;
}
.aurora3 {
  background: radial-gradient(ellipse at 70% 80%, #00ffb8 0%, transparent 70%);
  animation: aurora-move3 52s ease-in-out infinite alternate;
  opacity: 0.35;
}
.aurora4 {
  background: radial-gradient(ellipse at 30% 30%, #ff5eae 0%, transparent 70%);
  animation: aurora-move4 60s ease-in-out infinite alternate;
  opacity: 0.32;
}

@keyframes aurora-move1 {
  0%   { transform: translate(0,0) scale(1.1,1) skewX(0deg); }
  40%  { transform: translate(-10vw, 5vh) scale(1.2,1.05) skewX(-8deg); }
  70%  { transform: translate(8vw, -8vh) scale(1.05,1.1) skewX(6deg);}
  100% { transform: translate(0,0) scale(1.1,1) skewX(0deg);}
}
@keyframes aurora-move2 {
  0%   { transform: translate(0,0) scale(1,1.1) skewY(0deg);}
  35%  { transform: translate(12vw, -6vh) scale(1.1,1.2) skewY(8deg);}
  80%  { transform: translate(-10vw, 10vh) scale(1.05,1.05) skewY(-6deg);}
  100% { transform: translate(0,0) scale(1,1.1) skewY(0deg);}
}
@keyframes aurora-move3 {
  0%   { transform: translate(0,0) scale(1.05,1.05) rotate(0deg);}
  50%  { transform: translate(-8vw, 8vh) scale(1.15,1.1) rotate(8deg);}
  100% { transform: translate(0,0) scale(1.05,1.05) rotate(0deg);}
}
@keyframes aurora-move4 {
  0%   { transform: translate(0,0) scale(1.1,1.1) skewX(0deg);}
  60%  { transform: translate(10vw, -10vh) scale(1.2,1.05) skewX(12deg);}
  100% { transform: translate(0,0) scale(1.1,1.1) skewX(0deg);}
}
</style>
