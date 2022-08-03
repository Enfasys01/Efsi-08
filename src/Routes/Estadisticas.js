import Personas from "../Components/Personas"


export default function Estadisticas(){
    
    return(
        <>
        <h1>Estadisticas</h1>
        <div className="grid sm:grid-cols-4 lg:grid-cols-8">
            {Personas.filter(e=>e.edad>35).map(e=>{return (
                <div className="m-1 p-2 bg-zinc-200 rounded-md">
                <ul>
                    <li className="font-semibold hover:underline">{e.nombre} {e.apellido}</li>
                    <li>Edad: {e.edad}</li>
                </ul>
            </div>
            )})}
        </div>
        <p>
        </p>
        </>
    )
}