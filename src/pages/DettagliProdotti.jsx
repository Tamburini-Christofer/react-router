import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const DettagliProdotti = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Prodotto non trovato");
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((err) => {
        console.error(err);
        navigate("/prodotti");
      });
  }, [id, navigate]);

  if (!product) {
    return <p className="loading">Caricamento in corso...</p>;
  }

  return (
    <div className="containerProdottiDesc">
      <div className="ContainerProdottiCardDesc">
        <div>
          <img
            className="dettagli-img"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="containerDettagli">
          <h2>{product.title}</h2>
          <p className="descrizione">{product.description}</p>
          <p>
            <strong>Categoria:</strong> {product.category}
          </p>
          <p>
            <strong>Prezzo:</strong> ${product.price}
          </p>
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Torna indietro
          </button>
        </div>
      </div>
    </div>
  );
};

export default DettagliProdotti;
