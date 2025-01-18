import { useState } from "react";

const FormularioContatos = ({ contatoExistente = {}, updateCallback }) => {
    const [primeiroNome, setprimeiroNome] = useState(contatoExistente.primeiroNome || "")
    const [ultimoNome, setultimoNome] = useState(contatoExistente.ultimoNome || "")
    const [email, setEmail] = useState(contatoExistente.email || "")

    const updating = Object.entries(contatoExistente).length !== 0

    const onSubmit = async (e) => {
        e.preventDefault()

        const data = {
            primeiroNome,
            ultimoNome,
            email
        }
        const url = "http://127.0.0.1:5000/" + (updating ? `update_contato/${contatoExistente.id}` : "create_contato")
        const options = {
            method: updating ? "PATCH" : "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)

        }
        const response = await fetch(url, options)
        if (response.status !== 201 && response.status !== 200) {
            const data = await response.json()
            alert(data.message)
        } else {
            updateCallback()
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="primeiroNome">Primeiro nome:</label>
                <input
                    type="text"
                    id="primeiroNome"
                    value={primeiroNome}
                    onChange={(e) => setprimeiroNome(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="ultimoNome">Último nome:</label>
                <input
                    type="text"
                    id="ultimoNome"
                    value={ultimoNome}
                    onChange={(e) => setultimoNome(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button type="submit">{updating ? "Atualizar" : "Criar"}</button>
        </form>
    );
};

export default FormularioContatos