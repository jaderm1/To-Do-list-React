import { useState } from 'react'
import './App.css'
import CardAdicionar from './components/CardAdicionar'

function App() {
  const [listaTarefas, setListaTarefas] = useState([
    {id:1,textoTarefa:"tarefa 1 ",finalizado:false}
  ])

  const adicionarTarefa = (texto)=>{
    if(texto == ""){
      alert("Adicione um valor para a nova tarefa")
      return
    }

    const novaTarefa = {id:listaTarefas.length+1, textoTarefa:texto, finalizado:false}
    setListaTarefas([...listaTarefas ,novaTarefa])
  }

  return (
    <>
    <CardAdicionar adicionarTarefa={adicionarTarefa}/>
    <div>{listaTarefas.map(tarefa=>(<span>{tarefa.textoTarefa}- id: {tarefa.id} </span>))}</div>


 </>
  )
}

export default App
