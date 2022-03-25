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


    const handleSearchTerm = (e) => {
        console.log('je suis la');
        let value = 'Yousouph';
        setsearchTerm(value);
    };

    const handleSearchTerm1 = (e) => {
        console.log('je la moi aussi');
        let value = 'Cheikh';
        setsearchTerm1(value);
    };

    return (
        <>
            <div className="row">
                {data && data
                    .filter((donnees) => {
                        return donnees.title.includes(searchTerm)
                    })
                    .filter((donnees) => {
                        return donnees.title.includes(searchTerm1)
                    })
                    .map(donnees => {
                        return <Carte key={donnees.id} donnees={donnees} />
                    })
                }
            </div>
            <div className="filtre container">
                <div className="d-flex justify-content-between align-items-center my-5 float-end">
                    <div>
                        <a href='/'>
                            <button type="button" className="filtre-tous btn  me-2 btn-outline-secondary btn">Tous</button></a>
                        <button type="button" onClick={handleSearchTerm} className="filtre-refuse btn btn-outline-danger btn me-2">Refuser</button>
                        <button type="button" onClick={handleSearchTerm1} className="filtre-accepte btn btn-outline-success btn">Valider</button>
                    </div>
                </div>
                {/* Ajout des cartes de Youssouph */}
            </div>

        </>
    );
}

export default Filtre;