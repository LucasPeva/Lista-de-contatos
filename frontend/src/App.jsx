import { useState, useEffect } from 'react'
import ListaContatos from './ListaContatos'
import './App.css'
import FormularioContatos from './FormularioContatos'

function App() {
  const [contatos, setContatos] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentContato, setCurrentContato] = useState({})

  useEffect(() => {
    fetchContatos()
  }, [])

  const fetchContatos = async () => {
    const response = await fetch("http://127.0.0.1:5000/contatos")
    const data = await response.json()
    setContatos(data.contatos)
  };

  const closeModal = () => {
    setIsModalOpen(false)
    setCurrentContato({})
  };

  const openCreateModal = () => {
    if (!isModalOpen) setIsModalOpen(true)
  };

  const openEditModal = ( contato ) => {
    if (isModalOpen) return
    setCurrentContato(contato)
    setIsModalOpen(true)
  }

  const onUpdate = () => {
    closeModal()
    fetchContatos()
  }

  return (
    <>
      <ListaContatos contatos={contatos} updateContato={openEditModal} updateCallback={onUpdate}/>
      <button onClick={openCreateModal}>Criar novo contato</button>
      {isModalOpen && <div className='modal'>
        <div className='modal-content'>
          <span className='close' onClick={closeModal}>&times;</span>
          <FormularioContatos contatoExistente={currentContato} updateCallback={onUpdate}/>
        </div>
      </div>
      }
    </>
  );
}

export default App
