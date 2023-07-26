import React, { useEffect, useState } from "react";
import { getItem } from "../mock/data";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
 const [loading, setLoading] = useState(false)
 const { id } = useParams()
 const [producto, setProducto] = useState({})


 useEffect(() => {
  setLoading(true)

  getItem(id)
   .then((res) => setProducto(res))
   .catch((error) => console.log(error))
   .finally(() => setLoading(false))
 }, [id])
 return (
  < div >
   {loading ? <p>Cargando...</p> : <ItemDetail producto={producto} />}

  </div >
 )
}





export default ItemDetailContainer