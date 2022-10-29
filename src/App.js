import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer"; 

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer title="¡Bienvenidos!" subtitle="Esta es nuestra tienda online"/>
    </>
  )
}

export default App;
