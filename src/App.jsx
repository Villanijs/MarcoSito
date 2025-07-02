import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./style";
import { Footer, Navbar, Hero } from "./components";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Marquee from "./components/Marquee";
import "./App.css";

// Import delle nuove pagine
import ChiSono from "./pages/ChiSono";
import Servizi from "./pages/Servizi";
import Contattami from "./pages/Contattami";

const App = () => (
  <Router>
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/chi-sono" element={<ChiSono />} />
            <Route path="/servizi" element={<Servizi />} />
            <Route path="/contattami" element={<Contattami />} />
          </Routes>
        </div>
      </div>

      <Marquee />

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
          <ButtonGradient />
        </div>
      </div>
    </div>
  </Router>
);

export default App;
