import React, { useState } from 'react';
import './App.css';

const projectList = [
  { id: 1, name: "Personal Portfolio Website", description: "A website to showcase my projects and skills." },
  { id: 2, name: "Graph Based Maze Solver Application", description: "A Java-based application that utilizes graph theory to solve mazes. \
  It converts mazes into weighted, directed graphs, employing DFS, BFS, and Dijkstra's algorithms for pathfinding. \
  Features include a graphical user interface for interactive maze generation and visualization of algorithmic solutions in real-time." },
];

const NavBar = () => (
  <nav>
    <div><h1 className="logo">My Portfolio</h1></div>
    <ul className="nav-links">
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);

const ProjectDetail = ({ name, description }) => (
  <div className="project">
    <h3>{name}</h3>
    <p>{description}</p>
  </div>
);

const Projects = () => (
  <div>
    <h2>Projects</h2>
    {projectList.map(project => (
      <ProjectDetail key={project.id} name={project.name} description={project.description} />
    ))}
  </div>
);

const Contact = () => {
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
};

const Footer = () => (
  <footer>
    <p>© 2024 Muhammad Maaz Khan. All rights reserved.</p>
  </footer>
);

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <NavBar />
      <button onClick={toggleDarkMode} className="mode-toggle">
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <header className="header">
        <h1>Welcome to My Personal Portfolio</h1>
        <p>Hi, I'm Maaz, a passionate coder. These are my humble beginnings.</p>
      </header>
      <section className="projects"><Projects /></section>
      <section className="contact"><Contact /></section>
      <Footer />
    </div>
  );
};

export default App;