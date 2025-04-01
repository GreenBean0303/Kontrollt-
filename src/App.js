import Header from "./components/Header";
import Meals from "./components/Meals";
import "./index.css"

const App = () => {
  return (
    <>
      <Header>
        <h1>Food Order App</h1>
      </Header>

      <main>
        <Meals />
      </main>
    </>
  );
};

export default App;
