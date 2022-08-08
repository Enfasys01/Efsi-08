import { Link, Outlet } from "react-router-dom";

export default function Layout(){
    return(
        <>
        <nav className="bg-stone-800 text-orange-50 flex justify-end font-semibold px-4">
            <Link to='/'><h1 className="hover:bg-orange-50 hover:text-stone-800 p-2 duration-200">Home</h1></Link>
            <Link to='/estadisticas'><h1 className="hover:bg-orange-50 hover:text-stone-800 p-2 duration-200">Estadisticas</h1></Link>
            <Link to='/contacto'><h1 className="hover:bg-orange-50 hover:text-stone-800 p-2 duration-200">Contacto</h1></Link>
        </nav>
        <div className="container mx-auto">
            <Outlet/>
        </div>
        </>
    );
}