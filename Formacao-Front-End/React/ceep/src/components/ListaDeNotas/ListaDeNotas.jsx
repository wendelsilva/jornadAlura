import React, { Component } from "react";
import CardNota from "../CardNota";

class ListaDeNotas extends Component {

    render() {
        return (
            <ul>
                {this.props.notas.map((nota, index) => {
                    return (
                        <li key={index}>
                            <CardNota titulo={nota.titulo} text={nota.texto}/>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default ListaDeNotas;