<template>
  <div class="main-bg">
    <div class="main-outer">
      <div class="mb-12">
        <ProfileHeader />
      </div>
      <div class="main-sections">
        <v-row no-gutters>
          <v-col cols="12" md="12" class="d-flex justify-center">
            <RecentPosts />
            <div class="mx-2"></div>
            <ExperienceTimeline />
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12" md="12" class="d-flex justify-center">
            <ProjectCard />
            <div class="d-flex flex-column mx-4">
              <MusicCard />
              <ContactCard class="mt-4" />
            </div>
            <CertificationCard/>
          </v-col>
        </v-row>
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
</style> 