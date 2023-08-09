import { useState } from "react"

function CardAdicionar (){
    const[textoTarefa,setTextoTarefa] = useState("")
    return(
        <>
            <div>
                <input type="text" value={textoTarefa} onChange={(event)=>setTextoTarefa(event.target.value)} placeholder="Digite sua tarefa" />
                <button onClick={()=>{}}>Adicionar</button>
            </div>
        </>
    )
}
export default CardAdicionar