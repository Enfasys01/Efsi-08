import { Link } from "react-router-dom"
import Personas from "../Components/Personas"


export default function Index(){
    return(
        <>
        <h1>Index </h1>
        <div>
        {Personas.map(e=>{return(
            <div className="m-1 p-2 bg-zinc-200 rounded-md">
                <ul>
                    <li>{e.nombre}</li>
                    <li><Link to={'/persona/'+e.id}>ver más</Link></li>
                </ul>
            </div>
            
        )})}
        </div>
        </>
    )
}