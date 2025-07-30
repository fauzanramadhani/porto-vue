<template>
  <div class="main-bg">
    <div class="main-outer">
      <div class="mb-12">
        <ProfileHeader />
      </div>
      <div class="main-sections">
        <v-row no-gutters>
          <v-col cols="12" md="12" class="d-flex justify-center">
            <div class="glass about-card">
              <h2 class="section-title">About Me</h2>
              <div class="about-content">
                <p class="about-text">
                  I'm a passionate Web & Frontend Designer based in Madrid, with
                  over 5 years of experience creating beautiful and functional
                  digital experiences. Currently working at Cinetic Digital, I
                  specialize in modern web technologies and user-centered
                  design.
                </p>
                <p class="about-text">
                  My journey in web development started with a curiosity about
                  how things work on the internet. Since then, I've worked on
                  various projects ranging from small business websites to
                  complex web applications, always focusing on creating
                  intuitive and engaging user experiences.
                </p>
                <div class="skills-section">
                  <h3 class="skills-title">Skills & Technologies</h3>
                  <div class="skills-grid">
                    <div class="skill-category">
                      <h4>Frontend</h4>
                      <div class="skill-tags">
                        <span class="skill-tag">Vue.js</span>
                        <span class="skill-tag">React</span>
                        <span class="skill-tag">JavaScript</span>
                        <span class="skill-tag">TypeScript</span>
                        <span class="skill-tag">HTML5</span>
                        <span class="skill-tag">CSS3</span>
                        <span class="skill-tag">Sass</span>
                      </div>
                    </div>
                    <div class="skill-category">
                      <h4>Design</h4>
                      <div class="skill-tags">
                        <span class="skill-tag">Figma</span>
                        <span class="skill-tag">Adobe XD</span>
                        <span class="skill-tag">Photoshop</span>
                        <span class="skill-tag">Illustrator</span>
                        <span class="skill-tag">UI/UX</span>
                      </div>
                    </div>
                    <div class="skill-category">
                      <h4>Tools</h4>
                      <div class="skill-tags">
                        <span class="skill-tag">Git</span>
                        <span class="skill-tag">Webpack</span>
                        <span class="skill-tag">Vite</span>
                        <span class="skill-tag">Docker</span>
                        <span class="skill-tag">VS Code</span>
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
                <div class="stat-item">
                  <div class="stat-number">5+</div>
                  <div class="stat-label">Years Experience</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">50+</div>
                  <div class="stat-label">Projects Completed</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">20+</div>
                  <div class="stat-label">Happy Clients</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">15+</div>
                  <div class="stat-label">Technologies</div>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProfileHeader from '@/components/layout/home/card/ProfileHeaderCard.vue';
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main-bg {
  min-height: 100vh;
  width: 100vw;
}

.main-outer {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: start;
}

.main-sections {
  width: 100%;
}

.about-card {
  position: relative;
  border-radius: 18px;
  box-shadow: 0 8px 32px 0 #0004;
  border: 1px solid rgba(255, 255, 255, 0.05); /* Outer border */
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
  border: 1px solid rgba(255, 255, 255, 0.07); /* Inner border */
  pointer-events: none;
  z-index: 1;
}

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

.stats-card {
  padding: 16px;
  width: 100%;
  max-width: 300px;
  height: fit-content;
}

.stats-card::before {
  content: "";
  position: absolute;
  inset: 1px;
  border-radius: 16.5px;
  border: 1px solid rgba(255, 255, 255, 0.07); /* Inner border */
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

@media (max-width: 768px) {
  .about-card {
    padding: 24px;
  }

  .stats-card {
    padding: 24px;
    margin-top: 20px;
  }

  .stats-grid {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .stat-number {
    font-size: 1.5rem;
  }
}
</style>
