import React from "react";
import desktopImage from "../resources/image-product-desktop.jpg";

import ProductDetails from "../commonComponents/ProductDetails";

export default function ProductCardDesktop({ productDetails }) {
  return (
    <div
      className="column is-half"
      style={{
        borderRadius: "16px",
        maxWidth: "500px",
      }}
    >
      <div className="columns">
        <div
          className="column img-background"
          style={{
            backgroundImage: `url(${desktopImage})`,
            backgroundSize: "cover",
            borderRadius: "16px 0 0 16px",
          }}
        ></div>
        <ProductDetails productDetails={productDetails} />
      </div>
    </div>
  );
}
