<template>
  <div class="profile-header-card">
    <!-- Cover Photo -->
    <div class="cover-photo">
      <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80" alt="Cover" class="cover-image" />
      <div class="cover-overlay"></div>
    </div>
    
    <!-- Profile Content -->
    <div class="profile-content">
      <div class="avatar-container">
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" class="profile-avatar" />
      </div>
      
      <div class="profile-info">
        <h1 class="profile-name">Fauzan Gracia Ramadhani</h1>
        <div class="profile-desc">Web & Frontend Designer based in Madrid.<br>Currently working at Cinetic Digital.</div>
        
        <div class="status-chip">
          <span class="online-dot"></span>
          Available for new projects
        </div>
        
        <div class="social-icons">
          <a href="#" target="_blank" class="social-link" aria-label="Twitter">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" target="_blank" class="social-link" aria-label="Instagram">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" target="_blank" class="social-link" aria-label="GitHub">
            <i class="fab fa-github"></i>
          </a>
          <a href="#" target="_blank" class="social-link" aria-label="LinkedIn">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="#" target="_blank" class="social-link" aria-label="Email">
            <i class="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script logic needed for static header
</script>

<style scoped>
.profile-header-card {
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 8px 32px 0 #0004;
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.05);
  margin-bottom: 24px;
  width: 100%;
}

/* Cover Photo Styles */
.cover-photo {
  position: relative;
  height: 200px;
  width: 100%;
  overflow: hidden;
}

.cover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.profile-header-card:hover .cover-image {
  transform: scale(1.05);
}

.cover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(15, 15, 35, 0.3) 0%,
    rgba(15, 15, 35, 0.6) 50%,
    rgba(15, 15, 35, 0.8) 100%
  );
}

/* Profile Content Styles */
.profile-content {
  position: relative;
  padding: 0 24px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.avatar-container {
  margin-top: -60px;
  position: relative;
  z-index: 2;
}

.profile-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  object-fit: cover;
  background: #23243a;
}

.profile-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  width: 100%;
}

.profile-name {
  margin: 0;
  font-size: 2.2rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -1px;
  line-height: 1.1;
}

.profile-desc {
  font-size: 1.15rem;
  color: #cfd8dc;
  font-weight: 400;
  line-height: 1.4;
  margin: 0;
}

.status-chip {
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  font-size: 0.95rem;
  font-weight: 500;
  background: rgba(0, 234, 118, 0.12);
  color: #00e676;
  border: 1px solid rgba(0, 230, 118, 0.3);
  border-radius: 20px;
  backdrop-filter: blur(8px);
  margin-top: 4px;
}

.social-icons {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 8px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  color: #b2b8ff;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.social-link:hover {
  color: #00eaff;
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.social-link i {
  font-size: 1.1rem;
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

/* Responsive Design */
@media (max-width: 768px) {
  .cover-photo {
    height: 160px;
  }
  
  .profile-content {
    padding: 0 20px 20px 20px;
    gap: 16px;
  }
  
  .profile-avatar {
    width: 100px;
    height: 100px;
  }
  
  .profile-name {
    font-size: 1.8rem;
  }
  
  .profile-desc {
    font-size: 1rem;
  }
  
  .social-icons {
    gap: 8px;
  }
  
  .social-link {
    width: 36px;
    height: 36px;
  }
}

@media (max-width: 480px) {
  .cover-photo {
    height: 140px;
  }
  
  .profile-content {
    padding: 0 16px 16px 16px;
  }
  
  .profile-name {
    font-size: 1.6rem;
  }
  
  .profile-desc {
    font-size: 0.95rem;
  }
}
</style>