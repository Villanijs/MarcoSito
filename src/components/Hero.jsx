import styles from "../style";
import { discount, robot2, contract} from "../assets";
import Button from "./Button";


const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}   `}>
      
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px]  bg-discount-gradient rounded-[10px] mb-4  font-medieval 
">
          <img src={discount} alt="discount" className="w-[33px] h-[48px]" />
          <p className={`${styles.paragraph} ml-2 ss:text-[30px] `}>
            <span className="text-customGreen font-adobe">Tecnico</span>{" "}
            <span className="text-customRed font-adobe">Pratiche Energetiche</span> 
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-semibold ss:text-[56x] text-[42px] text-white ss:leading-[80.8px] leading-[65px] font-adobe2">
            Esecuzione APE<br className="sm:block hidden" />{" "}
            <span className="text-gradient font-adobe2">e Relazioni Energetiche</span>{" "}
          </h1>
          
        </div>

        <h1 className="font-adobe2 font-semibold ss:text-[60px] text-[46px] text-white ss:leading-[80.8px] leading-[65px] w-full">
          ex legge 10.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elaborati tramite software certificato e riconosciuto dal CTI (Comitato Tecnico Italiano).
        </p>
        <div className="w-full flex  mt-4 md:hidden">
  <Button className="text-customGray" href="#login" white>
    Contattami
  </Button>
</div>

      </div>
      

      <div className={`flex-1 flex justify-start md:justify-center  md:my-0 mt-8 relative`}>
        <img
  src={robot2}
  alt="billing"
  className="robot-img "
/>


        {/* gradient start */}
        
        {/* gradient end */}
      </div>

      

      {/* <div className="absolute bottom-64 left-1/2  z-50 ">
    <img src={contract} alt="contract" className="w-[190px] h-[205px] " />
      </div> */}
    </section>
  );
};

export default Hero;
