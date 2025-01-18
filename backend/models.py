from config import db

class Contato(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    primeiro_nome = db.Column(db.String(80), unique=False, nullable=False)
    ultimo_nome = db.Column(db.String(80), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    
    def to_json(self):
        return {
            "id": self.id,
            "primeiroNome": self.primeiro_nome,
            "ultimoNome": self.ultimo_nome,
            "email": self.email
            
        }