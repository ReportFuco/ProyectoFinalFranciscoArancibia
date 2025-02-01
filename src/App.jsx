import NavBar from "./components/NatBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda online!" />
    </div>
  );
}

export default App;
