import styles from "./style";
import { Footer, Navbar, Hero } from "./components";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Marquee from "./components/Marquee"; // 👈 Import corretto
import "./App.css"; // o "./index.css" se lì hai le classi


const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
        
      </div>
      
    </div>
       <Marquee /> {/* 👈 Usa qui il componente */}
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
        <ButtonGradient />
      </div>
    </div>
  </div>
);

export default App;
