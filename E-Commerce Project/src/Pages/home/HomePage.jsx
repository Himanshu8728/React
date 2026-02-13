import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../../components/Header";
import { ProductsGrid } from "./ProductsGrid";
import "./HomePage.css";

export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const getHomeData = async () =>{
    const response = await axios.get("/api/products")
      setProducts(response.data);
    }

    getHomeData();
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
