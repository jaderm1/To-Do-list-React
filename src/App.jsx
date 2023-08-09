import { useState } from 'react'
import './App.css'
import CardAdicionar from './components/CardAdicionar'
import ListItem from './components/ListItem'

function App() {
  const [listaTarefas, setListaTarefas] = useState([
    
  ])

  const adicionarTarefa = (texto)=>{
    if(texto == ""){
      alert("Adicione um valor para a nova tarefa")
      return
    }

    const novaTarefa = {id:listaTarefas.length+1, textoTarefa:texto, finalizado:false}
    setListaTarefas([...listaTarefas ,novaTarefa])
  }
  const removerTarefa = (id)=>{
    const novaLista = listaTarefas.filter(item=>item.id 
      != id)
    setListaTarefas(novaLista)
  }

  return (
    <>
    <CardAdicionar adicionarTarefa={adicionarTarefa}/>
    <div>{listaTarefas.map(tarefa=>
      (<ListItem key={tarefa.id} textoTarefa={tarefa.textoTarefa} finalizado={tarefa.finalizado} id={tarefa.id}
      removerTarefa={removerTarefa}/>
      ))}</div>


 </>
  )
}

export default App
