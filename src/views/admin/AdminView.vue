<template>
  <div class="admin-container">
    <!-- Drawer -->
    <div class="admin-drawer" :class="{ 'drawer-open': isDrawerOpen }">
      <div class="drawer-header">
        <h2 class="drawer-title">Admin Panel</h2>
        <button class="drawer-close" @click="toggleDrawer" v-if="!isLargeScreen">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="close-icon">
            <path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/>
          </svg>
        </button>
      </div>
      
      <nav class="drawer-nav">
        <div class="nav-section">
          <h3 class="nav-section-title">Content Management</h3>
          
          <!-- About Menu -->
          <div class="nav-item">
            <button class="nav-button" @click="toggleSubmenu('about')">
              <i class="fa-regular fa-user"></i>
              <span>About</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="chevron-icon" :class="{ 'rotated': openSubmenu === 'about' }">
                <path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/>
              </svg>
            </button>
            <div class="submenu" :class="{ 'submenu-open': openSubmenu === 'about' }">
              <router-link to="/admin/about/list" class="submenu-item">List</router-link>
              <router-link to="/admin/about/add" class="submenu-item">Add</router-link>
              <router-link to="/admin/about/edit" class="submenu-item">Edit</router-link>
            </div>
          </div>

          <!-- Blog Menu -->
          <div class="nav-item">
            <button class="nav-button" @click="toggleSubmenu('blog')">
              <i class="fa-regular fa-newspaper"></i>
              <span>Blog</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="chevron-icon" :class="{ 'rotated': openSubmenu === 'blog' }">
                <path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/>
              </svg>
            </button>
            <div class="submenu" :class="{ 'submenu-open': openSubmenu === 'blog' }">
              <router-link to="/admin/blog/list" class="submenu-item">List</router-link>
              <router-link to="/admin/blog/add" class="submenu-item">Add</router-link>
              <router-link to="/admin/blog/edit" class="submenu-item">Edit</router-link>
            </div>
          </div>

          <!-- Projects Menu -->
          <div class="nav-item">
            <button class="nav-button" @click="toggleSubmenu('projects')">
              <i class="fa-regular fa-file-code"></i>
              <span>Projects</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="chevron-icon" :class="{ 'rotated': openSubmenu === 'projects' }">
                <path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/>
              </svg>
            </button>
            <div class="submenu" :class="{ 'submenu-open': openSubmenu === 'projects' }">
              <router-link to="/admin/projects/list" class="submenu-item">List</router-link>
              <router-link to="/admin/projects/add" class="submenu-item">Add</router-link>
              <router-link to="/admin/projects/edit" class="submenu-item">Edit</router-link>
            </div>
          </div>

          <!-- Certifications Menu -->
          <div class="nav-item">
            <button class="nav-button" @click="toggleSubmenu('certifications')">
              <i class="fa-regular fa-file-pdf"></i>
              <span>Certifications</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="chevron-icon" :class="{ 'rotated': openSubmenu === 'certifications' }">
                <path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/>
              </svg>
            </button>
            <div class="submenu" :class="{ 'submenu-open': openSubmenu === 'certifications' }">
              <router-link to="/admin/certifications/list" class="submenu-item">List</router-link>
              <router-link to="/admin/certifications/add" class="submenu-item">Add</router-link>
              <router-link to="/admin/certifications/edit" class="submenu-item">Edit</router-link>
            </div>
          </div>
        </div>
      </nav>

      <!-- Logout Button -->
      <div class="drawer-footer">
        <button class="logout-button" @click="handleLogout">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="logout-icon">
            <path d="M224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L160 96C107 96 64 139 64 192L64 448C64 501 107 544 160 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480C142.3 480 128 465.7 128 448L128 192C128 174.3 142.3 160 160 160L224 160zM566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L438.6 169.3C426.1 156.8 405.8 156.8 393.3 169.3C380.8 181.8 380.8 202.1 393.3 214.6L466.7 288L256 288C238.3 288 224 302.3 224 320C224 337.7 238.3 352 256 352L466.7 352L393.3 425.4C380.8 437.9 380.8 458.2 393.3 470.7C405.8 483.2 426.1 483.2 438.6 470.7L566.6 342.7z"/>
          </svg>
          <span>Logout</span>
        </button>
      </div>
    </div>

    <!-- Main Content -->
    <div class="admin-main" :class="{ 'main-shifted': isDrawerOpen }">
      <!-- Mobile Menu Toggle -->
      <div class="mobile-header" v-if="!isLargeScreen">
        <button class="menu-toggle" @click="toggleDrawer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="hamburger-icon">
            <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>
          </svg>
        </button>
        <h1 class="mobile-title">Admin Panel</h1>
      </div>

      <!-- Content Area -->
      <div class="content-area">
        <router-view />
      </div>
    </div>

    <!-- Overlay for mobile -->
    <div class="drawer-overlay" v-if="isDrawerOpen && !isLargeScreen" @click="closeDrawer"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isDrawerOpen = ref(false)
