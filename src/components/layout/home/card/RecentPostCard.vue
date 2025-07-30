<template>
  <div class="post-glass-card">
    <div class="post-header">
      <span class="post-header-icon"><i class="fa-regular fa-newspaper"></i></span>
      <span class="post-header-title">Latest Post</span>
    </div>
    <div class="post-date">March 11, 2025</div>
    <div class="post-title">
      How to manage multiple Git accounts (GitHub & GitLab) with different SSH keys and per-folder users
    </div>
    <div class="post-tags">
      <span class="post-tag">#Development</span>
      <span class="post-tag">#Git</span>
      <span class="post-tag">#Tutorial</span>
    </div>
    <div class="post-summary">
      In this tutorial, you'll learn how to manage multiple Git accounts (e.g., personal and work) using <b>different SSH keys</b> and <b>automatic per-folder configurations</b>, all organized so you never have to manually change users or remotes again.
    </div>
  </div>
</template>

<script setup>
// Static placeholder data for now
</script>

<style scoped>
.post-glass-card {
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

.post-glass-card::before {
  content: "";
  position: absolute;
  inset: 1px;
  border-radius: 16.5px;
  border: 1px solid rgba(255, 255, 255, 0.07); /* Inner border */
  pointer-events: none;
  z-index: 1;
}

.post-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.05rem;
  font-weight: 500;
  margin-bottom: 2px;
}
.post-header-icon {
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
.post-header-title {
  color: #fff;
  font-weight: 500;
  font-size: 1.08rem;
}
.post-date {
  color: #b2b8ff;
  font-size: 0.98rem;
  margin-bottom: 2px;
}
.post-title {
  font-weight: 700;
  font-size: 1.13rem;
  margin-bottom: 6px;
  color: #fff;
}
.post-tags {
  display: flex;
  gap: 6px;
  margin-bottom: 2px;
}
.post-tag {
  background: #23243a;
  color: #fff;
  border-radius: 8px;
  font-size: 0.92rem;
  padding: 2px 10px 2px 10px;
  font-weight: 500;
  letter-spacing: 0.01em;
  border: 1px solid #23243a;
  box-shadow: 0 1px 4px #0002;
}
.post-summary {
  color: #cfd8dc;
  font-size: 1rem;
  margin-top: 2px;
}
</style> 