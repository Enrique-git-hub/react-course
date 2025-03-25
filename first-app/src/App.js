import logo from './logo.svg';
import Formulario from './components/FormularioCustom/Formulario';
import LayoutBasic from './components/LayoutBasic/LayoutBasic';
import Saludar from './components/Saludar/Saludar';
import './App.css';

function App() {
const user={
  nombre:"Kike",
  edad:20,
  color:"azul"
}

const data = {
name: user.nombre,
age: user.edad,
color: user.color
}

  return (
    <div className="App">
      <LayoutBasic>
        <h1>Mi APP</h1>
      </LayoutBasic>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar data={data}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Formulario/>
      </header>
    </div>
  );
}

export default App;