const openSubmenu = ref(null)
const isLargeScreen = ref(false)

const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value
}

const closeDrawer = () => {
  isDrawerOpen.value = false
}

const toggleSubmenu = (menu) => {
  openSubmenu.value = openSubmenu.value === menu ? null : menu
}

const handleLogout = () => {
  // Logout logic will go here
  console.log('Logout clicked')
}

const checkScreenSize = () => {
  isLargeScreen.value = window.innerWidth >= 1024
  if (isLargeScreen.value) {
    isDrawerOpen.value = true
  } else {
    isDrawerOpen.value = false
  }
}

// Function to determine which submenu should be open based on current route
const setActiveSubmenu = () => {
  const path = route.path
  if (path.includes('/admin/about/')) {
    openSubmenu.value = 'about'
  } else if (path.includes('/admin/blog/')) {
    openSubmenu.value = 'blog'
  } else if (path.includes('/admin/projects/')) {
    openSubmenu.value = 'projects'
  } else if (path.includes('/admin/certifications/')) {
    openSubmenu.value = 'certifications'
  } else {
    openSubmenu.value = null
  }
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
  setActiveSubmenu()
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})

// Watch for route changes to update active submenu
watch(() => route.path, () => {
  setActiveSubmenu()
})
</script>

<style scoped>
.admin-container {
  display: flex;
  height: 100vh;
  background: #0f0f23;
  color: #fff;
}

/* Drawer Styles */
.admin-drawer {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 280px;
  background: rgba(15, 15, 35, 0.95);
  backdrop-filter: blur(12px);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1000;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.drawer-open {
  transform: translateX(0);
}

.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.drawer-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  margin: 0;
}

.drawer-close {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  transition: background 0.2s ease;
}

.drawer-close:hover {
  background: rgba(255, 255, 255, 0.1);
}

.close-icon {
  width: 16px;
  height: 16px;
  fill: currentColor;
  transform: rotate(180deg);
}

/* Navigation Styles */
.drawer-nav {
  padding: 20px 0;
  flex: 1;
}

.nav-section {
  margin-bottom: 24px;
}

.nav-section-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: #b2b8ff;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 0 16px 20px;
}

.nav-item {
  margin-bottom: 4px;
}

.nav-button {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 12px 20px;
  background: none;
  border: none;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s ease;
  text-align: left;
}

.nav-button:hover {
  background: rgba(255, 255, 255, 0.05);
}

.nav-button i {
  width: 16px;
  font-size: 1rem;
}

.chevron-icon {
  width: 12px;
  height: 12px;
  fill: currentColor;
  margin-left: auto;
  transition: transform 0.3s ease;
}

.chevron-icon.rotated {
  transform: rotate(90deg);
}

/* Submenu Styles */
.submenu {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  background: rgba(0, 0, 0, 0.2);
}

.submenu-open {
  max-height: 200px;
}

.submenu-item {
  display: block;
  padding: 10px 20px 10px 48px;
  color: #cfd8dc;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.submenu-item:hover {
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
}

.submenu-item.router-link-active {
  background: rgba(178, 184, 255, 0.1);
  color: #b2b8ff;
  border-left: 3px solid #b2b8ff;
}

/* Drawer Footer */
.drawer-footer {
  padding: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: auto;
}

.logout-button {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 12px 16px;
  background: rgba(220, 53, 69, 0.1);
  border: 1px solid rgba(220, 53, 69, 0.3);
  border-radius: 8px;
  color: #dc3545;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
}

.logout-button:hover {
  background: rgba(220, 53, 69, 0.2);
  border-color: rgba(220, 53, 69, 0.5);
}

.logout-icon {
  width: 16px;
  height: 16px;
  fill: currentColor;
}

/* Main Content Styles */
.admin-main {
  flex: 1;
  margin-left: 0;
  transition: margin-left 0.3s ease;
  overflow-y: auto;
}

.main-shifted {
  margin-left: 280px;
}

/* Mobile Header */
.mobile-header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  background: rgba(15, 15, 35, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.menu-toggle {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  transition: background 0.2s ease;
}

.menu-toggle:hover {
  background: rgba(255, 255, 255, 0.1);
}

.hamburger-icon {
  width: 20px;
  height: 20px;
  fill: currentColor;
}

.mobile-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
}

/* Content Area */
.content-area {
  padding: 24px;
  min-height: calc(100vh - 80px);
}

/* Overlay */
.drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

/* Responsive */
@media (max-width: 1023px) {
  .admin-main {
    margin-left: 0;
  }
  
  .main-shifted {
    margin-left: 0;
  }
}

@media (min-width: 1024px) {
  .mobile-header {
    display: none;
  }
  
  .admin-drawer {
    position: relative;
    transform: translateX(0);
  }
  
  .admin-main {
    margin-left: 0;
  }
  
  .main-shifted {
    margin-left: 0;
  }
}
</style> 