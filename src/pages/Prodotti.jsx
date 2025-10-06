//todo Importo lo stato e l'effetto
import { useState, useEffect } from "react";

import CardComponent from "../components/CardComponent";

const Prodotti = () => {
  const [product, setProduct] = useState([]);

  function fetchProduct() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return data;
      })
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <div className="containerProdotti">
        <div className="product"> 
            {product?.map((prod) => (
              <CardComponent key={prod.id} product={prod} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Prodotti;
