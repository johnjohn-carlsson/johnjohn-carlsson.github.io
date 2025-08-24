import { Link } from 'react-router-dom';

const About = () => {
  const timeline = [
    {
      year: '2024',
      title: 'Creative Engineer',
      description: 'Diving deep into interactive experiences and WebGL wizardry'
    },
    {
      year: '2022',
      title: 'Frontend Focus',
      description: 'Mastered React, TypeScript, and modern web development'
    },
    {
      year: '2020',
      title: 'First Real Job',
      description: 'Started as a junior developer, learned everything I could'
    },
    {
      year: '2018',
      title: 'College Side Projects',
      description: 'Built my first apps and discovered my love for creative coding'
    }
  ];

  const funFacts = [
    'I once built a website that made sounds based on mouse movements (it was actually pretty cool)',
    'My code has been viewed by millions of people, but I still debug with console.log',
    'I can solve a Rubik\'s cube in under 2 minutes (not that impressive, but I\'m proud)',
    'My first website was a fan page for my favorite video game — it had Comic Sans and everything',
    'I believe the best solutions come from understanding both the technical and human sides of problems'
  ];

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

      {/* About Content */}
      <main className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Intro */}
        <div className="text-center mb-16">
          <h1 className="font-display-bold text-4xl md:text-6xl mb-6">
            About <span className="electric-text">Me</span>
          </h1>
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-foreground/80">
            <p>
              I'm a creative engineer who loves building things that surprise and delight people. 
              My background spans frontend development, UI/UX design, and creative coding — 
              basically, I'm happiest when I'm at the intersection of technology and creativity.
            </p>
            <p>
              When I'm not coding, you'll find me experimenting with generative art, 
              learning new technologies, or probably overthinking the animation timing 
              on some micro-interaction that 99% of people will never notice (but I will).
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Timeline */}
          <section>
            <h2 className="font-display-bold text-2xl mb-8">My Journey</h2>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={item.year} className="relative">
                  {index !== timeline.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-16 bg-muted-light" />
                  )}
                  <div className="flex items-start gap-4">
                    <div className="bg-electric text-electric-foreground rounded-full w-12 h-12 flex items-center justify-center font-display font-bold text-sm flex-shrink-0">
                      {item.year}
                    </div>
                    <div className="pt-2">
                      <h3 className="font-display text-lg mb-2">{item.title}</h3>
                      <p className="text-muted">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Fun Facts */}
          <section>
            <h2 className="font-display-bold text-2xl mb-8">Random Facts</h2>
            <div className="space-y-4">
              {funFacts.map((fact, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
                  <p className="text-foreground/80">
                    <span className="text-electric font-bold">#{index + 1}</span> {fact}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* What I'm Up To */}
        <section className="mt-16">
          <h2 className="font-display-bold text-2xl mb-8 text-center">What I'm Up To</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="font-display text-lg mb-2">Learning</h3>
              <p className="text-muted text-sm">
                Currently diving into Three.js and WebGL shaders
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="font-display text-lg mb-2">Creating</h3>
              <p className="text-muted text-sm">
                Building a generative art platform for creative coders
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="font-display text-lg mb-2">Reading</h3>
              <p className="text-muted text-sm">
                "The Design of Everyday Things" by Don Norman
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center mt-16 p-8 bg-surface rounded-2xl">
          <h3 className="font-display text-xl mb-4">Want to work together?</h3>
          <p className="text-muted mb-6">
            I'm always open to interesting projects and collaborations.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center justify-center bg-electric text-electric-foreground px-6 py-3 rounded-lg font-medium hover:scale-105 transition-transform"
          >
            Get in touch
          </Link>
        </div>
      </main>
    </div>
  );
};

export default About;