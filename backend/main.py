from flask import  request, jsonify
from config import app, db
from models import Contato

@app.route("/contatos", methods=["GET"])
def get_contatos():
    contatos = Contato.query.all()
    json_contatos = list(map(lambda x: x.to_json(), contatos))
    return jsonify({"contatos": json_contatos})

@app.route("/create_contato", methods=["POST"])
def create_contato():
    primeiro_nome = request.json.get("primeiroNome")
    ultimo_nome = request.json.get("ultimoNome")
    email = request.json.get("email")
    
    if not primeiro_nome or not ultimo_nome or not email:
        return jsonify({"message": "Você deve providenciar um nome, sobrenome e email."}), 400
    
    new_contato = Contato(primeiro_nome=primeiro_nome, ultimo_nome=ultimo_nome, email=email)
    try:
        db.session.add(new_contato)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400

    return jsonify({"message": "Usuário criado!"}), 201

@app.route("/update_contato/<int:user_id>", methods=["PATCH"])
def update_contato(user_id):
    contato = Contato.query.get(user_id)
    
    if not contato:
        return jsonify({"message": "Usuário não encontrado."}), 404
    
    data = request.json
    contato.primeiro_nome = data.get("primeiroNome", contato.primeiro_nome)
    contato.ultimo_nome = data.get("ultimoNome", contato.ultimo_nome)
    contato.email = data.get("email", contato.email)
    
    db.session.commit()
    
    return jsonify({"message": "Usuário atualizado!"}), 200

@app.route("/delete_contato/<int:user_id>", methods=["DELETE"])
def delete_contato(user_id):
    contato = Contato.query.get(user_id)
    
    if not contato:
        return jsonify({"message": "Usuário não encontrado."}), 404
    
    db.session.delete(contato)
    db.session.commit()
    
    return jsonify({"message": "Usuário deletado!"}), 200

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    
    app.run(debug=True)