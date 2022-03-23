import './App.css';
import Banniere from './components/Banniere';
import Carte from './components/Carte';
import Entete from './components/Entete';
import Filtre from './components/Filtre';


function App() {
  return (
    <div className="App container">
      {/* Ajout de la navigation de Dior */}
      <Entete/>
      <Banniere/>
      <Filtre/>
      <Carte/>
    </div>
  );
}

export default App;
