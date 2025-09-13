import './App.css';
import { useEffect } from 'react';

function useScrollAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll('.section-animation');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
}

function App() {
  useScrollAnimation();

  return (
    <div className="app-container">
      {/* Hero Section */}
      <header className="hero">
        <nav className="navbar">
          <div className="logo">
            <img
              src="./src/assets/Me.jpeg"
              alt="Logo"
              className="logo-img"
            />
          </div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="hero-content section-animation">
          <h1>Hello, I'm Armaan Mulani</h1>
          <p>Full Stack Developer | Lifelong Learner | Tech Enthusiast</p>
          <a href="#contact" className="cta-btn">Let's Connect</a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="about-section section-animation">
        <h2>About Me</h2>
        <p>
          I'm a passionate developer with experience in building web applications using modern technologies. I enjoy solving complex problems and learning new skills. My interests include frontend and backend development, UI/UX design, and emerging tech.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section section-animation">
        <h2>Skills</h2>
        <div className="skills-list">
          <div className="skill">JavaScript</div>
          <div className="skill">React</div>
          <div className="skill">Node.js</div>
          <div className="skill">Express</div>
          <div className="skill">MongoDB</div>
          <div className="skill">HTML &amp; CSS</div>
          <div className="skill">Python</div>
          <div className="skill">Git &amp; GitHub</div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section section-animation">
        <div className="projects-header">
          <h2>Projects</h2>
        </div>
        <div className="projects-list">
          <div className="project-card">
            <h3>SENO AI</h3>
            <p>
              A voice assistant built with Python that integrates speech recognition and AI for personalized assistance.
            </p>
            <a href="https://github.com/armaanmulani/seno-ai" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
          <div className="project-card">
            <h3>KrishiSuvidha</h3>
            <p>
              An AI-powered agricultural advisory platform offering crop recommendations and pest detection for farmers.
            </p>
            <a href="https://github.com/armaanmulani/krishisuvidha" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
          <div className="project-card">
            <h3>Adidas Dummy</h3>
            <p>
              A demo e-commerce UI for Adidas products featuring product grids, filters, and cart functionality.
            </p>
            <a href="https://github.com/armaanmulani/adidas-dummy" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section section-animation">
        <h2>Contact</h2>
        <p>
          Interested in collaborating or just want to say hi? Feel free to reach out!
        </p>
        <form
          className="contact-form"
          onSubmit={e => {
            e.preventDefault();
            const form = e.target;
            const name = form.name.value;
            const email = form.email.value;
            const message = form.message.value;
            const mailto = `mailto:armaanmulani@gmail.com?subject=Wants%20to%20Contact%20from%20${encodeURIComponent(
              name
            )}&body=${encodeURIComponent(
              `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
            )}`;
            window.location.href = mailto;
          }}
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Armaan Mulani. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/ArmaanM08" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/armaan-mulani" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
