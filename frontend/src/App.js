import "./App.css";
import LandingPage from "./pages/landingPage";
import CreatePage from "./pages/createPage";
import MusicsPage from "./pages/musicsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/musics" element={<MusicsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
