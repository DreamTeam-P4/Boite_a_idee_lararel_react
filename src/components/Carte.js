import React, { useState } from 'react';
import CarteStyle from "../style/style";
import axios from 'axios';

const Carte = ({donnees}) => {
    const [statut, setStatut] = useState(donnees.statut); 

    const validationCarte = () =>{
        axios.patch(
            `https://tranquil-castle-97481.herokuapp.com/public/api/dreamteam${donnees.id}`,
            { statut: true }
        )
        .then(() => setStatut(true))
    }

    const refusCarte = () => {
        axios.patch(
            `https://tranquil-castle-97481.herokuapp.com/public/api/dreamteam${donnees.id}`,
            { statut: false }
        )
        .then(() => setStatut(false))
    }

    return (
        <CarteStyle className="card card-idea m-2" resultat= {statut}>

            <div className="card-body flex-column d-flex justify-content-between">
                <div className="card-block-titre">
                    <h5 className="card-title fw-bold">{donnees.titre}</h5>
                    <h6 className="card-subtitle mb-2 text-gris">
                    </h6>
                </div>
                <p className="card-text">{donnees.description}</p>
                <div className="d-flex justify-content-between">
                    <i
                        id={"approuve"}
                        className="bi bi-check-circle text-success card-link btn"
                        style={{ fontSize: "2rem" }}
                        onClick={validationCarte}
                    ></i>
                    <i
                        id={"desapprouve"}
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