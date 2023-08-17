import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'productList');
    if (categoryId) {
      const queryFilter = query(queryCollection, where('category', '==', categoryId))
      getDocs(queryFilter)
        .then(res => setData(res.docs.map(productList => ({ id: productList.id, ...productList.data() }))))
    } else {
      getDocs(queryCollection)
        .then(res => setData(res.docs.map(productList => ({ id: productList.id, ...productList.data() }))))
    }

  }, [categoryId])



  return (
    <div>
      <div className="item-list-container">
        <h2>{greeting}<span>{categoryId && categoryId}</span></h2>
        <ItemList productos={data} />
      </div>
    </div>
  );
};

export default ItemListContainer;
