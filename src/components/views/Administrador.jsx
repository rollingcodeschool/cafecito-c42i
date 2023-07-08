import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import ItemProducto from "./producto/ItemProducto";
import { obtenerListaProductos } from "../helpers/queries";
import Swal from "sweetalert2";


const Administrador = () => {
  const [productos, SetProductos] = useState([]);

  useEffect(() => {
    //consulta a la api
    obtenerListaProductos().then((respuesta) => {
      if (respuesta) {
        SetProductos(respuesta);
      } else {
        Swal.fire(
          "Error",
          "Intente realizar la operacion e unos minutos",
          "error"
        );
      }
    });
  }, []);

  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Productos disponibles</h1>
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
          <ItemProducto></ItemProducto>
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
