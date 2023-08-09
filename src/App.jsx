import { useState } from 'react'
import './App.css'
import CardAdicionar from './components/CardAdicionar'

function App() {
  const [listaTarefas, setListaTarefas] = useState([
    {textoTarefa:"tarefa 1 ",finalizado:false}
  ])

  return (
    <>
    <CardAdicionar/>
    </>
  )
}

export default App
