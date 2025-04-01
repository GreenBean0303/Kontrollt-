import Header from "./components/Header";
import Meals from "./components/Meals";
import "./index.css"
import { CartContextProvider } from "./store/CartContext";

const App = () => {
  return (
    <CartContextProvider>
      <Header>
        <h1>Food Order App</h1>
      </Header>
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
};

export default App;

