<template>
  <div class="main-bg">
    <div class="main-outer">
      <ProfileHeader />
      
      <!-- Desktop Layout -->
      <div class="desktop-layout">
        <div class="row">
          <div class="glass about-card">
            <h2 class="section-title">About Me</h2>
            <div class="about-content">
              <p v-for="text in aboutTexts" :key="text" class="about-text">
                {{ text }}
              </p>
              <div class="skills-section">
                <h3 class="skills-title">Skills & Technologies</h3>
                <div class="skills-grid">
                  <div v-for="(skills, category) in skillsData" :key="category" class="skill-category">
                    <h4>{{ category.charAt(0).toUpperCase() + category.slice(1) }}</h4>
                    <div class="skill-tags">
                      <span v-for="skill in skills" :key="skill" class="skill-tag">
                        {{ skill }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mx-2"></div>
          <div class="glass stats-card">
            <h3 class="stats-title">Quick Stats</h3>
            <div class="stats-grid">
              <div v-for="stat in statsData" :key="stat.label" class="stat-item">
                <div class="stat-number">{{ stat.number }}</div>
                <div class="stat-label">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Mobile Layout -->
      <div class="mobile-layout">
        <div class="glass about-card">
          <h2 class="section-title">About Me</h2>
          <div class="about-content">
            <p v-for="text in aboutTexts" :key="text" class="about-text">
              {{ text }}
            </p>
            <div class="skills-section">
              <h3 class="skills-title">Skills & Technologies</h3>
              <div class="skills-grid">
                <div v-for="(skills, category) in skillsData" :key="category" class="skill-category">
                  <h4>{{ category.charAt(0).toUpperCase() + category.slice(1) }}</h4>
                  <div class="skill-tags">
                    <span v-for="skill in skills" :key="skill" class="skill-tag">
                      {{ skill }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="glass stats-card">
          <h3 class="stats-title">Quick Stats</h3>
          <div class="mobile-stats-container">
            <div v-for="(row, rowIndex) in mobileStatsRows" :key="rowIndex" class="mobile-stat-row">
              <div v-for="stat in row" :key="stat.label" class="mobile-stat-item">
                <div class="mobile-stat-icon">{{ stat.icon }}</div>
                <div class="mobile-stat-content">
                  <div class="mobile-stat-number">{{ stat.number }}</div>
                  <div class="mobile-stat-label">{{ stat.label }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProfileHeader from '@/components/layout/home/card/ProfileHeaderCard.vue';

// About content data
const aboutTexts = [
  "I'm a passionate Web & Frontend Designer based in Madrid, with over 5 years of experience creating beautiful and functional digital experiences. Currently working at Cinetic Digital, I specialize in modern web technologies and user-centered design.",
  "My journey in web development started with a curiosity about how things work on the internet. Since then, I've worked on various projects ranging from small business websites to complex web applications, always focusing on creating intuitive and engaging user experiences."
];

const skillsData = {
  frontend: ['Vue.js', 'React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Sass'],
  design: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'UI/UX'],
  tools: ['Git', 'Webpack', 'Vite', 'Docker', 'VS Code']
};

const statsData = [
  { number: '5+', label: 'Years Experience', icon: '📅' },
  { number: '50+', label: 'Projects Completed', icon: '💼' },
  { number: '20+', label: 'Happy Clients', icon: '👥' },
  { number: '15+', label: 'Technologies', icon: '⚡' }
];

// Mobile stats organized in rows of 2
const mobileStatsRows = [
  [statsData[0], statsData[1]],
  [statsData[2], statsData[3]]
];
</script>

<style scoped>
/* ===== RESET & BASE ===== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ===== LAYOUT CONTAINERS ===== */
.main-bg {
  min-height: 100vh;
  width: 100vw;
}

.main-outer {
  width: 100%;
  margin: 48px auto 108px auto;
  padding: 0 2rem;
}

.row {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
}

/* ===== RESPONSIVE LAYOUT ===== */
.desktop-layout {
  display: block;
}

.mobile-layout {
  display: none;
}

@media (max-width: 767px) {
  .desktop-layout {
    display: none;
  }
  
  .mobile-layout {
    display: block;
  }
  
  .mobile-layout > * {
    margin-bottom: 24px;
  }
}

@media (min-width: 1420px) {
  .main-outer {
    max-width: 1200px;
    padding: 0;
  }
}

/* ===== CARD STYLES ===== */
.about-card {
  position: relative;
  border-radius: 18px;
  box-shadow: 0 8px 32px 0 #0004;
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  color: #fff;
  padding: 24px 28px 22px 28px;
  width: 100%;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
}

.about-card::before {
  content: "";
  position: absolute;
  inset: 1px;
  border-radius: 16.5px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  pointer-events: none;
  z-index: 1;
}

/* ===== TYPOGRAPHY ===== */
.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 24px;
  letter-spacing: -0.5px;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.about-text {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #e0e0e0;
  margin-bottom: 16px;
}

/* ===== SKILLS SECTION ===== */
.skills-section {
  margin-top: 16px;
}

.skills-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 16px;
}

.skills-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.skill-category h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #00eaff;
  margin-bottom: 8px;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-tag {
  background: rgba(0, 234, 255, 0.1);
  color: #00eaff;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(0, 234, 255, 0.2);
  transition: all 0.2s ease;
}

.skill-tag:hover {
  background: rgba(0, 234, 255, 0.2);
  transform: translateY(-1px);
}

/* ===== STATS CARDS ===== */
.stats-card {
  width: 100%;
  height: fit-content;
}

.stats-card::before {
  content: "";
  position: absolute;
  inset: 1px;
  border-radius: 16.5px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  pointer-events: none;
  z-index: 1;
}

.stats-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 24px;
  text-align: center;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.stat-item {
  text-align: center;
  padding: 16px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: #00eaff;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 0.9rem;
  color: #b0b0b0;
  font-weight: 500;
}

/* ===== MOBILE RESPONSIVE ===== */
@media (max-width: 767px) {
  .about-card {
    padding: 24px;
  }

  .section-title {
    font-size: 1.75rem;
  }
  
  .about-text {
    font-size: 1rem;
  }

  .stats-grid {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .stat-number {
    font-size: 1.5rem;
  }

  /* Mobile Stats Layout */
  .mobile-stats-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .mobile-stat-row {
    display: flex;
    gap: 12px;
  }

  .mobile-stat-item {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 20px 16px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.2s ease;
    min-height: 80px;
    width: calc(50% - 6px);
  }

  .mobile-stat-item:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-1px);
  }

  .mobile-stat-icon {
    font-size: 1.5rem;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 234, 255, 0.1);
    border-radius: 10px;
    border: 1px solid rgba(0, 234, 255, 0.2);
    flex-shrink: 0;
  }

  .mobile-stat-content {
    flex: 1;
    min-width: 0;
  }

  .mobile-stat-number {
    font-size: 1.4rem;
    font-weight: 700;
    color: #00eaff;
    margin-bottom: 2px;
  }

  .mobile-stat-label {
    font-size: 0.85rem;
    color: #b0b0b0;
    font-weight: 500;
    line-height: 1.2;
  }
}
</style>
