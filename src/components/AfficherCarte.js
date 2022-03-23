import React, { useEffect, useState } from 'react'
import Carte from './Carte'
import axios from "axios";
import { useRecoilState } from 'recoil';
import { descriptions, statistiques } from "../atoms/stateManagement"; 

const AfficherCarte = () => {
    const [data, setData] = useRecoilState(descriptions);
    const [statistique, setStatistiques] = useRecoilState(statistiques);
    let [Valider, Refuser] = [0, 0];

    useEffect(() => {
        axios.get("https://tranquil-castle-97481.herokuapp.com/public/api/dreamteam")
            .then(response => setData(response.data));
    }, []);

    useEffect(() => {
        setStatistiques({ Valider, Refuser });
    }, [Valider, Refuser, data])



    return (
        <div className="row">
            {data && data.map(donnees => {
                donnees.statut ? Valider++ : Refuser++;
                return <Carte key={donnees.id} donnees={donnees} />
            })
            }
        </div>
    );
}
 
export default AfficherCarte;