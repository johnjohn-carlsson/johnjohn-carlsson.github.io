import { Link } from 'react-router-dom';

const Contact = () => {
  const contactLinks = [
    {
      label: 'Email',
      value: 'your.email@domain.com',
      href: 'mailto:your.email@domain.com',
      description: 'Drop me a line anytime'
    },
    {
      label: 'LinkedIn',
      value: '/in/yourprofile',
      href: 'https://linkedin.com/in/yourprofile',
      description: 'Let\'s connect professionally'
    },
    {
      label: 'GitHub',
      value: '/yourusername',
      href: 'https://github.com/yourusername',
      description: 'Check out my code'
    },
    {
      label: 'Twitter',
      value: '@yourusername',
      href: 'https://twitter.com/yourusername',
      description: 'Follow my thoughts'
    }
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

      {/* Contact Content */}
      <main className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="font-display-bold text-4xl md:text-6xl mb-6">
            Let's <span className="electric-text">Connect</span>
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Always excited to collaborate on interesting projects or just chat 
            about technology, design, and creative coding.
          </p>
        </div>

        {/* Primary Contact */}
        <div className="text-center mb-16">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg inline-block">
            <h2 className="font-display text-2xl mb-4">Ready to start something amazing?</h2>
            <a 
              href="mailto:your.email@domain.com"
              className="inline-flex items-center justify-center bg-electric text-electric-foreground px-8 py-4 rounded-xl font-display text-lg hover:scale-105 hover:glow transition-all duration-300"
            >
              Send me an email
            </a>
          </div>
        </div>

        {/* Contact Links */}
        <div className="grid md:grid-cols-2 gap-6">
          {contactLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-display text-xl mb-2 group-hover:text-electric transition-colors">
                    {link.label}
                  </h3>
                  <p className="text-muted text-sm mb-2">
                    {link.description}
                  </p>
                  <p className="font-medium text-foreground">
                    {link.value}
                  </p>
                </div>
                <div className="text-electric opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Fun Note */}
        <div className="text-center mt-16 p-8 bg-surface rounded-2xl">
          <p className="text-muted">
            <span className="font-display">Pro tip:</span> Mention something specific about my work 
            or portfolio in your message — it shows you're not just copy-pasting! 
            I read every email and try to respond within 24 hours.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Contact;