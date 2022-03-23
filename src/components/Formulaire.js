const Formulaire = () => {
    return (
        <form>
            <div className="mb-4">
                <label htmlFor="titre" className="form-label">Titre</label>
                <input
                    type="text"
                    className="form-control"
                    name="titre"
                    placeholder="Entrez le titre du brief"
                    aria-describedby="titreHelp"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="suggestion" className="form-label pt-4">
                    Descriptif</label>
                <textarea
                    className="form-control"
                    id="suggestion"
                    name="suggestion"
                    rows="10"
                    placeholder="Entrez vos suggestions"
                ></textarea>
                <p className="pt-4">
                    Nombre de mots saisi / 130
                </p>
                <p id="text-restant" className="pt-4">Nombre de mots restants</p>
            </div>
            <button
                type="submit"
                id="btn-suggestion"
                className="btn btn-danger float-end"
            >
                Envoyer
            </button>
        </form>
    );
}

export default Formulaire;