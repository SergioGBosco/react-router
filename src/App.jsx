import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./assets/pages/HomePage";
import InfoPage from "./assets/pages/InfoPage";
import ProdottiPage from "./assets/pages/ProdottiPage";
import NavBar from "./assets/components/NavBar";
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={HomePage}>=</Route>
        <Route path="/info" element={InfoPage}>=</Route>
        <Route path="/prodotti" element={ProdottiPage}>=</Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App
