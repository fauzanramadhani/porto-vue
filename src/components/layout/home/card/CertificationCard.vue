<template>
  <div class="certification-glass-card">
    <div class="certification-header">
      <span class="certification-header-icon"><i class="fa-regular fa-file-pdf"></i></span>
      <span class="certification-header-title">Certifications</span>
      <ArrowButton to="/certifications" title="View more certifications" />
    </div>
    <div class="certification-list">
      <div v-for="cert in certifications" :key="cert.id" class="certification-item">
        <div class="certification-icon">
          <i :class="cert.icon"></i>
        </div>
        <div class="certification-info">
          <div class="certification-title">{{ cert.title }}</div>
          <div class="certification-issuer">{{ cert.issuer }}</div>
        </div>
        <div class="certification-date">{{ cert.date }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ArrowButton from '@/assets/ArrowButton.vue'

const certifications = [
  {
    id: 1,
    title: 'Vue.js Developer',
    issuer: 'Vue.js Official',
    date: 'March 2024',
    icon: 'fas fa-certificate'
  },
  {
    id: 2,
    title: 'React Developer',
    issuer: 'Meta',
    date: 'January 2024',
    icon: 'fab fa-react'
  },
  {
    id: 3,
    title: 'AWS Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'December 2023',
    icon: 'fab fa-aws'
  },
  {
    id: 4,
    title: 'Google Cloud Developer',
    issuer: 'Google',
    date: 'November 2023',
    icon: 'fab fa-google'
  },
  {
    id: 5,
    title: 'TypeScript Developer',
    issuer: 'Microsoft',
    date: 'October 2023',
    icon: 'fab fa-js'
  }
]
</script>

<style scoped>
/* Card Container */
.certification-glass-card {
  border-radius: 18px;
  box-shadow: 0 8px 32px 0 #0004;
  border: 1.5px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(12px);
  color: #fff;
  padding: 24px 28px 0px 28px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 390px;
}

.certification-glass-card::before {
  content: "";
  position: absolute;
  inset: 1px;
  border-radius: 16.5px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  pointer-events: none;
  z-index: 1;
}

/* Header */
.certification-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.05rem;
  font-weight: 500;
  margin-bottom: 2px;
  position: relative;
}

.certification-header-icon {
  color: #fff;
  background: #23243a;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  box-shadow: 0 2px 8px #0002;
}

.certification-header-title {
  color: #fff;
  font-weight: 500;
  font-size: 1.08rem;
  flex: 1;
}

/* Content */
.certification-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding-right: 4px;
}

.certification-list::-webkit-scrollbar {
  width: 6px;
}

.certification-list::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 8px;
}

/* Items */
.certification-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 0px 0;
}

.certification-icon {
  font-size: 1.5rem;
  color: #00eaff;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #23243a;
  border-radius: 8px;
  box-shadow: 0 2px 8px #0002;
}

.certification-info {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.certification-title {
  font-weight: 700;
  font-size: 1.05rem;
  color: #fff;
}

.certification-issuer {
  color: #b2b8ff;
  font-size: 0.98rem;
  font-weight: 500;
}

.certification-date {
  color: #cfd8dc;
  font-size: 0.97rem;
  font-weight: 500;
  min-width: 90px;
  text-align: right;
}

/* Mobile Responsive */
@media (max-width: 839px) {
  .certification-list {
    flex-direction: row;
    overflow-x: auto;
    overflow-y: hidden;
    gap: 16px;
    padding-bottom: 8px;
    padding-left: 0;
    padding-right: 0;
    margin-left: -28px;
    margin-right: -28px;
    padding-left: 28px;
    padding-right: 28px;
  }
  
  .certification-item {
    min-width: 260px;
    flex-shrink: 0;
    padding: 12px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }
  
  .certification-icon {
    margin-bottom: 8px;
  }
  
  .certification-info {
    width: 100%;
  }
  
  .certification-date {
    min-width: auto;
    text-align: left;
    margin-top: 4px;
  }
  
  .certification-list::-webkit-scrollbar {
    height: 4px;
    width: auto;
  }
  
  .certification-list::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
  }
}
</style> 