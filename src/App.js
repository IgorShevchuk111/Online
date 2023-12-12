import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Main from "./components/MainComponents/Main";
import Header from "./components/HeaderComponents/Header";

export const SelectedMenuItemContexte = React.createContext();
function App() {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const updateSelectedMenuItem = (item) => {
    setSelectedMenuItem(item);
  };
  return (
    <SelectedMenuItemContexte.Provider value={selectedMenuItem}>
      <div className="App">
        <Header updateSelectedMenuItem={updateSelectedMenuItem} />
        <Main value={selectedMenuItem} />
        <Footer />
      </div>
    </SelectedMenuItemContexte.Provider>
  );
}

export default App;
