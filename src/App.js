import './App.css';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Header from './components/Header';

const skills = [
  { skill: 'JavaScript', description: 'Experienced in ES6+' },
  { skill: 'React', description: 'Skilled in building SPAs' },
  { skill: 'CSS', description: 'Proficient in styling with CSS' },
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
    </div>
  );
}

export default App;
