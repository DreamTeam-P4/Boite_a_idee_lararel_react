import Formulaire from './Formulaire'

const Banniere = () => {
    return (
        <div className="row mb-2">
            <div className='col'>
                {/* Incorporation du formulaire */}
                <Formulaire />
            </div>
            <div className="col d-flex flex-column justify-center-start align-items-center">
                <img src="/idea.jpg" className="img-fluid" alt="Petite illustration" />
            </div>
        </div>
    );
}
 
export default Banniere;