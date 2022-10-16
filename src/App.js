import "./App.css";
import "bulma/css/bulma.css";

import { useMediaQuery } from "react-responsive";

import ProductCardDesktop from "./ProductPreviewDesktopComponents/ProductCardDesktop";

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
  };

  return (
    <div>
      <div className="container is-fluid" style={{ border: "1px solid red" }}>
        <div
          className="columns is-vcentered is-centered"
          style={{
            border: "1px solid red",
            height: "100vh",
          }}
        >
          {isDesktopOrLaptop && (
            <ProductCardDesktop productDetails={productDetails} />
          )}
          {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
        </div>
      </div>
    </div>
  );
};

export default App;
