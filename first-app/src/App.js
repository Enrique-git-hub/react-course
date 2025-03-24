import logo from './logo.svg';
import Saludar from './components/Saludar';
import './App.css';

function App() {
const user={
  nombre:"Kike",
  edad:20,
  color:"azul"
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar name={user.nombre} age={user.edad} color={user.color}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
