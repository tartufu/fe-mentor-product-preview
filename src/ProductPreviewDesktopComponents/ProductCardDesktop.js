import React from "react";

export default function ProductCardDesktop({ productDetails }) {
  return (
    <div className="column is-half" style={{ border: "1px solid red" }}>
      <div className="columns">
        <div className="column">123</div>
        <div className="column">
          <p> {productDetails.type}</p>
          <p> {productDetails.description}</p>
          <p> {productDetails.retailPrice}</p>
          <p> {productDetails.retailPrice - productDetails.discount} </p>
        </div>
      </div>
    </div>
  );
}
