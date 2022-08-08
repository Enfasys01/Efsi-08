import Personas from "../Components/Personas"
import { useState } from "react";
import Card from "../Components/Card";

export default function Estadisticas(){
    const [Lista, setLista] = useState([...Personas]);
    function handleChange(event){
        setLista(Personas.filter(e=>parseInt(e.edad,10)>=parseInt(event.target.value)))
        if(event.target.value===''){
            setLista([...Personas])
        }
    }

    function handleMayor(){
        //encontrar la edad mas alta
        let edadMayor = -1;
        Personas.map((e)=>{
            if(e.edad>edadMayor){
                edadMayor=e.edad;
            }
            return true
        })
        setLista(Personas.filter(e=>e.edad===edadMayor))
    }

    function handleMenor(){
        //encontrar la edad mas alta
        let edadMenor = 999;
        Personas.map((e)=>{
            if(e.edad<edadMenor){
                edadMenor=e.edad;
            }
            return true 
        })
        setLista(Personas.filter(e=>e.edad===edadMenor))
    }

    function handleTodos(){
        setLista([...Personas])
    }

    return(
        <>
        <h1>Estadisticas</h1>
        <p>Mostrar mayores de: <input type='number' id="edad" className='border-slate-800 border-2 rounded-lg px-2' onChange={handleChange}></input></p>
        <div className="flex space-x-2 my-2">
            <h1 className="bg-orange-600 text-white font-semibold p-2 rounded-lg cursor-pointer hover:bg-orange-700 duration-200" onClick={handleMayor}>Mostrar mayor</h1>
            <h1 className="bg-orange-600 text-white font-semibold p-2 rounded-lg cursor-pointer hover:bg-orange-700 duration-200" onClick={handleMenor}>Mostrar menor</h1>
            <h1 className="bg-orange-600 text-white font-semibold p-2 rounded-lg cursor-pointer hover:bg-orange-700 duration-200" onClick={handleTodos}>Mostrar todos</h1>
        </div>
        <p>{Lista.length} {Lista.length>1?'resultados':'resultado'}</p>
        <div className="grid sm:grid-cols-4 lg:grid-cols-8">
            {Lista.map((e, index)=>{return (
                <Card persona={e} key={index}/>
            )})}
        </div>
        <p>
        </p>
        </>
    )
}