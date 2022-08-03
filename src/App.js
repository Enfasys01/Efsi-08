import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Routes/Index";
import Layout from "./Components/Layout";
import './App.css';
import Persona from "./Routes/Persona";
import Error from "./Routes/Error";
import Estadisticas from "./Routes/Estadisticas";
import Contacto from "./Routes/Contacto";
import { useState } from "react";

function App() {
  const [personas, setPersonas] = useState([{id: 0,nombre:'Pedro', edad: 24},{id: 1,nombre:'Jorge', edad: 43}]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Index personas={personas}/>}/>
            <Route path="/persona/:id" element={<Persona/>}/>
            <Route path="/estadisticas" element={<Estadisticas/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
            <Route path="*" element={<Error/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
