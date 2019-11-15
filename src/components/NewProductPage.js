import React from "react";

import ProductForm from "./ProductForm";
import { Product } from "../requests";

function NewProductPage(props) {
  function createProduct(params) {
    debugger;
    Product.create(params).then(product => {
      props.history.push(`/products/${product.id}`);
    });
  }
  return <ProductForm onSubmit={createProduct} />;
}

export default NewProductPage;
