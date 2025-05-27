import Image from "next/image";
import Style from "./style.module.scss";

interface NewProps {
    setOpen: (open: boolean) => void;
}
const Bonus = ({setOpen}:NewProps)=>{
    return(
        <>
        <section className={Style.section}>
            <div className={Style.container}>
                <h2>Bonus</h2>
                <Image src={"/Frame427319178.svg"} width={1162} height={200} alt="Frame427319178" />
                <h3>We future-proof your CRM with AI-driven insights, automation, and smarter decision-making,  helping your teams move faster, sell smarter, and serve better.</h3>
                <a onClick={()=> setOpen(true)}>Talk to a <b>CRM Specialist</b></a>
            </div>
        </section>
        </>
    )
}
export default Bonus;