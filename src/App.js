import './App.css';
import AfficherCarte from './components/AfficherCarte';
import Banniere from './components/Banniere';
import Entete from './components/Entete';
import Filtre from './components/Filtre';
import Graph from './components/Graphique';
import Menu from './components/Menu';


function App() {

  return (
    <div className="App container-fluide">
      <Menu />
      <Entete />
      <Banniere />
      <Filtre />
      <Graph />
    </div>
  );
}

export default App;
