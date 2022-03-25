import './App.css';
import Banniere from './components/Banniere';
import Entete from './components/Entete';
import Filtre from './components/Filtre';
import Menu from './components/Menu';


function App() {

  return (
    <div className="App container-fluide">
      <Menu />
      <Entete />
      <Banniere />
      <Filtre />

    </div>
  );
}

export default App;
