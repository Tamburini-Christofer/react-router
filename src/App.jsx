import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ChiSiamo from "./pages/ChiSiamo";
import Prodotti from "./pages/Prodotti";
import DettagliProdotti from "./pages/DettagliProdotti";
import Layout from "./layout/Layout";

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/chi siamo" element={<ChiSiamo />} />
                <Route path="/prodotti" element={<Prodotti />} />
                  <Route path="/prodotti/:id" element={<DettagliProdotti />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
