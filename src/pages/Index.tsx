import { InteractivePortrait } from '@/components/InteractivePortrait';
import { RadialMenu } from '@/components/RadialMenu';

const Index = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <head>
        <title>Creative Engineer - Your Name</title>
        <meta name="description" content="Creative Engineer specializing in interactive web experiences, frontend development, and creative coding. Slightly unhinged, in a good way." />
        <meta property="og:title" content="Creative Engineer - Your Name" />
        <meta property="og:description" content="I build playful, high-performance websites and experiments at the intersection of technology and creativity." />
        <link rel="canonical" href="/" />
      </head>

      <main className="hero-section">
        {/* Hero Content */}
        <div className="hero-content">
          <h1 className="font-display-bold text-3xl md:text-5xl lg:text-6xl mb-4">
            Creative Engineer.
          </h1>
          <h2 className="font-display text-xl md:text-2xl lg:text-3xl mb-8 text-muted">
            Slightly unhinged — <span className="electric-text">in a good way</span>.
          </h2>
          
          {/* Interactive Portrait with Radial Menu */}
          <div className="relative mb-8">
            <InteractivePortrait />
            <RadialMenu />
          </div>
          
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
            I build playful, high-performance websites and experiments 
            at the intersection of technology and creativity.
          </p>
        </div>

        {/* Footer */}
        <footer className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-sm text-muted">
            © 2024 Your Name. Built with curiosity and caffeine.
          </p>
        </footer>
      </main>
    </>
  );
};

export default Index;
