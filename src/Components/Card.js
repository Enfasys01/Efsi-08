import { Link } from "react-router-dom";

export default function Card(props){
  return(
    <div className="rounded-md m-1 p-2 bg-stone-300 hover:shadow-lg shadow-stone-600 duration-200">
      <ul>
          <Link to={'/persona/'+props.persona.id}>
          <li className="font-semibold hover:underline">{props.persona.nombre} {props.persona.apellido}</li>
          </Link>
          {!props.onlyName?<li>Edad: {props.persona.edad}</li>:''}
          
      </ul>
    </div>
  )
}