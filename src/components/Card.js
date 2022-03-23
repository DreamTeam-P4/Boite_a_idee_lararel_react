import React from 'react';
import StyledCard from './style/cardes';
const  Card =() => {
    return (
       < StyledCard>
           < div className="card card-idea m-2">
        <div className="card-body flex-column d-flex justify-content-between">
            <div className="card-block-titre">
                <h5 className="card-title fw-bold">titre</h5>
                <h6 className="card-subtitle mb-2 text-gris">
                approuvée
                </h6>
            </div>
            <p className="card-text">description </p>
            <div className="d-flex justify-content-between">
                <i
                    id={"approuve"}
                    className="bi bi-check-circle teal-color"
                    style={{fontSize: "3rem"}}
                    
                ></i>
                <i
                    id={"desapprouve"}
                    className="bi bi-x-circle red-color"
                    style={{fontSize: "3rem", color: "#ce0033"}}
                   
                ></i>
            </div>
        </div>
        </div>
    </StyledCard>
    );
}

export default Card;