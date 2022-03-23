const Carte = () => {
    return (
            <div className="card-body flex-column d-flex justify-content-between">
                <div className="card-block-titre">
                    <h5 className="card-title fw-bold">Titre</h5>
                    <h6 className="card-subtitle mb-2 text-gris">
                    </h6>
                </div>
                <p className="card-text">Description </p>
                <div className="d-flex justify-content-between">
                    <i
                        className="bi bi-check-circle text-success card-link btn"
                    ></i>
                    <i
                        className="bi bi-x-circle card-link btn"
                    ></i>
                </div>
            </div>
    );
}
 
export default Carte;