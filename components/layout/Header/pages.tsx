"use client"
import Image from "next/image";
import header from "../Header/header.module.scss"
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = ()=>{
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState<number | null>(null);

const toggleMobileSubmenu = (index: number) => {
  setMobileExpandedIndex(prev => (prev === index ? null : index));
};
    const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
      setIsToggled(!isToggled);
    };

    const ref = React.useRef<any>(null)
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current?.contains(event.target as Node)) {
          setIsToggled(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
    , [ref]);
    const pathname = usePathname();
    if (pathname.startsWith("/admin")) return null;

    React.useEffect(() => {
  setIsToggled(false);
  setMobileExpandedIndex(null);  
}, [pathname]);

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



                <ul className={header.mobile} 
                style={{
                  height:isToggled ? "auto" : "0px",
                  overflow:isToggled ? "auto" : "hidden",
                  background:isToggled ? "#0000000f" : "null",
                }}
                ref={ref}>
  {newMenuItems.map((item, index) => (
    <li key={index} className={header.menuItemMobile}>
      <div onClick={() => toggleMobileSubmenu(index)} className={header.mobileParent}>
        <Link href={item.herf}>
          {item.name}
        </Link>
    
        {item.subItems && (
          <span className={header.arrow}>
            <Image
              src={
                mobileExpandedIndex === index
                  ? "/svg-icons/arrow-down-s-line.svg"
                  : "/svg-icons/arrow-right-s-line.svg"
              }
              width={20}
              height={20}
              alt="arrow"
            />
          </span>
        )}
      </div>
      {item.subItems && mobileExpandedIndex === index && (
        <ul className={header.mobileSubDropdown}>
          {item.subItems.map((subItem, subIndex) => (
            <li key={subIndex}>
              <Link href={subItem.href}>{subItem.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  ))}
  <li>
    <div  className={header.mobileParent}>
      <Link href="/contact-us">Contact Sales</Link></div></li>
  <li>
    <div className={header.mobileParent}>
      <Link href="/contact-us">Get Quote</Link></div></li>
</ul>



                    <ul className={header.desktop}>
                    {newMenuItems.map((item, index) => (
  <li
    key={index}
    onMouseEnter={() => setHoveredIndex(index)}
    onMouseLeave={() => setHoveredIndex(null)}
    className={header.menuItem}
    style={{ position: "relative" }}
  >
    <Link href={item?.herf}>
      {item?.name}
      <span className={header.arrow}>
        {hoveredIndex === index ? (
          <Image src="/svg-icons/arrow-down-s-line.svg" width={25} height={25} alt="Arrow" />
        ) : (
          <Image src="/svg-icons/arrow-right-s-line.svg" width={25} height={25} alt="Arrow" />
        )}
      </span>
    </Link>

    {/* Dropdown menu */}
    {hoveredIndex === index && item.subItems && (
      <ul className={header.subDropdown}>
        {item.subItems.map((subItem, subIndex) => (
          <li key={subIndex}>
            <Link href={subItem.href}>{subItem.name}</Link>
          </li>
        ))}
      </ul>
    )}
  </li>
))}

                    </ul>
                </div>
                <div className={header.getinquery}>
                    <Link href="/contact-us" className={header.sales}>Contact Us</Link>
                    <Link href="/contact-us" className={header.getinquery}>get quote</Link>
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
      subItems: [
        { name: "About Us", href: "/about-us" },
        { name: "Contact Us", href: "/contact-us" },
        { name: "Team", href: "/team" }, 
      ],
    },
    {
      name: "Services",
      herf: "#",
      subItems: [
        {name:"Salesforce App Development" , href:"/salesforce-app-development"},
        {name:"Data Migration" , href:"/data-migration"}, 
        {name:"Saleforce App Development 2" , href:"/salesforce-app-development2"},
        {name:"Saleforce Implementation Services" , href:"/salesforce-Implementation-services"},
        {name:"Managed Services" , href:"/managedservices"},

      ]
    },
    {
      name: "Insights",
      herf: "#",
      subItems: [
        { name: "Industry", href: "/Industry" },
      ],
    },
    {
      name: "Blogs",
      herf: "/blog",
    },
  ]
