import NavBar from "./components/HeaderComponents/NavBar/NavBar";
import Menu from "./components/HeaderComponents/MenuComponents/Menu";
import Footer from "./components/Footer/Footer"
import "./App.css";


function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
        <Menu />
      </header>
      <main className="main">
      </main>
      <footer >
        <Footer />
      </footer>
    
    </div>
  );
}

export default App;
