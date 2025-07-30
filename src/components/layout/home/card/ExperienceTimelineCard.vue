<template>
  <div class="exp-glass-card">
    <div class="exp-header">
      <span class="exp-header-icon"><i class="fa-regular fa-id-badge"></i></span>
      <span class="exp-header-title">Experience</span>
    </div>
    <div class="exp-list">
      <div v-for="exp in experiences" :key="exp.company" class="exp-item">
        <img :src="exp.logo" :alt="exp.company" class="exp-logo" />
        <div class="exp-info">
          <div class="exp-company">{{ exp.company }}</div>
          <div class="exp-title">{{ exp.title }}</div>
        </div>
        <div class="exp-years">{{ exp.years }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const experiences = [
  {
    company: 'Cinetic Digital',
    title: 'Web & Frontend Designer',
    years: '2021 — Present',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Bitmap_Icon.png',
  },
  {
    company: 'Ádraba',
    title: 'Graphic Designer & Web Developer',
    years: '2018 — 2021',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Pleiades_star_cluster_core.jpg',
  },
  {
    company: 'Tantra',
    title: 'Graphic Designer & Web Layout Artist',
    years: '2015 — 2019',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Blue_Square.png',
  },
  {
    company: 'TechCorp',
    title: 'Junior Frontend Developer',
    years: '2013 — 2015',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Red_Square.png',
  },
  {
    company: 'StartupHub',
    title: 'UI/UX Designer',
    years: '2012 — 2013',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Green_Square.png',
  },
  {
    company: 'Digital Agency',
    title: 'Web Design Intern',
    years: '2011 — 2012',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Yellow_Square.png',
  },
]
</script>

<style scoped>
.exp-glass-card {
  position: relative;
  background: rgba(24, 25, 38, 0.747);
  border-radius: 18px;
  box-shadow: 0 8px 32px 0 #0004;
  border: 1px solid rgba(255, 255, 255, 0.05); /* Outer border */
  backdrop-filter: blur(12px);
  color: #fff;
  padding: 24px 28px 22px 28px;
  width: 100%;
  height: 350px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
}

.exp-glass-card::before {
  content: "";
  position: absolute;
  inset: 1.5px;
  border-radius: 16.5px;
  border: 1px solid rgba(255, 255, 255, 0.07); /* Inner border */
  pointer-events: none;
  z-index: 1;
}

.exp-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.05rem;
  font-weight: 500;
  margin-bottom: 2px;
}
.exp-header-icon {
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
.exp-header-title {
  color: #fff;
  font-weight: 500;
  font-size: 1.08rem;
}
.exp-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 8px;
  flex: 1 1 auto;
  overflow-y: auto;
  padding-right: 4px;
}
.exp-list::-webkit-scrollbar {
  width: 6px;
}
.exp-list::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 8px;
}
.exp-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 6px 0;
}
.exp-logo {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  object-fit: cover;
  background: #23243a;
  box-shadow: 0 2px 8px #0002;
}
.exp-info {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.exp-company {
  font-weight: 700;
  font-size: 1.05rem;
  color: #fff;
}
.exp-title {
  color: #b2b8ff;
  font-size: 0.98rem;
  font-weight: 500;
}
.exp-years {
  color: #cfd8dc;
  font-size: 0.97rem;
  font-weight: 500;
  min-width: 90px;
  text-align: right;
}
</style> 