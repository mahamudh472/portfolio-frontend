import apiClient from './apiClient'

const getSectionContent = async (sectionName) => {
  const response = await apiClient.get(`/sections/${sectionName}`)
  return response.data?.data || {}
}

export const getProjects = async () => {
  const response = await apiClient.get('/projects')

  return response.data
}

export const getExperience = async () => {
  const response = await apiClient.get('/experience')

  return response.data
}

export const getBlogs = async () => {
  const response = await apiClient.get('/blogs')

  return response.data
}

export const getBlogBySlug = async (slug) => {
  try {
    const response = await apiClient.get(`/blogs/${slug}`)
    return response.data
  } catch (error) {
    if (error?.response?.status === 404) {
      return null
    }
    throw error
  }
}

export const getGalleryItems = async () => {
  const response = await apiClient.get('/gallery')

  return response.data
}

export const getHomeSection = async () => getSectionContent('home')

export const getAboutSection = async () => getSectionContent('about')

export const getContactSection = async () => getSectionContent('contact')
