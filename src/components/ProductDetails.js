import React from 'react';

function ProductDetails(props) {
  const {
    title,
    description,
    price,
    created_at,
    seller = {}
  } = props;
  const { full_name } = seller;
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <p>By {full_name}</p>
      <p>{created_at}</p>
    </div>
  );
}

export default ProductDetails;
