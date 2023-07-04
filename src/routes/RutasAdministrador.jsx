import { Routes, Route } from "react-router-dom";
import CrearProducto from "../components/views/producto/CrearProducto";
import EditarProducto from "../components/views/producto/EditarProducto";
import Administrador from "../components/views/Administrador";

const RutasAdministrador = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Administrador></Administrador>}></Route>
        <Route exact path="/crear-producto" element={<CrearProducto />} />
        <Route
          exact
          path="/editar-producto/:id"
          element={<EditarProducto></EditarProducto>}
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdministrador;
