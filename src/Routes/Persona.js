import { useParams } from "react-router-dom"
import Personas from "../Components/Personas"

export default function Persona(){
    let params = useParams();
    return(
        <>
        <h1>Persona</h1>
        <p>
            {Personas[params.id].nombre}
        </p>
        </>
    )
}