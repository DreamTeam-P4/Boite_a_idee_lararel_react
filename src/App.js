import './App.css';
import AfficherCarte from './components/AfficherCarte';
import Banniere from './components/Banniere';
import Entete from './components/Entete';
import Filtre from './components/Filtre';
import { useRecoilState } from 'recoil';
import { descriptions } from "./atoms/stateManagement";
import Navbar from './components/Navbar';


function App() {

  return (
    <div className="App container-fluid">
      {/* Ajout de la navigation de Dior */}
      <Navbar />
      <Entete />
      <Banniere />
      <Filtre />
      <AfficherCarte />

    </div>
  );
}

export default App;
