"use client"
import Image from "next/image";
import Style from "./buttonhide.module.scss"
import { useState } from "react";

interface ButtonHideAndShowProp {
  iconurl?: any;
  text?: string;
  backgroundColor?: string;
  textColor?: string;
  action?: string;
}
const ButtonHideAndShow = ({ iconurl, text , backgroundColor , textColor , action }: ButtonHideAndShowProp) => {


  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <>
      <div className={Style.box} onClick={handleToggle}>
        {!isToggled ? <> <div className={Style.icon} style={{ backgroundColor: backgroundColor }}>
          <Image src={iconurl} width={24} height={24} alt="icon" />
        </div></> : <> <p className={Style.text} 
        style={{ color: textColor }}
        >
          <a href={action}>
          {text}

          </a>
          </p></>}
      </div>
    </>
  )
}
export default ButtonHideAndShow;