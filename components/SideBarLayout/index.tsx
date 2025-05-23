"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../../app/styles/sidebarLayout.module.scss"

const SideBarLayout = ({ children }: any) => {
  const [isToggled, setIsToggled] = useState(false);
  const [isSidemenu, setIsSidemenu] = useState(false);

  const handleToggle = () => setIsToggled(!isToggled);
  const handleSidemenu = () => setIsSidemenu(!isSidemenu);

  return (
    <div className={styles.wrapperbox}>
      <div
        className={`${styles.sidebarlayout} ${
          isSidemenu ? styles.collapsed : styles.expanded
        }`}
      >
        <div className={styles.innerbar}>
          <div className={styles.logoimage}>
            <Image 
              src={isSidemenu ? "/logo-industry.svg" : "/Logo.png"}
              width={isSidemenu ? 70 : 200}
              height={62}
              alt="logo"
              className="object-contain"
            />
          </div>

          <div className={styles["sidebar-menu"]}>
            <ul className={styles.sidebarlist}>
              {navlist.map((item, index) => (
                <li key={index} className={styles.nav}>
                  <a href={item.query}>
                    <Image
                      src={item.SvgIcon}
                      width={20}
                      height={20}
                      alt={item.text}
                    />
                    {!isSidemenu && <span>{item.text}</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div
        className={`${styles.rightbarlayout} ${
          isSidemenu ? styles.collapsed : styles.expanded
        }`}
      >
        <div className={styles.header}>
          <div className={styles.barwithsearch}>
            <div
              className={styles.userimage}
              onClick={handleSidemenu}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
              }}
            >
              <Image
                src={"/svg-icons/arrow-right-s-line.svg"}
                width={25}
                height={25}
                alt="bar"
              />
            </div>
            <div className={styles.searchbox}></div>
          </div>

          <div className={styles["nav-right"]}>
            <div onClick={handleToggle} className={styles.userimage}>
              <Image src="/user-line.svg" width={30} height={30} alt="user" />
            </div>
            <div>
              <a href="#" className="text-sm text-gray-700">
                Logout
              </a>
            </div>
          </div>
        </div>

        <div className={styles["main-content"]}>{children}</div>
      </div>
    </div>
  );
};

export default SideBarLayout;


const navlist = [
  {
    SvgIcon: "/dashboard-3-line.svg",
    text: "Dashboard",
    query: "/admin/newdashboard",
    active: ["home"],
    subMenu: [],
  },

  {
    SvgIcon: "/news-line.svg",
    text: "Blog List",
    query: "/admin/bloglist",
    active: ["home"],
    subMenu: [],
  },
  {
    SvgIcon: "/user-voice-line.svg",
    text: "Inquiry List",
    query: "/admin/newdashboard/inquires",
    active: ["home"],
    subMenu: [],
  },
];