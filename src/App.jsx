import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ChiSiamo from "./pages/ChiSiamo";
import Prodotti from "./pages/Prodotti";

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/chi siamo" element={<ChiSiamo />} />
                <Route path="/prodotti" element={<Prodotti />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
