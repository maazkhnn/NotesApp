import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// You may have this boolean value after using some authentication
let loggedIn = true;

// You may have a list of todos from your database after your user logs in.
const todos = ["Todo 1", "Todo 2", "Todo 3"];

// You may get all of this information in this format from your database
const todonotes = [
  { title: "Todo 1", content: "Walk my dog" },
  { title: "Todo 2", content: "Walk my dog again" },
  { title: "Todo 3", content: "Remember to walk the dog again" },
  { title: "Todo 4", content: "Please don't forget to walk the dog" },
  { title: "Todo 5", content: "Oh no I think I forgot" },
  { title: "Todo 6", content: "Todo 6 content" },
  { title: "Todo 7", content: "Todo 7 content" },
  { title: "Todo 8", content: "Todo 8 content" },
];

const projectList = [
  { id: 1, name: "Project 1", description: "This is project 1 description." },
  { id: 2, name: "Project 2", description: "This is project 2 description." },
];

// Navbar component
function NavBar() {
  return (
    <nav>
      <div>
        <h1 className="logo">Notes</h1>
      </div>
      <ul className="nav-links">
        <li>
          Home
        </li>
        <li>
          About
        </li>
        <li>
          Contact
        </li>
        <li>
          Login
        </li>
      </ul>
    </nav>
  );
}

function HomePage() {
  return (
    <div>
      <h1>What's good y'all! Welcome to My Notes App</h1>
      <p>These are humble beginnings. so don't judge too harshly</p>
    </div>
  );
}

function Hobbies() {
  return (
    <div>
      <h2>Hobbies</h2>
      <ul>
        <li>Reading</li>
        <li>Coding</li>
        <li>Walking</li>
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
  return (
    <div>
      <h2>Contact</h2>
      <p>Email: example@example.com</p>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2024 My Notes App. All rights reserved.</p>
    </footer>
  );
}
// ProjectDetail component to display each project
function ProjectDetail({ name, description }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

// Note component, using props to individualize each note.
function Notes({ title, content }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <NavBar />
      {loggedIn && (
        <>
          <HomePage />
          <Hobbies />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App