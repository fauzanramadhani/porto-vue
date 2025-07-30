<template>
  <div class="main-bg">
    <div class="main-outer">
      <div class="mb-12">
        <ProfileHeader />
      </div>
      <div class="main-sections">
        <v-row no-gutters>
          <v-col cols="12" md="12" class="d-flex justify-center">
            <div class="glass blog-card">
              <h2 class="section-title">Latest Posts</h2>
              <div class="blog-posts">
                <div v-for="post in blogPosts" :key="post.id" class="blog-post">
                  <div class="post-image">
                    <img :src="post.image" :alt="post.title" />
                    <div class="post-category">{{ post.category }}</div>
                  </div>
                  <div class="post-content">
                    <h3 class="post-title">{{ post.title }}</h3>
                    <p class="post-excerpt">{{ post.excerpt }}</p>
                    <div class="post-meta">
                      <span class="post-date">{{ post.date }}</span>
                      <span class="post-read-time">{{ post.readTime }} min read</span>
                    </div>
                    <v-btn 
                      variant="text" 
                      color="#00eaff" 
                      class="read-more-btn"
                      @click="readPost(post.id)"
                    >
                      Read More
                      <i class="fas fa-arrow-right ml-2"></i>
                    </v-btn>
                  </div>
                </div>
              </div>
            </div>
            <div class="mx-2"></div>
            <div class="glass sidebar-card">
              <h3 class="sidebar-title">Categories</h3>
              <div class="categories-list">
                <div 
                  v-for="category in categories" 
                  :key="category.name"
                  class="category-item"
                  :class="{ active: selectedCategory === category.name }"
                  @click="selectCategory(category.name)"
                >
                  <span class="category-name">{{ category.name }}</span>
                  <span class="category-count">{{ category.count }}</span>
                </div>
              </div>
              
              <h3 class="sidebar-title mt-6">Popular Tags</h3>
              <div class="tags-cloud">
                <span 
                  v-for="tag in popularTags" 
                  :key="tag.name"
                  class="tag-item"
                >
                  {{ tag.name }}
                </span>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProfileHeader from '@/components/layout/home/card/ProfileHeaderCard.vue';

const selectedCategory = ref('All');

const blogPosts = ref([
  {
    id: 1,
    title: "Building Modern Web Applications with Vue 3",
    excerpt: "Explore the latest features in Vue 3 and how they can improve your development workflow. From Composition API to better TypeScript support...",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
    category: "Development",
    date: "March 15, 2024",
    readTime: 8
  },
  {
    id: 2,
    title: "The Future of Frontend Design Systems",
    excerpt: "Design systems are becoming increasingly important in modern web development. Learn how to create scalable and maintainable design systems...",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=250&fit=crop",
    category: "Design",
    date: "March 10, 2024",
    readTime: 6
  },
  {
    id: 3,
    title: "Optimizing Performance in React Applications",
    excerpt: "Performance is crucial for user experience. Discover techniques to optimize your React applications and improve loading times...",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
    category: "Development",
    date: "March 5, 2024",
    readTime: 10
  },
  {
    id: 4,
    title: "CSS Grid vs Flexbox: When to Use What",
    excerpt: "Understanding the differences between CSS Grid and Flexbox is essential for modern layout design. Here's a comprehensive guide...",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    category: "CSS",
    date: "February 28, 2024",
    readTime: 7
  }
]);

const categories = ref([
  { name: 'All', count: 12 },
  { name: 'Development', count: 5 },
  { name: 'Design', count: 4 },
  { name: 'CSS', count: 2 },
  { name: 'JavaScript', count: 1 }
]);

const popularTags = ref([
  { name: 'Vue.js' },
  { name: 'React' },
  { name: 'JavaScript' },
  { name: 'CSS' },
  { name: 'Design Systems' },
  { name: 'Performance' },
  { name: 'TypeScript' },
  { name: 'Web Development' }
]);

const selectCategory = (category) => {
  selectedCategory.value = category;
};

const readPost = (postId) => {
  console.log('Reading post:', postId);
  // Navigate to post detail page
};
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
  padding-bottom: 120px;
}

.main-sections {
  width: 100%;
}

.blog-card {
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

.blog-card {
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

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 32px;
  letter-spacing: -0.5px;
}

.blog-posts {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.blog-post {
  display: flex;
  gap: 24px;
  padding: 24px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease;
}

.blog-post:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.post-image {
  position: relative;
  flex-shrink: 0;
}

.post-image img {
  width: 120px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
}

.post-category {
  position: absolute;
  top: 8px;
  left: 8px;
  background: rgba(0, 234, 255, 0.9);
  color: #000;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
}

.post-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.post-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.4;
}

.post-excerpt {
  font-size: 0.95rem;
  color: #b0b0b0;
  line-height: 1.6;
}

.post-meta {
  display: flex;
  gap: 16px;
  font-size: 0.85rem;
  color: #808080;
}

.read-more-btn {
  align-self: flex-start;
  font-weight: 500;
  text-transform: none;
  padding: 8px 16px;
}

.sidebar-card {
  padding: 32px;
  width: 100%;
  max-width: 300px;
  height: fit-content;
}

.sidebar-card::before {
  content: "";
  position: absolute;
  inset: 1px;
  border-radius: 16.5px;
  border: 1px solid rgba(255, 255, 255, 0.07); /* Inner border */
  pointer-events: none;
  z-index: 1;
}

.sidebar-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 20px;
}

.categories-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.category-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid transparent;
}

.category-item:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(0, 234, 255, 0.3);
}

.category-item.active {
  background: rgba(0, 234, 255, 0.1);
  border-color: rgba(0, 234, 255, 0.5);
}

.category-name {
  color: #ffffff;
  font-weight: 500;
}

.category-count {
  color: #808080;
  font-size: 0.9rem;
}

.tags-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag-item {
  background: rgba(0, 234, 255, 0.1);
  color: #00eaff;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(0, 234, 255, 0.2);
  transition: all 0.2s ease;
  cursor: pointer;
}

.tag-item:hover {
  background: rgba(0, 234, 255, 0.2);
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .blog-card {
    padding: 24px;
  }
  
  .sidebar-card {
    padding: 24px;
    margin-top: 20px;
  }
  
  .blog-post {
    flex-direction: column;
    gap: 16px;
  }
  
  .post-image img {
    width: 100%;
    height: 200px;
  }
}
</style> 