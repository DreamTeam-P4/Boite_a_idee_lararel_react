// import React, { useEffect, useState } from 'react'
import React, { useEffect } from 'react'
import Carte from './Carte'
import axios from "axios";
import { useRecoilState } from 'recoil';
import { descriptions } from "../atoms/stateManagement";

const AfficherCarte = () => {
    const [data, setData] = useRecoilState(descriptions);

    useEffect(() => {
        axios.get("https://tranquil-castle-97481.herokuapp.com/public/api/dreamteam")
            .then(response => setData(response.data));
    }, []);





    return (
        <div className="row">
            {data && data.map(donnees => {

                return <Carte key={donnees.id} donnees={donnees} />
            })
            }
        </div>
    );
}

export default AfficherCarte;