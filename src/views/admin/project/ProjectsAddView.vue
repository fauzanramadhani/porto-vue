<template>
  <div class="admin-page">
    <div class="page-header">
      <h1 class="page-title">Projects - Add</h1>
      <p class="page-description">Add new project</p>
    </div>
    
    <div class="page-content">
      <div class="content-card">
        <p>This is the add project page.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Projects add logic will go here
</script>

<style scoped>
.admin-page {
  max-width: 1200px;
  margin: 0 auto;
}

.page-header {
  margin-bottom: 32px;
}

.page-title {
  font-size: 2rem;
  font-weight: 600;
  color: #fff;
  margin: 0 0 8px 0;
}

.page-description {
  color: #cfd8dc;
  font-size: 1rem;
  margin: 0;
}

.page-content {
  margin-top: 24px;
}

.content-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 24px;
  backdrop-filter: blur(8px);
}

.content-card p {
  color: #cfd8dc;
  font-size: 1rem;
  margin: 0;
}
</style> 