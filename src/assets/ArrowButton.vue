<template>
  <button 
    class="arrow-button" 
    @click="handleClick"
    :title="title"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="arrow-icon">
      <path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/>
    </svg>
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  to: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: 'View more'
  }
})

const handleClick = () => {
  router.push(props.to)
}
</script>

<style scoped>
.arrow-button {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
}

.arrow-button:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-50%) scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.arrow-button:active {
  transform: translateY(-50%) scale(0.95);
}

.arrow-icon {
  width: 14px;
  height: 14px;
  fill: currentColor;
  transition: transform 0.3s ease;
}

.arrow-button:hover .arrow-icon {
  transform: translateX(2px);
}
</style> 