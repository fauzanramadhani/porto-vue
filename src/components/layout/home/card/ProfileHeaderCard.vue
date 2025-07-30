<template>
  <v-row class="profile-header" no-gutters>
    <v-col cols="12">
      <div class="profile-content">
        <v-avatar size="90" class="profile-avatar">
          <v-img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" />
        </v-avatar>
        <div class="profile-info">
          <h1 class="profile-name">Edu Calvo</h1>
          <div class="profile-desc">Web & Frontend Designer based in Madrid.<br>Currently working at Cinetic Digital.</div>
          <v-chip class="status-chip" size="small" label>
            <span class="online-dot"></span>
            Available for new projects
          </v-chip>
          <div class="social-icons mt-2">
            <v-btn icon variant="text" href="#" target="_blank" aria-label="Twitter"><i class="fab fa-twitter"></i></v-btn>
            <v-btn icon variant="text" href="#" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></v-btn>
            <v-btn icon variant="text" href="#" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></v-btn>
            <v-btn icon variant="text" href="#" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></v-btn>
            <v-btn icon variant="text" href="#" target="_blank" aria-label="Email"><i class="fas fa-envelope"></i></v-btn>
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script setup>
// No script logic needed for static header
</script>

<style scoped>
.profile-header {
  padding: 32px 0 0px 10px;
  background: transparent;
}

.profile-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
}

.profile-avatar {
  box-shadow: 0 4px 24px 0 #0003;
  border: 3px solid #222b;
}

.profile-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  width: 100%;
}

.profile-name {
  margin: 0;
  font-size: 2.2rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -1px;
}

.profile-desc {
  font-size: 1.15rem;
  color: #ffffff;
  font-weight: 400;
}

.status-chip {
  margin-top: 4px;
  font-size: 0.95rem;
  font-weight: 500;
  background: rgba(0,255,128,0.12);
  color: #ffffff;
  border: 1px solid #00e67644;
  backdrop-filter: blur(2px);
}

.social-icons {
  display: flex;
  align-items: center;
}

.social-icons .v-btn {
  color: #b2b8ff;
  margin-right: 4px;
  transition: color 0.2s;
}

.social-icons .v-btn:hover {
  color: #00eaff;
}

.social-icons i {
  font-size: 1.25rem;
}

.online-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #00e676;
  margin-right: 8px;
  position: relative;
  vertical-align: middle;
  animation: online-pulse 2s ease-in-out infinite;
}

.online-dot::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: inherit;
  transform: translate(-50%, -50%);
  animation: online-ripple 2s ease-in-out infinite;
}

.online-dot::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: inherit;
  transform: translate(-50%, -50%);
  animation: online-ripple 2s ease-in-out infinite 0.5s;
}

@keyframes online-pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1);
  }
}

@keyframes online-ripple {
  0% {
    opacity: 0.8;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.4;
    transform: translate(-50%, -50%) scale(2);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(3);
  }
}

@media (max-width: 600px) {
  .profile-header {
    padding: 20px 0 10px 0;
  }
  
  .profile-content {
    gap: 16px;
  }
}
</style>