import Card from "../Components/Card"
import Personas from "../Components/Personas"


export default function Index(){
    return(
        <>
        <h1 className="font-semibold text-3xl my-2">Home </h1>
        <div className="grid sm:grid-cols-4 lg:grid-cols-8">
        {Personas.map((e, index)=>{return(
            <Card persona={e} key={index} onlyName/>
        )})}
        </div>
        </>
    )
}