import React from 'react';
import axios from "axios";
import Carte from './Carte'
import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { descriptions } from "../atoms/stateManagement";

const Filtre = () => {
    const [data, setData] = useRecoilState(descriptions);

    const [datas, setDatas] = useState([]);
    const [searchTerm, setsearchTerm] = useState("");
    const [searchTerm1, setsearchTerm1] = useState("");

    useEffect(() => {
        axios.get("https://tranquil-castle-97481.herokuapp.com/public/api/dreamteam")
            .then(response => setData(response.data));
    }, []);


    const filtrerefuser = (e) => {
        console.log('je suis la');
        let value = false;
        setsearchTerm(value);

    };

    const filtreaccepter = (e) => {
        console.log('je la moi aussi');
        let value = true;
        setsearchTerm1(value);
    };

    return (
        <>
            <div className="row">
                {data && data
                    .filter((donnees) => {
                        return donnees.status.toString().includes(searchTerm)
                    })
                    .filter((donnees) => {
                        return donnees.status.toString().includes(searchTerm1)
                    })
                    .map(donnees => {
                        return <Carte key={donnees.id} donnees={donnees} />
                    })
                }
            </div>
            <div className="filtre container">
                <div className="d-flex justify-content-between align-items-center my-5 float-end">
                    <div>
                        <a href='/Boite_a_idee_lararel_react'>
                            <button type="button" className="filtre-tous btn  me-2 btn-outline-secondary btn">Tous</button></a>
                        <button type="button" onClick={filtrerefuser} className="filtre-refuse btn btn-outline-danger btn me-2">Refuser</button>
                        <button type="button" onClick={filtreaccepter} className="filtre-accepte btn btn-outline-success btn">Valider</button>
                    </div>
                </div>

            </div>

        </>
    );
}

export default Filtre;