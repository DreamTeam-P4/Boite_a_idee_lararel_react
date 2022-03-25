import React from "react";
import { Chart } from "react-google-charts";


const options = {
    title: "Statistiques des idées",
    colors: ['#198754', '#ce0033'],
    width: 600,
    height: 450,
    pieHole: 0.7,
    is3D: false,
};


function Graph() {
    const data = [
        ["Task", "Hours per Day"],
        ["Valider", 4],
        ["Refuser", 4],
    ];
    return (
        <Chart
            chartType="PieChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
        />
    );
}

export default Graph;