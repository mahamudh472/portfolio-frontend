import apiClient, { buildMockAdapter } from './apiClient'
import projects from '../data/projects.json'
import experience from '../data/experience.json'
import blogs from '../data/blogs.json'
import gallery from '../data/gallery.json'

export const getProjects = async () => {
  const response = await apiClient.get('/projects', {
    adapter: buildMockAdapter(projects, 1200),
  })

  return response.data
}

export const getExperience = async () => {
  const response = await apiClient.get('/experience', {
    adapter: buildMockAdapter(experience, 700),
  })

  return response.data
}

export const getBlogs = async () => {
  const response = await apiClient.get('/blogs', {
    adapter: buildMockAdapter(blogs, 1000),
  })

  return response.data
}

export const getBlogBySlug = async (slug) => {
  const response = await apiClient.get(`/blogs/${slug}`, {
    adapter: buildMockAdapter(blogs.find((post) => post.slug === slug) || null, 700),
  })

  return response.data
}

export const getGalleryItems = async () => {
  const response = await apiClient.get('/gallery', {
    adapter: buildMockAdapter(gallery, 900),
  })

  return response.data
}
