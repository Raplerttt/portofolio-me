export const homeData = {
    personalInfo: {
      name: "Moh Rafi Nasrullah",
      title: "Full Stack Developer & Software Engineer",
      location: "Bandung, Indonesia",
      email: "mhmdraffi1002@gmail.com",
      bio: "Passionate about creating innovative digital experiences with modern web technologies. Specialized in building scalable applications with React, Node.js",
      stats: {
        projects: 7,
        experience: 1,
        clients: 3,
      }
    },
    skills: [
      { name: 'React/Next.js', icon: '🔄', level: 80 },
      { name: 'Node.js', icon: '⚙️', level: 88 },
      { name: 'PostgreSQL', icon: '🗄️', level: 80 },
      { name: 'Tailwind CSS', icon: '🎨', level: 90 },
      { name: 'Basis Data', icon: '📝', level: 78 },
      { name: 'AWS', icon: '☁️', level: 30 },
      { name: 'Docker', icon: '📦', level: 68 },
      { name: 'Python', icon: '🐍', level: 60 },
    ],
    testimonials: [
      {
        name: "Sarah Johnson",
        role: "Product Manager at TechCorp",
        content: "Rafi delivered an exceptional web application that exceeded our expectations. His attention to detail and communication throughout the project were outstanding.",
        avatar: "👩‍💼"
      },
      {
        name: "Michael Chen",
        role: "CTO at StartupHub",
        content: "Working with Rafi was a great experience. He transformed our complex requirements into a clean, efficient solution ahead of schedule.",
        avatar: "👨‍💻"
      },
      {
        name: "Emily Rodriguez",
        role: "Founder at DesignStudio",
        content: "Rafi's technical expertise and creative problem-solving skills helped us build a product that truly stands out in the market.",
        avatar: "👩‍🎨"
      }
    ]
  };
  
  export const featuredProjects = [
    {
      id: 1,
      title: "Jualan Bareng",
      description: "A full-featured e-commerce platform with payment integration, user authentication, and admin dashboard.",
      image_url: "/1.jpg",
      technologies: ["Tailwind CSS", "Vite", "PostgreSQL", "Prisma"],
      github_url: "https://github.com/Raplerttt/JualanBareng",
      featured: true
    },
  ];