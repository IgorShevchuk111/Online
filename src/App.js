import React from "react";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Main from "./components/MainComponents/Main";
import Header from "./components/HeaderComponents/Header";

export const AppContext = React.createContext();
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
