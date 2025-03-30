"use client"
import Image from "next/image";
import header from "../Header/header.module.scss"
import React from "react";

const Header = ()=>{
    const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

    return (
        <>
        <header className={header.header}>
        <div className={header.containerbox}>
        <div className={header.row}>
                <div className={header.logo}>
                    {/* <Image src="/Logo.png" width={280}  height={64} alt="Logo" /> */}
                </div>
                <div className={header.nav}>
                    <ul>
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
                    <a href="#" className={header.sales}>Contact sales</a>
                    <a href="#" className={header.getinquery}>get quote</a>
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
      name: "About us",
      herf: "#about",
    },
    {
      name: "Products",
      herf: "#product",
    },
    {
      name: "Services",
      herf: "#services",
    },
    {
      name: "Blogs",
      herf: "#blogs",
    },
  ]
