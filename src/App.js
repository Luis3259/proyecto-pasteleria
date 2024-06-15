import Nav from "./components/BarraNav";
import Pie from "./components/Pie";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Inicio from "./pages/ProductoInicio";
import Tienda from "./pages/Tienda";
import Mini from "./pages/MiniPasteleria";
import Evento from "./pages/Eventos";
import Regalos from "./pages/Regalos";
import Recetas from "./pages/Recetas";
import Ver from "./components/Ver";
function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/mini-pasteleria" element={<Mini/>}/>
        <Route path="/evento" element={<Evento/>}/>
        <Route path="/regalos" element={<Regalos/>}/>
        <Route path="/recetas" element={<Recetas/>}/>
        <Route path="/tienda" element={<Tienda/>}/>
        <Route path="/ver" element={<Ver/>}/>
      </Routes>
      <Pie/>
    </BrowserRouter>
  );
}

export default App;
