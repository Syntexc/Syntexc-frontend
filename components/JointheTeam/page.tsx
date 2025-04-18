
import Image from "next/image";
import Style from "./jointheteam.module.scss"
import ButtonHideAndShow from "../ButtonHideAndShow/page";
const JointheTeam = ()=>{
    return(
        <>
        <section className={Style.section}>
           <img src={"/Groupsfdsf.png"} alt={""}  className={Style.image1}  />
           <div className={Style.box}>
            <h3>Join the Team <span>that’s Creating Waves</span></h3>
            <p>At Synexc, we don’t fill roles. We empower careers.</p>
            <div className={Style.buttonbox}>
            
               <ButtonHideAndShow
               iconurl={"/Arrow30.svg"}
               text="careers@synexc.com"

               />
               <ButtonHideAndShow
               iconurl={"/linkd.svg"}
               text="@SynexcTech"

               />

           
            </div>
           </div>
           <img src={"/Groupsdfsdf.png"} alt={""}  className={Style.image2}  />
        </section>
        </>
    )
}
export default JointheTeam;