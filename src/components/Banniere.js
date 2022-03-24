import Formulaire from './Formulaire'

const Banniere = () => {
    return (
        <div className="row mb-2">
            <div className='col'>
                <Formulaire />
            </div>
            <div className="col d-flex flex-column justify-center-start align-items-center">
                <img src="https://github.com/DreamTeam-P4/Boite_a_idee_lararel_react/blob/feature/EpsilonCoder/public/idea.jpg?raw=true" className="img-fluid" alt="" />
            </div>
        </div>
    );
}

export default Banniere;