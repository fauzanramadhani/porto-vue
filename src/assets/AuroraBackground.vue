<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'
import FOG from 'vanta/dist/vanta.fog.min'

const vantaRef = ref(null)
let vantaEffect = null

onMounted(() => {
  vantaEffect = FOG({
    el: vantaRef.value,
    THREE,
    mouseControls: false,
    touchControls: false,
    gyroControls: false,
    highlightColor: 0x9129a3,
    midtoneColor: 0x6b1c73,
    lowlightColor: 0x3e0d47,
    baseColor: 0x1e002a,
    blurFactor: 0.9,
    speed: 1.0,
    zoom: 1.2
  })
})

onBeforeUnmount(() => {
  if (vantaEffect) vantaEffect.destroy()
})
</script>

<template>
  <div ref="vantaRef" class="vanta-bg"></div>
</template>

<style scoped>
.vanta-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  pointer-events: none;
}
</style>
