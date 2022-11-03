import "./App.css";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import ItemListContainer from "./containers/ItemListContainer"; 
import IconSection from "./components/IconsSection";
import UsSection from "./components/UsSection";

const App = () => {
  return (
    <>
      <NavBar />
      <IconSection />
      <UsSection />
      <ItemListContainer title="¡Bienvenidos!" subtitle="Esta es nuestra tienda online"/>
      <ItemDetailContainer />
    </>
  )
}

export default App;
