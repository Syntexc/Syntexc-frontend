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
                                    <p>Salesforce <br/> Implementation</p>
                                </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={Style.secd}>
                            <div className={Style.inner}>
                                <div className={Style.image}>
                                    <Image src={"/start-up 1.png"} width={30} height={30} alt="Connection" />
                                </div>
                                <div className={Style.container}>
                                    <h3>100<span>+</span> </h3>
                                    <p>Projects  <br/> Completed</p>
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
                                    <Image src={"/success 1.png"} width={24} height={24} alt="Connection" />
                                </div>
                                <div className={Style.container}>
                                    <h3>50<span>+</span> </h3>
                                    <p>Success  <br/> Stories</p>
                                </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={Style.four}>
                            <div className={Style.inner}>
                                <div className={Style.image}>
                                    <Image src={"/badge 1.png"} width={24} height={24} alt="Connection" />
                                </div>
                                <div className={Style.container}>
                                    <h3>30<span>+</span> </h3>
                                    <p>Salesforce  <br/> specialist</p>
                                </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={Style.five}>
                            <div className={Style.inner}>
                                <div className={Style.image}>
                                    <Image src={"/exchange-rate 1.png"} width={24} height={24} alt="Connection" />
                                </div>
                                <div className={Style.container}>
                                    <h3>10<span>+</span> </h3>
                                    <p>AppExchange Security  <br/> Reviews Cleared</p>
                                </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>



                <div className={Style.row2}>
                  <h2>Big Goals Need Big Solutions: That’s Where Synexc Comes In.</h2>
<div className={Style.inner2}>
    <div className={Style.content}>
        <h3>We Solve Business Problems, Not Just Tech Issues.</h3>
        <p>Salesforce is a tool, but success comes from strategy. We design solutions that fix bottlenecks, improve sales efficiency, and enhance customer engagement.</p>
    </div>
    <div className={Style.image}>
<Image src={"/Frame 39534.png"} width={199} height={159} alt="" />
    </div>
</div>

<a href="#" className={Style.btn}>Get Started. <strong> its for free!</strong></a>
                </div>
            </div>
        </section>
        </>
    )
}
export default CRM;



