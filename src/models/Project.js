// Untuk development, kita bisa menggunakan data dummy
import { featuredProjects } from '../data/homeData';

export const getProjects = async () => {
  // Untuk sementara kembalikan data dummy
  // Nanti bisa diganti dengan koneksi database
  return [
    ...featuredProjects,
    {
      id: 4,
      title: "Blog Platform",
      description: "A modern blogging platform with markdown support, SEO optimization, and social sharing features.",
      image_url: "/api/placeholder/400/300",
      technologies: ["Next.js", "MDX", "Vercel", "Tailwind CSS"],
      github_url: "https://github.com/rafinasrullah/blog-platform",
      featured: false
    },
    {
      id: 5,
      title: "API Gateway",
      description: "A microservices API gateway with authentication, rate limiting, and request logging.",
      image_url: "/api/placeholder/400/300",
      technologies: ["Node.js", "Express", "Redis", "JWT"],
      github_url: "https://github.com/rafinasrullah/api-gateway",
      featured: false
    }
  ];
};

export const getProjectById = async (id) => {
  const projects = await getProjects();
  return projects.find(project => project.id === parseInt(id));
};

export const createProject = async (project) => {
  // Simulasi create operation
  const newProject = {
    id: Math.max(...(await getProjects()).map(p => p.id)) + 1,
    ...project,
    created_at: new Date().toISOString()
  };
  return newProject;
};