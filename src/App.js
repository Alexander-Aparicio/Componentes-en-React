import Header from './components/Header';
import './App.css';
import CrudApp from './components/CrudApp';
import CrudApi from './components/CrudApi';
import BuscadorDeCanciones from './components/SongSearch';
import { FormularioValid } from './components/Formulario';

// import SelectAnidado from './components/SelectAnidado';
// import { DatosBcrp } from './components/ApiBcrp';

function App() {
  return (
    <div className="App"> 
      <header className="App-header">
      <Header/>
      </header>
      <FormularioValid/>
      {/* <DatosBcrp/> */}
      {/* <SelectAnidado/> */}
      <BuscadorDeCanciones/>
      <CrudApi/>
      <CrudApp/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default App;
