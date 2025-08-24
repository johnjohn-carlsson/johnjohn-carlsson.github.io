import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Interactive Data Visualization',
    description: 'A complex data visualization built with D3.js and React, featuring smooth animations and real-time updates.',
    tags: ['React', 'D3.js', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    link: 'https://example.com/project1'
  },
  {
    id: 2,
    title: 'Creative Agency Website',
    description: 'A stunning website for a creative agency with WebGL animations and smooth scroll interactions.',
    tags: ['WebGL', 'GSAP', 'Next.js'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    link: 'https://example.com/project2'
  },
  {
    id: 3,
    title: 'E-commerce Platform',
    description: 'Modern e-commerce solution with advanced filtering, real-time inventory, and seamless checkout.',
    tags: ['React', 'Node.js', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    link: 'https://example.com/project3'
  },
  {
    id: 4,
    title: 'Mobile App Prototype',
    description: 'Interactive prototype for a fitness tracking app with custom animations and micro-interactions.',
    tags: ['React Native', 'Figma', 'Framer'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
    link: 'https://example.com/project4'
  },
  {
    id: 5,
    title: 'Creative Coding Experiment',
    description: 'Generative art project exploring mathematical patterns with p5.js and creative algorithms.',
    tags: ['p5.js', 'Creative Coding', 'WebGL'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    link: 'https://example.com/project5'
  },
  {
    id: 6,
    title: 'SaaS Dashboard',
    description: 'Clean and intuitive dashboard for a SaaS platform with advanced analytics and reporting.',
    tags: ['React', 'Chart.js', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    link: 'https://example.com/project6'
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-muted-light bg-surface/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <Link to="/" className="font-display text-xl hover:text-electric transition-colors">
            ← Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-6">
          <h1 className="font-display-bold text-4xl md:text-6xl mb-6">
            My <span className="electric-text">Work</span>
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            A collection of projects that showcase my passion for creating 
            beautiful, functional, and innovative digital experiences.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <main className="container mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article 
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              
              <div className="p-6">
                <h3 className="font-display text-xl mb-3 group-hover:text-electric transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="bg-surface px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-electric font-medium hover:underline"
                >
                  View Project →
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Portfolio;