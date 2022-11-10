import React from "react";
import "../style/ProductList.css";
import ProductItem from "./ProductItem";

function ProductList(props) {
  const { products, deleteProduct } = props;

  return (
    <div className="ProductList">
      {products.map((product) => {
        return (
          <ProductItem
            name={product.name}
            quantity={product.quantity}
            unit={product.unit}
            id={product.id}
            key={product.id}
            deleteProduct={(id) => deleteProduct(id)}
          />
        );
      })}
    </div>
  );
}

export default ProductList;
