import dataStudents from './data/students.json';

import DigitalClock from './components/DigitalClock';
import TodoList from './components/TodoList';
import StudentList from './components/StudentList';

// Styling
import './App.css';


// Data
const keywords = [
  'JavaScript',
  'Python',
  'C#',
  'Java',
];

const dataTodos1 = ['pizza', 'kidibul', 'duvel', 'kaasblokjes'];
const dataTodos2 = ['sla', 'tomaat', 'spruiten', 'pastinaak', 'plat water'];



const Message = ({ msg }) => {
  return (
    <p>{msg}</p>
  )
};

function App() {
  const firstName = 'Luke';
  const user = {
    nickName: 'skywalker',
    hairColor: 'blond',
  };

  const getMessage = (message = `nothing`) => {
    return `My message is ${message}`;
  };

  const isLoggedIn = true;
  const isMobile = false;

  const generateJSXForHeader = () => {
    if (isMobile) {
      return (
        <div>Mobile Header</div>
      );
    } else {
      return (
        <div>Desktop Header</div>
      );
    }
  };

  return (
    <div className="app">
      <DigitalClock />
      <DigitalClock />
      <h1>Hello World</h1>
      <p>Hello, {firstName}</p>
      <p>Hello, {user.nickName}. Your hair color is {user.hairColor}.</p>
      <p>My message is {getMessage(`More peace no war`)}</p>
      <ul>
        {isLoggedIn ? <li>Sign Out</li> : <li>Sign In</li>}
      </ul>
      <div>{generateJSXForHeader()}</div>
      <ul>
        {keywords.map((keyword, index) => <li key={index}>{keyword}</li>)}
      </ul>
      <Message msg={`Greetings Weirdo's`} />
      <Message msg={`Greetings Barbies`} />
      <Message msg={`Greetings Napoleons`} />
      <Message msg={`Greetings Newbies`} />
      <TodoList data={dataTodos1} />
      <TodoList data={dataTodos2}/>
      <StudentList data={dataStudents} />
      
    </div>
  );
}

export default App;
