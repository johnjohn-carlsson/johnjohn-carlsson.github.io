import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-muted-light bg-surface/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-display text-xl hover:text-electric transition-colors">
            ← Home
          </Link>
          <a 
            href="/assets/resume.pdf" 
            download
            className="bg-electric text-electric-foreground px-4 py-2 rounded-lg font-medium hover:scale-105 transition-transform"
          >
            Download PDF
          </a>
        </div>
      </header>

      {/* Resume Content */}
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 print:shadow-none print:p-0">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-display-bold text-4xl md:text-5xl mb-4">
              Your Name
            </h1>
            <p className="text-xl text-muted mb-6">
              Creative Engineer & Problem Solver
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-muted">
              <span>your.email@domain.com</span>
              <span>•</span>
              <span>+1 (555) 123-4567</span>
              <span>•</span>
              <span>yourportfolio.com</span>
            </div>
          </div>

          {/* Experience */}
          <section className="mb-12">
            <h2 className="font-display-bold text-2xl mb-6 border-b-2 border-electric pb-2">
              Experience
            </h2>
            
            <div className="space-y-8">
              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="font-display text-xl">Senior Creative Developer</h3>
                  <span className="text-muted">2022 - Present</span>
                </div>
                <p className="text-muted mb-3">Amazing Tech Company</p>
                <ul className="list-disc list-inside space-y-1 text-foreground/80">
                  <li>Led development of interactive web experiences using React, TypeScript, and WebGL</li>
                  <li>Collaborated with design teams to create award-winning digital campaigns</li>
                  <li>Mentored junior developers and established coding standards</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="font-display text-xl">Frontend Developer</h3>
                  <span className="text-muted">2020 - 2022</span>
                </div>
                <p className="text-muted mb-3">Creative Studio Inc.</p>
                <ul className="list-disc list-inside space-y-1 text-foreground/80">
                  <li>Built responsive web applications with modern JavaScript frameworks</li>
                  <li>Optimized performance and accessibility across all projects</li>
                  <li>Worked directly with clients to translate vision into reality</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-12">
            <h2 className="font-display-bold text-2xl mb-6 border-b-2 border-electric pb-2">
              Skills
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display text-lg mb-3">Technical</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Node.js', 'WebGL', 'Three.js', 'Tailwind CSS'].map(skill => (
                    <span key={skill} className="bg-surface px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-display text-lg mb-3">Creative</h3>
                <div className="flex flex-wrap gap-2">
                  {['UI/UX Design', 'Animation', 'Prototyping', 'Creative Coding'].map(skill => (
                    <span key={skill} className="bg-surface px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="font-display-bold text-2xl mb-6 border-b-2 border-electric pb-2">
              Education
            </h2>
            
            <div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="font-display text-xl">Bachelor of Computer Science</h3>
                <span className="text-muted">2016 - 2020</span>
              </div>
              <p className="text-muted">University of Technology</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Resume;