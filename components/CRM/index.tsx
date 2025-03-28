import Image from "next/image";
import Style from "./crm.module.scss"
const CRM = ()=>{
    return(
        <>
        <section className={Style.section}>
            <div className={Style.container}>
                <div className={Style.row}>
                    <h2>From CRM to Business Breakthroughs - The Synexc Effect </h2>
                    <p>Proven Expertise. Measurable Impact. Continuous Innovation.</p>
                </div>

                <div className={Style.row1}>
                    <ul>
                        <li>
                            <div className={Style.one}>
                            <div className={Style.inner}>
                                <div className={Style.image}>
                                    <Image src={"/Connection.png"} width={24} height={24} alt="Connection" />
                                </div>
                                <div className={Style.container}>
                                    <h3>50<span>+</span> </h3>
                                    <p>Salesforce Implementation</p>
                                </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={Style.secd}>
                            <div className={Style.inner}>
                                <div className={Style.image}>
                                    <Image src={"/Connection.png"} width={24} height={24} alt="Connection" />
                                </div>
                                <div className={Style.container}>
                                    <h3>50<span>+</span> </h3>
                                    <p>Salesforce Implementation</p>
                                </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul>
                       
                        
                        <li>
                            <div className={Style.three}>
                            <div className={Style.inner}>
                                <div className={Style.image}>
                                    <Image src={"/Connection.png"} width={24} height={24} alt="Connection" />
                                </div>
                                <div className={Style.container}>
                                    <h3>50<span>+</span> </h3>
                                    <p>Salesforce Implementation</p>
                                </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={Style.four}>
                            <div className={Style.inner}>
                                <div className={Style.image}>
                                    <Image src={"/Connection.png"} width={24} height={24} alt="Connection" />
                                </div>
                                <div className={Style.container}>
                                    <h3>50<span>+</span> </h3>
                                    <p>Salesforce Implementation</p>
                                </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={Style.five}>
                            <div className={Style.inner}>
                                <div className={Style.image}>
                                    <Image src={"/Connection.png"} width={24} height={24} alt="Connection" />
                                </div>
                                <div className={Style.container}>
                                    <h3>50<span>+</span> </h3>
                                    <p>Salesforce Implementation</p>
                                </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        </>
    )
}
export default CRM;



