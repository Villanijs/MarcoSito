import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import gsap from "gsap";

const Navbar = () => {
  const location = useLocation();
  const activePath = location.pathname;

  const [toggle, setToggle] = useState(false);
  const overlayRef = useRef(null);
  const subNavRef = useRef(null);
  const menuItemRefs = useRef([]);
  const underlineRefs = useRef([]);

  const tl = useRef(gsap.timeline({ paused: true }));

  useEffect(() => {
    gsap.set(menuItemRefs.current, { y: 200, opacity: 0 });

    tl.current
      .to(overlayRef.current, {
        duration: 1,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        ease: "power4.inOut",
      })
      .to(
        menuItemRefs.current,
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          ease: "power4.out",
        },
        "-=0.8"
      )
      .to(
        subNavRef.current,
        {
          bottom: "10%",
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.6"
      );
  }, []);

  useEffect(() => {
    toggle ? tl.current.play() : tl.current.reverse();
  }, [toggle]);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar relative z-50">
      <h1 className="font-adobe2 font-semibold ss:text-[26px] text-[22px] text-gray-400" style={{ color: "#ffeb3b" }}>
        Ing. Marco Villani
      </h1>

      {/* DESKTOP NAV */}
      <ul className="list-none sm:flex hidden justify-center items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-adobe font-normal cursor-pointer text-[16px] relative ${
              activePath === nav.path ? "text-white" : "text-dimWhite"
            } ${index !== navLinks.length - 1 ? "mr-10" : ""}`}
            onClick={() => setToggle(false)} // chiude menu se aperto
          >
            <Link to={nav.path} className="relative group">
              {nav.title}
              <span
                ref={(el) => (underlineRefs.current[index] = el)}
                className={`absolute left-0 bottom-[-4px] h-[2px] w-full bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ${
                  activePath === nav.path ? "scale-x-100" : ""
                }`}
              />
            </Link>
          </li>
        ))}
      </ul>

      <Link to="/contattami">
        <Button className="hidden md:flex text-customGray" white>
          Contattami
        </Button>
      </Link>

      {/* BURGER BUTTON */}
      <div className="sm:hidden flex flex-1 justify-end items-center z-50">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div
        ref={overlayRef}
        className="overlay fixed top-0 left-0 w-full h-full bg-black z-40 overflow-hidden clip-hide"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", // initial state
        }}
      >
        <div className="overlay-menu flex flex-col items-start justify-center h-full p-10 gap-6">
          {navLinks.map((nav, i) => (
            <div className="menu-item" key={nav.id}>
              <p
                ref={(el) => (menuItemRefs.current[i] = el)}
                className={`text-2xl text-white cursor-pointer ${
                  activePath === nav.path ? "font-bold" : ""
                }`}
                onClick={() => setToggle(false)}
              >
                <Link to={nav.path}>{nav.title}</Link>
              </p>
            </div>
          ))}
        </div>

        <div
          ref={subNavRef}
          className="sub-nav absolute bottom-[-20%] opacity-0 w-full text-center text-white flex justify-center gap-3"
        >
          <p><a href="#">Twitter</a></p>
          <p>·</p>
          <p><a href="#">Instagram</a></p>
          <p>·</p>
          <p><a href="#">Dribbble</a></p>
          <p>·</p>
          <p><a href="#">Behance</a></p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;