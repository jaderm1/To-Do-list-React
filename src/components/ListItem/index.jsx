import { useState } from "react"

function ListItem (props){
    const [finalizado, setFinalizado]= useState(props.finalizado) 

    return(
        <div className="container">
            <input type="checkbox" checked={finalizado} />
            <h3>{props.textoTarefa}</h3>
            <button onClick={()=>setFinalizado(!finalizado)}>Finalizar</button>
        </div>
    )
}
export default ListItem