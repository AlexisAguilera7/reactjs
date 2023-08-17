import React, { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

/*const ItemDetailContainer = () => {
 const [loading, setLoading] = useState(false)
 const { id } = useParams()
 const [producto, setProducto] = useState({})


 useEffect(() => {
  setLoading(true)

  getItem(id)
   .then((res) => setProducto(res))
   .catch((error) => console.log(error))
   .finally(() => setLoading(false))
 }, [id])*/

const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { detalleId } = useParams();

  useEffect(() => {
    const queryDb = getFirestore();
    const queryDoc = doc(queryDb, 'productList', detalleId);
    getDoc(queryDoc)
      .then(res => setData({ id: res.id, ...res.data() }))
  }, [detalleId])




  return (
    < div >
      <ItemDetail data={data} />

    </div >
  )
}





export default ItemDetailContainer