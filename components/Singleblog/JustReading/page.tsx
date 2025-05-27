"use client";
import React from "react";
import Style from "./style.module.scss"
import InqueryBox from "@/components/Inquerybox";
const JustReading = ()=>{
         const [open , setOpen] = React.useState(false);
    return(
        <>
         <section className={Style.section}>
            <div className={Style.container}>
                <div className={Style.row}>
                    <div className={Style.content}>
                    <h2>Want More Than Just Reading?</h2>
                    <h4>Talk to our consultants about how we can implement what you just read. </h4>
                    </div>
                    <div className={Style.btn}>
            <a onClick={() => setOpen(true)}>Book a  <b>consultation now</b></a>
        </div>
                </div>
            </div>
        </section>


         {open && (
                    <div className="overlay">
                  <div className="popup">
                    <button onClick={() => setOpen(false)} className="closeButton" style={{
                      color:"red"
                    }}>
                      &times;
                    </button>
                    <InqueryBox />
                  </div>
                </div>
        
                )}
        </>
    )
}
export default JustReading;