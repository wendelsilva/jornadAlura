import React, { Component } from "react";

class FormularioCadastro extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Titulo" />
                <textarea placeholder="escreva sua nota"></textarea>
                <button type="submit">Criar Nota</button>
            </form>
        );
    }
}

export default FormularioCadastro;