import NavBarComponent from './components/NavBarComponents/NavBarComponent';
import ItemListContainerComponent from './components/ItemListContainerComponent/ItemListContainerComponent';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return (
    <>
    <NavBarComponent/>
    <ItemListContainerComponent greeting="Bienvenido a Lunatic"/>
    </>
  )
}

export default App
