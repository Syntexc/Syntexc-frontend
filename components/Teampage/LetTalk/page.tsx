import Image from "next/image";
import Style from "./lettalk.module.scss"
import ButtonHideAndShow from "@/components/ButtonHideAndShow/page";
const LetTalk = () =>{
    return(
        <>
        <section className={Style.section}>
            <div className={Style.container}>
<div className={Style.phone}>
    <Image src={"/phone.svg"}  width={60} height={60} alt={""}  />
</div>

                <h2>Say Hello!</h2>
                <p>We’d love to hear from you. Fill out the form below and someone from our team will be in <br /> touch within 24 hours.</p>
               <div className={Style.innerbox}>
                <ul>
                    <li>
                        <p>Prefer email? Reach us directly at  </p>
                        {/* <span> */}
                            {/* <Image src={"/envicon.svg"} alt={""} width={24} height={24} /> */}
                            <ButtonHideAndShow
               iconurl={"/Arrow30.svg"}
               text="hello@synexc.com"
                backgroundColor={"#fff"}
                textColor={"#000"}
               />
                            {/* </span> */}
                    </li>
                    <li>
                        <p>Want to collaborate? Let’s talk about partnerships. </p>
                        {/* <span><Image src={"/usericon.svg"} alt={""} width={24} height={24} /></span> */}
                        <ButtonHideAndShow
               iconurl={"/usericon.svg"}
               text="Talk to us for partnerships"
               backgroundColor={"#fff"}
               textColor={"#000"}
               />
                    </li>
                    <li>
                        <p>Follow us on LinkedIn for insights, updates & behind-the-scenes. </p>
                        {/* <span><Image src={"/link.svg"} alt={""} width={24} height={24} /></span> */}

                        <ButtonHideAndShow
               iconurl={"/linkd.svg"}
               text="@SynexcTech"
               backgroundColor={"#fff"}
               textColor={"#000"}
               />
                    </li>
                </ul>
               </div>
            </div>
        </section>
        </>
    )
} 
export default LetTalk;