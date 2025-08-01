<template>
  <nav 
    class="bottom-nav" 
    @mouseleave="resetScales"
    :style="{
      '--bg-scale': bgScale,
      '--gap': currentGap + 'px'
    }"
  >
    <button 
      v-for="(btn, index) in buttons" 
      :key="index"
      class="nav-btn"
      :class="{ active: btn.active }"
      :aria-label="btn.label"
      :style="{ transform: `scale(${scales[index]})` }"
      @mouseenter="handleMouseEnter(index)"
      @click="navigateTo(btn.route)"
    >
      <i :class="btn.icon"></i>
      <span class="nav-tooltip">{{ btn.label }}</span>
    </button>
  </nav>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const buttons = reactive([
  { icon: 'fas fa-home', label: 'Home', route: '/', active: true },
  { icon: 'fas fa-user', label: 'About', route: '/about', active: false },
  { icon: 'fas fa-regular fa-newspaper', label: 'Blog', route: '/blog', active: false },
  { icon: 'fas fa-regular fa-file-code', label: 'Projects', route: '/projects', active: false },
  { icon: 'fa-regular fa-file-pdf', label: 'Certifications', route: '/certifications', active: false }
])

const scales = reactive([1, 1, 1, 1, 1])
const bgScale = ref(1)
const currentGap = ref(18)
const baseGap = 18
const maxGap = 24

// Watch for route changes to update active state
watch(() => route.path, (newPath) => {
  buttons.forEach((btn, index) => {
    btn.active = btn.route === newPath
  })
}, { immediate: true })

const handleMouseEnter = (hoveredIndex) => {
  // Animate background and gaps
  bgScale.value = 1.05
  currentGap.value = maxGap
  
  buttons.forEach((_, index) => {
    const distance = Math.abs(index - hoveredIndex)
    
    // Enhanced scaling with more dynamic curve
    const maxScale = 1.3
    const minScale = 1.0
    const falloffRate = 0.5 // More pronounced effect
    
    // Apply easing function for smoother transitions
    const scale = minScale + (maxScale - minScale) * Math.pow(falloffRate, distance * 0.8)
    
    scales[index] = Math.max(scale, minScale)
  })
}

const resetScales = () => {
  // Smoothly reset all values
  bgScale.value = 1
  currentGap.value = baseGap
  scales.forEach((_, index) => {
    scales[index] = 1
  })
}

const navigateTo = (routePath) => {
  router.push(routePath)
}
</script>

<style scoped>
.bottom-nav {
  position: fixed;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%) scale(var(--bg-scale, 1));
  z-index: 100;
  display: flex;
  gap: var(--gap, 18px);
  background: rgba(24, 25, 38, 0.85);
  border-radius: 32px;
  box-shadow: 0 8px 32px 0 #0004;
  border: 1.5px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(12px);
  padding: 10px 24px;
  align-items: center;
  width: auto;
  max-width: 100vw;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  will-change: transform, gap;
}

.nav-btn {
  background: none;
  border: none;
  color: #b2b8ff;
  font-size: 1.35rem;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transform-origin: center bottom;
  will-change: transform, box-shadow, color;
  
  /* Semi-transparent circular outline */
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1);
}

.nav-btn:hover {
  color: #00eaff;
  box-shadow: 0 0 0 2px rgba(0, 234, 255, 0.3);
}

.nav-btn:focus {
  color: #00eaff;
  box-shadow: 0 0 0 2px rgba(0, 234, 255, 0.5);
}

.nav-btn.active {
  color: #00eaff;
}

/* Tooltip styles */
.nav-tooltip {
  position: absolute;
  bottom: 110%;
  left: 50%;
  transform: translateX(-50%) translateY(8px);
  background: rgba(24, 25, 38, 0.95);
  color: #fff;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  z-index: 10;
}

.nav-btn:hover .nav-tooltip {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

/* Active indicator dot below the icon */
.nav-btn.active::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  background: #00eaff;
  border-radius: 50%;
  opacity: 1;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-btn.active::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 16px;
  height: 2px;
  background: #00eaff;
  border-radius: 2px;
  opacity: 1;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Glow effect for active/hover states */
.nav-btn.active,
.nav-btn:hover {
  filter: drop-shadow(0 0 8px rgba(0, 234, 255, 0.4));
}

@media (max-width: 600px) {
  .bottom-nav {
    padding: 8px 8px;
    gap: 10px;
    bottom: 10px;
    --bg-scale: 1 !important;
  }
  
  .nav-btn {
    font-size: 1.1rem;
    width: 36px;
    height: 36px;
  }
  
  .nav-btn.active::after {
    bottom: -6px;
    width: 3px;
    height: 3px;
  }
  
  /* Hide tooltips on mobile for better UX */
  .nav-tooltip {
    display: none;
  }
}
</style>