import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import ItemProducto from "./producto/ItemProducto";
import { obtenerListaProductos } from "../helpers/queries";
import Swal from "sweetalert2";

const Administrador = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // consulta a la API
    obtenerListaProductos().then((respuesta) => {
      if (respuesta) {
        setProductos(respuesta);
      } else {
        Swal.fire(
          "Error",
          "Intente realizar la operación en unos minutos",
          "error"
        );
      }
    });
  }, []);

  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4">Productos disponibles</h1>
        <Button className="btn btn-primary" to="/administrar/crear">
          Agregar
        </Button>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Cod</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          <ItemProducto />
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
