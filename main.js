

// ARRAY

const razas = ["Agente de Marketing", "WordPress Dev", "Front-End", "Back-End", "Full-Stack"
];

let select = document.getElementById("raza");
    for (let i = 0; i < razas.length; i++) {
        var option = document.createElement("option");
        option.text = razas[i];
        select.add(option);
    }


const caracter = [
    "Coding", "Nego", "Chamuy", "Sabiduría", "Salary"
];

// OBJETOS - RAZAS PointsBasic

const agenteMarketing = {
    Coding: -3,
    Nego: 3,
    Chamuy: 3,
    Sabiduría: 0,
    Salary: 3
}

const wordPress = {
    Coding: 1,
    Nego: 1,
    Chamuy: 2,
    Sabiduría: 1,
    Salary: 1
}

const frontEnd = {
    Coding: 3,
    Nego: 0,
    Chamuy: 0,
    Sabiduría: 3,
    Salary: 0
}

const backEnd = {
    Coding: 4,
    Nego: 0,
    Chamuy: -3,
    Sabiduría: 4,
    Salary: 1
}

const fullStack = {
    Coding: 2,
    Nego: 1,
    Chamuy: 1,
    Sabiduría: 2,
    Salary: 0
}

// Formulario
/*

#nombre - let nombre
#raza - value raza
*/

// Cantidad de Batallas

// function limitarContador(input) {
//     let batallas = parseInt(input.value, 10);
//     let limiteBatallas = 7;
//     if (batallas > limiteBatallas) {
//         input.value = limiteBatallas;
//     }
// }