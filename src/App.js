import './App.css';
import { useEffect } from "react"
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Header from './components/Header';
import Projects from './components/Projects';

const skills = [
  { skill: 'JavaScript', description: 'Experienced in ES6+' },
  { skill: 'React', description: 'Skilled in building SPAs' },
  { skill: 'CSS', description: 'Proficient in styling with CSS' },
];

const projectsData = [
  {
    title: 'Project One',
    description: 'Description for project one.',
    link: 'https://link-to-project-one.com'
  },
  {
    title: 'Project Two',
    description: 'Description for project two.',
    link: 'https://link-to-project-two.com'
  },
  {
    title: 'Project Three',
    description: 'Description for project three.',
    link: 'https://link-to-project-three.com'
  },
  {
    title: 'Project Four',
    description: 'Description for project four.',
    link: 'https://link-to-project-four.com'
  },
  
];

function App() {

  useEffect(() => {
    document.title = "Portfolio Eduardo"
  }, [])

  return (
    <div className="App">
      <Header />
      <div className='containers'>
        <div className='container'>  
          <div id="about" className='container_'>
            <AboutMe />
          </div>
          <div id="skills" className='container_'>
            <Skills skills={skills}/>
          </div>
          <div id="projects" className='container_'>
            <Projects projects={projectsData}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
