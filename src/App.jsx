import { useState } from 'react'
import './App.css'

const projectList = [
  { id: 1, name: "Personal Portfolio Website", description: "A website to showcase my projects and skills." },
  { id: 2, name: "React To Do App", description: "A todo list application built with React for learning purposes." },
];

function NavBar() {
  return (
    <nav>
      <div>
        <h1 className="logo">My Portfolio</h1>
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

function HomePage() {
  return (
    <div>
      <h1>Welcome to My Personal Portfolio</h1>
      <p>Hi, I'm Maaz, a passionate developer. These are my humble beginnings.</p>
    </div>
  );
}

function Hobbies() {
  return (
    <div>
      <h2>Hobbies</h2>
      <ul>
        <li>Soccer</li>
        <li>Film Photography</li>
      </ul>
    </div>
  );
}

function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      {projectList.map((project) => (
        <ProjectDetail key={project.id} name={project.name} description={project.description} />
      ))}
    </div>
  );
}

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <div>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" />
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2024 [Muhammad Maaz Khan]. All rights reserved.</p>
    </footer>
  );
}

function ProjectDetail({ name, description }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <NavBar />
      <HomePage />
      <Hobbies />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;