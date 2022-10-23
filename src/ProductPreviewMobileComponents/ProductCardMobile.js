import React from "react";

import mobileImage from "../resources/image-product-mobile.jpg";

import ProductDetails from "../commonComponents/ProductDetails";

export default function ProductCardMobile({ productDetails }) {
  return (
    <div className="product-card-mobile">
      <div
        style={{
          backgroundImage: `url(${mobileImage})`,
          backgroundSize: "cover",
          width: "100%",
          height: "0",
          paddingTop: "66.64%",
          borderRadius: "16px 16px 0 0 ",
        }}
      ></div>
      <ProductDetails productDetails={productDetails} />
    </div>
  );
}
