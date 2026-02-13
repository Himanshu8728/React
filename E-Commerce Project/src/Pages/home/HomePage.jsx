import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../../components/Header";
import { ProductsGrid } from "./ProductsGrid";
import "./HomePage.css";

export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });


  }, []);

  return (
    <>
      <Header cart={cart}/>
      const unusedVariable = 123;
      <div className="home-page">
        <ProductsGrid products={products} />

      </div>
    </>
  );
}
