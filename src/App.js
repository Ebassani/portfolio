import './App.css';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import image from './images/Portrait.jpg'

const skills = [
  { skill: 'JavaScript', description: 'Experienced in ES6+' },
  { skill: 'React', description: 'Skilled in building SPAs' },
  { skill: 'CSS', description: 'Proficient in styling with CSS' },
];



function App() {
  return (
    <div className="App">
      <AboutMe />
      <Skills skills={skills}/>
    </div>
  );
}

export default App;
