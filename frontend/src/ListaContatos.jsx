import React from "react";

const ListaContatos = ({ contatos, updateContato, updateCallback }) => {
    const onDelete = async (id) => {
        try {
            const options = {
                method: "DELETE"
            }
            const response = await fetch(`http://127.0.0.1:5000/delete_contato/${id}`, options)
            if (response.status === 200) {
                updateCallback()
            } else {
                console.error("Failed to delete")
            }
        } catch (error) {
            alert(error)
        }
    }

    return <div>
        <h2>Contatos</h2>
        <table>
            <thead>
                <tr>
                    <th>Primeiro Nome</th>
                    <th>Ultimo Nome</th>
                    <th>Email</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {contatos.map((contato) => (
                    <tr key={contato.id}>
                        <td>{contato.primeiroNome}</td>
                        <td>{contato.ultimoNome}</td>
                        <td>{contato.email}</td>
                        <td>
                            <button onClick={() => updateContato(contato)}>Atualizar</button>
                            <button onClick={() => onDelete(contato.id)}>Deletar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}

export default ListaContatos