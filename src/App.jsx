import "./App.css";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function App() {
  return (
    <>
      <div className="landing-page">
        <div className="overlay">
          <h1>Paradise Nursery</h1>

          <p>
            Welcome to Paradise Nursery, your one-stop destination for beautiful
            indoor plants. Bring nature into your home with our carefully
            selected collection of healthy and vibrant houseplants.
          </p>

          <button className="start-btn">Get Started</button>
        </div>
      </div>

      <AboutUs />

      <ProductList />

      <CartItem />
    </>
  );
}

export default App;
