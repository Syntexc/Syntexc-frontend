"use client"
import LetTalk from "@/components/LetTalk/page";
import Builtto from "../builtto/page";
import OurLeadershipTeam from "../ourleadershipteam/page";
import TheCore from "@/components/TheCore/page";
import Webring from "@/components/Webring/page";
import OurStory from "@/components/OurStory/page";
import Aboutbanner from "@/components/Aboutbanner/page";
import { useState } from "react";
import InqueryBox from "@/components/Inquerybox";

const AboutUs = ()=>{
        const [open , setOpen] = useState(false);
    
    return(
        <>
        <Aboutbanner setOpen={setOpen} /> 
        <OurStory setOpen={setOpen} />
        <Webring />
        <TheCore />
        <OurLeadershipTeam />
        <Builtto /> 
        <LetTalk  setOpen={setOpen} />

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
export default AboutUs;