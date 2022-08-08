export default function Contacto(){
    return(
        <>
            <h1 className="font-semibold text-3xl my-2">Contacto</h1>
            <form className="text-center">
                <ul>
                    <li>
                        <label for='nombre'>Nombre: </label><br/>
                        <input type='text' id="nombre" className="border-2 border-stone-800"></input>
                    </li>
                    <li>
                        <label for='apellido'>Apellido: </label><br/>
                        <input type='text' id="apellido" className="border-2 border-stone-800"></input>
                    </li>
                    <li>
                        <label form='mail'>E-mail: </label><br/>
                        <input type='text' id="mail" className="border-2 border-stone-800"></input>
                    </li>
                    <li>
                        <label for='edad'>Edad: </label><br/>
                        <input type='number' id="edad" className="border-2 border-stone-800"></input>
                    </li>
                    <li>
                        <button className="text-white bg-orange-600 px-2 py-1 mt-2 font-bold rounded-lg hover:bg-orange-800 duration-200">Enviar</button>
                    </li>
                </ul>
            </form>
        </>
    )
}