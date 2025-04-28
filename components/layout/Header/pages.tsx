"use client"
import Image from "next/image";
import header from "../Header/header.module.scss"
import React, { useState } from "react";
import Link from "next/link";

const Header = ()=>{
    const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
      setIsToggled(!isToggled);
    };

    const ref = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          setIsToggled(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
    , [ref]);

    return (
        <>
        <header className={header.header}>
        <div className={header.containerbox}>
        <div className={header.row}>
                <div className={header.logo}>
                    <Link href="/">
                    <Image src="/Logo.png" width={220}  height={62} alt="Logo" priority />
                    </Link>
                </div>
                <div className={header.nav}>

<div className={header.mobilebar}>
  <Image src={"./hamburger.svg"} alt={"bar"} width={40}  height={40}  onClick={handleToggle} />
</div>



                <ul className={`${header.mobile}` } 
                style={{
                  height:isToggled ? "auto" : "0px",
                  overflow:isToggled ? "auto" : "hidden",
                  background:isToggled ? "#0000000f" : "null",
                }}
                ref={ref}
                
                >
                    {newMenuItems.map((item, index) => (
          <li
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={header.menuItem}
          >
            <Link href={item?.herf}>
              {item?.name}
              <span className={header.arrow}>

                {hoveredIndex === index ?      <Image src="/svg-icons/arrow-down-s-line.svg" width={25}  height={25} alt="Logo" />                
 :       <Image src="/svg-icons/arrow-right-s-line.svg" width={25}  height={25} alt="Logo" />             
}
              </span>
            </Link>
          </li>
        ))}
        <li><a href="/contact-us">Contact sales</a></li>
        <li> <a href="/contact-us">get quote</a></li>
                    </ul>


                    <ul className={header.desktop}>
                    {newMenuItems.map((item, index) => (
          <li
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={header.menuItem}
          >
            <a href={item?.herf}>
              {item?.name}
              <span className={header.arrow}>

                {hoveredIndex === index ?      <Image src="/svg-icons/arrow-down-s-line.svg" width={25}  height={25} alt="Logo" />                
 :       <Image src="/svg-icons/arrow-right-s-line.svg" width={25}  height={25} alt="Logo" />             
}
              </span>
            </a>
          </li>
        ))}
                    </ul>
                </div>
                <div className={header.getinquery}>
                    <Link href="/contact-us" className={header.sales}>Contact Us</Link>
                    <a href="#contact" className={header.getinquery}>get quote</a>
                </div>
                </div>
            </div>
        </header>
        </>
    )
}
export default Header;

const menuItems = [
  "About us",
   "Products", 
   "Services", 
   "Blogs"
  ];



  const newMenuItems = [
    {
      name: "Company",
      herf: "/about-us",
    },
    {
      name: "Services",
      herf: "#services",
    },
    {
      name: "Insights",
      herf: "#product",
    },
    // {
    //   name: "Blogs",
    //   herf: "#blogs",
    // },
  ]
