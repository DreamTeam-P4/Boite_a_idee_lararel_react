const Filtre = () => {
    return (
        <div className="filtre container">
            <div className="d-flex justify-content-between align-items-center my-5 float-end">
                <div>
                    <button type="button" className="filtre-tous btn  me-2 btn-outline-secondary btn">Tous</button>
                    <button type="button" className="filtre-refuse btn btn-outline-danger btn me-2">Refusée</button>
                    <button type="button" className="filtre-accepte btn btn-outline-success btn">Acceptée</button>
                </div>
            </div>
            {/* Ajout des cartes de Youssouph */}
        </div>
    );
}
 
export default Filtre;