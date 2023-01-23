import logo from './logo.svg';
import './App.css';
import About from './About/About';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/**
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
         */}
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </header>
    </div>
  );
}

export default App;
