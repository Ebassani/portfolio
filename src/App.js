import './App.css';
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
];

function App() {
  return (
    <div className="App">
      <Header />
      <div id="about">
        <AboutMe />
      </div>
      <div id="skills">
        <Skills skills={skills}/>
      </div>
      <div id="projects">
        <Projects projects={projectsData}/>
      </div>
    </div>
  );
}

export default App;
