import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import BlogView from '@/views/BlogView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import CertificationsView from '@/views/CertificationsView.vue'
import AdminView from '@/views/admin/AdminView.vue'
import AdminLoginView from '@/views/admin/auth/AdminLoginView.vue'

// Admin imports
import AboutListView from '@/views/admin/about/AboutListView.vue'
import AboutAddView from '@/views/admin/about/AboutAddView.vue'
import AboutEditView from '@/views/admin/about/AboutEditView.vue'
import BlogListView from '@/views/admin/blog/BlogListView.vue'
import BlogAddView from '@/views/admin/blog/BlogAddView.vue'
import BlogEditView from '@/views/admin/blog/BlogEditView.vue'
import ProjectsListView from '@/views/admin/project/ProjectsListView.vue'
import ProjectsAddView from '@/views/admin/project/ProjectsAddView.vue'
import ProjectsEditView from '@/views/admin/project/ProjectsEditView.vue'
import CertificationsListView from '@/views/admin/certifications/CertificationsListView.vue'
import CertificationsAddView from '@/views/admin/certifications/CertificationsAddView.vue'
import CertificationsEditView from '@/views/admin/certifications/CertificationsEditView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/certifications',
      name: 'certifications',
      component: CertificationsView
    },
    {
      path: '/admin/login',
      name: 'admin-login',
      component: AdminLoginView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
      children: [
        // About routes
        {
          path: 'about/list',
          name: 'admin-about-list',
          component: AboutListView
        },
        {
          path: 'about/add',
          name: 'admin-about-add',
          component: AboutAddView
        },
        {
          path: 'about/edit',
          name: 'admin-about-edit',
          component: AboutEditView
        },
        // Blog routes
        {
          path: 'blog/list',
          name: 'admin-blog-list',
          component: BlogListView
        },
        {
          path: 'blog/add',
          name: 'admin-blog-add',
          component: BlogAddView
        },
        {
          path: 'blog/edit',
          name: 'admin-blog-edit',
          component: BlogEditView
        },
        // Projects routes
        {
          path: 'projects/list',
          name: 'admin-projects-list',
          component: ProjectsListView
        },
        {
          path: 'projects/add',
          name: 'admin-projects-add',
          component: ProjectsAddView
        },
        {
          path: 'projects/edit',
          name: 'admin-projects-edit',
          component: ProjectsEditView
        },
        // Certifications routes
        {
          path: 'certifications/list',
          name: 'admin-certifications-list',
          component: CertificationsListView
        },
        {
          path: 'certifications/add',
          name: 'admin-certifications-add',
          component: CertificationsAddView
        },
        {
          path: 'certifications/edit',
          name: 'admin-certifications-edit',
          component: CertificationsEditView
        },
        // Default admin route
        {
          path: '',
          redirect: '/admin/about/list'
        }
      ]
    }
  ],
})

export default router
