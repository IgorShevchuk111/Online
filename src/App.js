import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Main from "./components/MainComponents/Main";
import Header from "./components/HeaderComponents/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const SelectedMenuItemContexte = React.createContext();
function App() {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const updateSelectedMenuItem = (item) => {
    setSelectedMenuItem(item);
  };
  return (
    <SelectedMenuItemContexte.Provider value={selectedMenuItem}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={
              <div className="App">
                <Header updateSelectedMenuItem={updateSelectedMenuItem} />
                <Main value={selectedMenuItem} />
                <Footer />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </SelectedMenuItemContexte.Provider>
  );
}

export default App;
