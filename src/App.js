import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Main from "./components/MainComponents/Main";
import Header from "./components/HeaderComponents/Header";

export const AppContext = React.createContext();
function App() {
  const [showItem, setShowItem] = useState(false);
  const toggleShowItem = () => {
    setShowItem(!showItem);
  };
  return (
    <div className="App">
      <AppContext.Provider value={{ showItem, toggleShowItem }}>
        <Header />
        <Main />
        <Footer />
      </AppContext.Provider>
    </div>
  );
}

export default App;
