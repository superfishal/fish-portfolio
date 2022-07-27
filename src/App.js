import NavBar from "./components/Nav";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe/index";
import Projects from "./pages/Projects/index";
import Resume from "./pages/Resume/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="appFlex">
        <NavBar />
        <div className="main-stuff">
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
