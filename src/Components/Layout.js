import { Link, Outlet } from "react-router-dom";

export default function Layout(){
    return(
        <>
        <nav className="bg-zinc-500 flex justify-end space-x-2">
            <Link to='/'>Home</Link>
            <Link to='/persona'>Persona</Link>
            <Link to='/estadisticas'>Estadisticas</Link>
            <Link to='/contacto'>Contacto</Link>
        </nav>
        <Outlet/>
        </>
    );
}