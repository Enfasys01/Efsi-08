import { Link } from "react-router-dom"
import Personas from "../Components/Personas"


export default function Index(){
    return(
        <>
        <h1>Index </h1>
        <div className="grid sm:grid-cols-4 lg:grid-cols-8">
        {Personas.map(e=>{return(
            <div className="m-1 p-2 bg-zinc-200 rounded-md">
                <ul>
                    <li className="font-semibold hover:underline"><Link to={'/persona/'+e.id}>{e.nombre} {e.apellido}</Link> </li>
                </ul>
            </div>
            
        )})}
        </div>
        </>
    )
}