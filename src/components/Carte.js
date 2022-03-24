import React, { useState } from 'react';
import CarteStyle from "../style/style";
import axios from 'axios';

const Carte = ({ donnees }) => {
    const [status, setStatus] = useState(donnees.status);

    const validationCarte = () => {
        axios.put(
            `https://tranquil-castle-97481.herokuapp.com/public/api/dreamteam/${donnees.id}`,
            { status: true }
        )
            .then(() => setStatus(true))
    }

    const refusCarte = () => {
        axios.put(
            `https://tranquil-castle-97481.herokuapp.com/public/api/dreamteam/${donnees.id}`,
            { status: false }
        )
            .then(() => setStatus(false))
    }

    return (
        <CarteStyle className="card card-idea m-2" resultat={status}>

            <div className="card-body flex-column d-flex justify-content-between">
                <div className="card-block-titre">
                    <h5 className="card-title fw-bold">{donnees.title}</h5>
                    <h6 className="card-subtitle mb-2 text-gris">
                        {status ? "Valider" : "Refuser"}
                    </h6>
                </div>
                <p className="card-text">{donnees.description}</p>
                <div className="d-flex justify-content-between">
                    <i
                        id={"valider"}
                        className="bi bi-check-circle text-success card-link btn"
                        style={{ fontSize: "2rem" }}
                        onClick={validationCarte}
                    ></i>
                    <i
                        id={"refuser"}
                        className="bi bi-x-circle card-link btn"
                        style={{ fontSize: "2rem", color: "#ce0033" }}
                        onClick={refusCarte}
                    ></i>
                </div>
            </div>
        </CarteStyle>
    );
}

export default Carte;