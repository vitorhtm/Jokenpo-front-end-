import React from 'react';

import {
    FaRegHandPaper,
    FaRegHandLizard,
    FaRegHandRock,
    FaRegHandSpock,
    FaRegHandScissors,
  } from "react-icons/fa";
  
const colecaoIcons = {
    lagarto:() => <FaRegHandLizard size={52} />,
    pedra: () => <FaRegHandRock size={52} />,
    papel: () => <FaRegHandPaper size={52} />,
    spock: () => <FaRegHandSpock size={52} />,
    tesoura: () => <FaRegHandScissors size={52} />,
};
 
export const icons = [
    'lagarto',
    'pedra',
    'papel',
    'spock',
    'tesoura',
]

const Botao = (props) => {
    let selecionado = ""
    if (props.selecionado){
        selecionado = "botaoselecionado"
    }

    return ( 
        <button className={"botao " + selecionado} onClick={props.click}>
            {colecaoIcons[props.icon]()}
        </button>
     );
}
 
export default Botao;