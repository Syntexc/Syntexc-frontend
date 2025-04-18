"use client"
import Image from "next/image";
import Style from "./buttonhide.module.scss"
import { useState } from "react";

interface ButtonHideAndShowProp {
iconurl?:any;
text?:string;
}
const ButtonHideAndShow =({iconurl,text}:ButtonHideAndShowProp)=>{


    const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
    return(
        <>
        <div className={Style.box}  onClick={handleToggle}>


        {isToggled ? <> <div className={Style.icon}>
<Image src={iconurl} width={24} height={24} alt="icon" />
            </div></> : <> <p className={Style.text}>{text}</p></>}


           
           
        </div>
        </>
    )
}
export default ButtonHideAndShow;