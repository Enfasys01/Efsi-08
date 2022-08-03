import { useParams } from "react-router-dom"
import Personas from "../Components/Personas"

export default function Persona(){
    let params = useParams();
    let persona = Personas.filter(e=>e.id===params.id)[0]
    return(
        <>
        <h1>Persona</h1>
        <ul>
            <li>Nombre completo: {persona.nombre} {persona.apellido}</li>
            <li>Email: {persona.email}</li>
            <li>Edad: {persona.edad}</li>
        </ul>
        </>
    )
}