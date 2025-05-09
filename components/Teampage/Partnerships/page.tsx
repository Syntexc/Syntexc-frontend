"use client"
import Image from "next/image";
import Style from "./partnerships.module.scss"
import ContactUs from "@/components/ContactUs";
import { useState } from "react";
import InqueryBox from "@/components/Inquerybox";
const Partnerships =()=>{
    const [open , setOpen] = useState(false);
    return(
        <>
        <section className={Style.section}>
            <div className={Style.layer}>
                <Image src={"/clip-path-group.svg"} alt={""} width={1188} height={64}  /> 
            </div>
            <div className={Style.container}>
<h2>People Build Companies.<br /> <span>People Build Partnerships.</span> </h2>
<p>Our journey is driven by bold thinkers, curious minds, and partners who believe in doing things differently. Whether you're looking to transform your Salesforce ecosystem, explore a partnership, or just chat ideas, you're in the right place.</p>
<div className={Style.btn}>
    <span onClick={()=> setOpen(true)} >Let’s build what’s next, <b>together</b>.</span>
</div>
            </div>
        </section>
        {open && (
            <div className="overlay" >
          <div className="popup">
            <button onClick={() => setOpen(false)} className="closeButton">
              &times;
            </button>
            <InqueryBox />
          </div>
        </div>

        )}
        </>
    )
}
export default Partnerships;