import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Jogos from "./Jogos";
import Estatisticas from "./Estatisticas";
import Contato from "./Contato";
import ChatBoot from "./ChatBoot";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatBoot />} />
        <Route path="/jogos" element={<Jogos />} />
        <Route path="/estatisticas" element={<Estatisticas />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
