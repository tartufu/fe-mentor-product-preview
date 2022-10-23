import "./App.css";
import "bulma/css/bulma.css";

import { useMediaQuery } from "react-responsive";

import ProductCardDesktop from "./ProductPreviewDesktopComponents/ProductCardDesktop";
import ProductCardMobile from "./ProductPreviewMobileComponents/ProductCardMobile";

const App = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const productDetails = {
    type: "perfume",
    name: "Gabrielle Essence Eau De Parfum",
    description:
      "A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the house of CHANEL.",
    retailPrice: 169.99,
    discount: 20,
    addToCard() {
      alert("PING");
    },
  };

  return (
    <div style={{ backgroundColor: "hsl(30, 38%, 92%)", height: "100vh" }}>
      <div className="container is-fluid">
        <div
          className="columns is-vcentered is-centered"
          style={{ height: "100vh" }}
        >
          {isDesktopOrLaptop && (
            <ProductCardDesktop productDetails={productDetails} />
          )}
          {isTabletOrMobile && (
            <ProductCardMobile productDetails={productDetails} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
