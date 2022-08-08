import { useParams } from "react-router-dom"
import Personas from "../Components/Personas"

export default function Persona(){
    let params = useParams();
    let persona = Personas.filter(e=>e.id===params.id)[0]
    return(
        <>
        <h1 className="font-semibold text-3xl my-2">Persona</h1>
        <ul className="text-xl">
            <li>Nombre completo: <span className="font-semibold">{persona.nombre} {persona.apellido}</span></li>
            <li>Email: <span className="font-semibold">{persona.email}</span></li>
            <li>Edad: <span className="font-semibold">{persona.edad}</span></li>
        </ul>
        </>
    )
}