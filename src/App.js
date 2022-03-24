import './App.css';
import AfficherCarte from './components/AfficherCarte';
import Banniere from './components/Banniere';
import Entete from './components/Entete';
import Filtre from './components/Filtre';
import { useRecoilState } from 'recoil';
import { descriptions } from "./atoms/stateManagement";


function App() {

  const [data, setData] = useRecoilState(descriptions);

  return (
    <div className="App container">
      {/* Ajout de la navigation de Dior */}
      <Entete/>
      <Banniere/>
      <Filtre/>
      <AfficherCarte/>
    </div>
  );
}

export default App;
