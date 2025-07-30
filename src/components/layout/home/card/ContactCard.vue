<template>
  <div class="contact-glass-card">
    <div>
      <div class="contact-header">
      <span class="contact-icon">💬</span>
      <span class="contact-title">Contact</span>
    </div>
    <div class="contact-desc">
      Creating unique digital experiences.<br>
      Let's talk about your next project!
    </div>
    </div>
    
    <div class="contact-actions">
      <button class="contact-btn primary">Send Email</button>
      <button class="contact-btn secondary">DM on Instagram</button>
    </div>
  </div>
</template>

<script setup>
// Static placeholder data for now
</script>

<style scoped>
.contact-glass-card {
  border-radius: 18px;
  box-shadow: 0 8px 32px 0 #0004;
  border: 1.5px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(12px);
  color: #fff;
  padding: 24px 20px 20px 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}

.contact-glass-card::before {
  content: "";
  position: absolute;
  inset: 1px;
  border-radius: 16.5px;
  border: 1px solid rgba(255, 255, 255, 0.07); /* Inner border */
  pointer-events: none;
  z-index: 1;
}

.contact-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}

.contact-icon {
  font-size: 1.2rem;
  opacity: 0.9;
}

.contact-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
}

.contact-desc {
  font-size: 0.95rem;
  color: #a0a8b0;
  line-height: 1.4;
  text-align: left;
  margin-bottom: 4px;
}

.contact-actions {
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 100%;
}

.contact-btn {
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
  width: 100%;
}

.contact-btn.primary {
  background: #2a2b3d;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-btn.primary:hover {
  background: #3a3b4d;
  border-color: rgba(255, 255, 255, 0.2);
}

.contact-btn.secondary {
  background: #2a2b3d;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-btn.secondary:hover {
  background: #3a3b4d;
  border-color: rgba(255, 255, 255, 0.2);
}
</style>