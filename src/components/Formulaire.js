import React from "react";
import { useState } from "react";
import axios from "axios";


const Formulaire = (props) => {

    const longueurMax = 130;
    const [contenuSaisi, setContenuSaisi] = useState("");
    const [reste, setReste] = useState(longueurMax);
    const [title, setTitle] = useState("");

    const GestionDescription = (e) => {
        setContenuSaisi(e.target.value);
        setReste(longueurMax - contenuSaisi.length);
    }

    const GestionTitre = (e) => {
        setTitle(e.target.value);
    }

    const Envoie = (e) => {
        e.preventDefault();
        axios.post("https://tranquil-castle-97481.herokuapp.com/public/api/dreamteam",
            { title: title, description: contenuSaisi, statut: true },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                }
            }
        )
    }

    return (

        <form onSubmit={Envoie}>
            <div className="mb-4">
                <label htmlFor="titre" className="form-label">Titre</label>
                <input
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="Entrez le titre du brief"
                    aria-describedby="titreHelp"
                    onChange={GestionTitre}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label pt-4">
                    Descriptif</label>
                <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    rows="10"
                    placeholder="Entrez vos suggestions"
                    onChange={GestionDescription}
                ></textarea>
                <p className="pt-4" style={{ color: (reste < 0) ? "red" : "green" }}>
                    Nombre de mots saisi {contenuSaisi.length} / 130
                </p>
                <p id="text-restant" className="pt-4">Nombre de mots restants {reste}</p>
            </div>
            <button
                type="submit"
                id="btn-description"
                className="btn btn-danger float-end"
            >
                Envoyer
            </button>
        </form>
    );
}

export default Formulaire;