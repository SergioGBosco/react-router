import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./assets/pages/HomePage";
import InfoPage from "./assets/pages/InfoPage";
import ProdottiPage from "./assets/pages/ProdottiPage";
import DefaultLayout from "./assets/layouts/DefaultLayout";
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={HomePage}>=</Route>
          <Route path="/info" element={InfoPage}>=</Route>
          <Route path="/prodotti" element={ProdottiPage}>=</Route>
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App
