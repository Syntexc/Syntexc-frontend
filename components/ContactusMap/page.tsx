import Image from "next/image";
import Style from "./contactusmap.module.scss"
const ContactusMap = () => {
return(
    <>
    <section className={Style.section}>
        <div className={Style.container}>
            <div className={Style.row}>
                <Image src={"/map.svg"} alt={"Clippathgroup"} width={1102} height={544} className={Style.mapstyle}  />
                <div className={`${Style.map1} ${Style.mapitems}`}>
                    <div className={Style.addbox}>
                        <h3>Global Presence</h3>
                        <p>USA</p>
                    </div>
                    <Image src={"/google-maps.svg"} alt={"Clippathgroup"} width={46} height={46} />
                </div>
                <div className={`${Style.map2} ${Style.mapitems}`}>
                    <div className={Style.addbox}>
                        <h3>Headquarters</h3>
                        <p>Synexc IT Solutions LLP<br/> Bhutani Cyber Park, Tower B, Block- C, 6th Floor, Sector 62 Noida, Uttar Pradesh 201309, India</p>
                    </div>
                    <Image src={"/google-maps.svg"} alt={"Clippathgroup"} width={80} height={80} />
                </div>
            </div>
        </div>
    </section>
    </>
)}
export default ContactusMap;