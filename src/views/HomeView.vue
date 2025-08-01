<template>
  <div class="main-bg">
    <div class="main-outer">
      <!-- Profile Header - Always visible -->
      <ProfileHeader />
      
      <!-- Desktop Layout (840px and above) -->
      <div class="desktop-layout">
        <div class="row">
          <RecentPosts />
          <div class="mx-2"></div>
          <ExperienceTimeline />
        </div>
        <div class="row">
          <ProjectCard />
          <div class="d-flex flex-column mx-4 music-contact-container">
            <MusicCard />
            <ContactCard class="mt-4" />
          </div>
          <div class="mx-2 gap-container"></div>
          <CertificationCard/>
        </div>
      </div>
      
      <!-- Mobile Layout (below 840px) -->
      <div class="mobile-layout">
        <RecentPosts />
        <ExperienceTimeline />
        <ProjectCard />
        <CertificationCard/>
        <ContactCard />
        <MusicCard />
      </div>
    </div>
  </div>
</template>

<script setup>
import ProfileHeader from '@/components/layout/home/card/ProfileHeaderCard.vue';
import RecentPosts from '@/components/layout/home/card/RecentPostCard.vue';
import ExperienceTimeline from '@/components/layout/home/card/ExperienceTimelineCard.vue';
import ProjectCard from '@/components/layout/home/card/ProjectCard.vue';
import MusicCard from '@/components/layout/home/card/MusicCard.vue';
import ContactCard from '@/components/layout/home/card/ContactCard.vue';
import CertificationCard from '@/components/layout/home/card/CertificationCard.vue';
</script>

<style scoped>
/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Main container */
.main-bg {
  min-height: 100vh;
  width: 100vw;
}

.main-outer {
  width: 100%;
  margin: 48px auto 108px auto;
  padding: 0 2rem;
}

/* Responsive container */
@media (min-width: 1420px) {
  .main-outer {
    max-width: 1200px;
    padding: 0;
  }
}

/* Layout containers */
.desktop-layout {
  display: block;
}

.mobile-layout {
  display: none;
}

.row {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
}

/* Mobile layout (below 840px) */
@media (max-width: 839px) {
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

/* Music/Contact container visibility */
@media (max-width: 1034px) {
  .music-contact-container {
    display: none !important;
  }
  
  .gap-container {
    display: block !important;
  }
}

@media (min-width: 1035px) {
  .gap-container {
    display: none !important;
  }
  
  .music-contact-container {
    display: flex !important;
  }
}
</style> 