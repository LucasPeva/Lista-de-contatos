# Aplicação web para lista de contatos

### Backend:
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)

### Frontend:
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)


Aplicação em web para gerir contatos, com persistência de dados através de uma database em SQLite.

## Requisitos

- Python 3.12.4
- Yarn 

## Como testar a aplicação

### Inicie o backend:

#### Windows

```shell
cd backend
pip install -r requirements.txt # Instala as dependencias
python main.py # Inicia o servidor de dev
```

#### Linux/MacOS

```shell
cd backend
pip3 install -r requirements.txt # Instala as dependencias
python3 main.py # Inicia o servidor de dev
```

### Depois, inicie o frontend:

#### Windows/Linux/MacOS

```shell
cd frontend
yarn # Instala as dependencias
yarn dev # Inicia o servidor de dev
```

### Conecte ao servidor

Acesse [localhost:5173](http://localhost:5173/) no seu navegador e voce irá ver a lista de contatos inicial (vazia)

![Lista em branco](https://raw.githubusercontent.com/LucasPeva/Lista-de-contatos/refs/heads/master/github/embranco.png "Lista vazia")