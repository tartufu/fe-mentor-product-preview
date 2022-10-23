import React from "react";

export default function ProductDetails({ productDetails }) {
  return (
    <div className="column product-details">
      <p> {productDetails.type.toUpperCase()}</p>
      <p className="product-details-name"> {productDetails.name} </p>
      <p>{productDetails.description}</p>
      <p>
        <span className="product-details-discounted">
          ${productDetails.retailPrice - productDetails.discount}
        </span>
        <span className="product-details-retail">
          ${productDetails.retailPrice}
        </span>
      </p>

      <div className="buttons product-details-button">
        <button
          onClick={() => productDetails.addToCard()}
          className="button is-primary"
          style={{ backgroundColor: "hsl(158, 36%, 37%)" }}
        >
          <span className="icon" style={{ paddingRight: "1.5rem" }}>
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          </span>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
