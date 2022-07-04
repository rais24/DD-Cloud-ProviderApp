import React,  { usestate } from 'react'
import Modal from 'react-modal'
import Home from './Components/Modal';
import './App.css';



function Modal(){
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div className='App'>
        <button onClick={() => setModalIsOpen(true)}>Open Model</button>
    <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
      <h2>Modal title</h2>
      <p>Model body</p>
      <div>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </div>
    </Modal>
        </div>
    )
}