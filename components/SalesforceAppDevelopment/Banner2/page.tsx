import Image from "next/image";
import Style from "./style.module.scss"
const Bannersal2 = () => {
    return (
        <>
            <section className={Style.section}>
                <div className={`${Style.layer1} ${Style.rounded1}`}></div>
                <div className={`${Style.layer2} ${Style.rounded1}`}></div>
                <div className={`${Style.layer3} ${Style.rounded2}`}></div>
                <div className={`${Style.layer4} ${Style.rounded2}`}></div>


                <div className={Style.container}>
                    <div className={Style.row}>
                        <div className={Style.contentbox}>
                            <div className={Style.heading2}>
                                <h4>Your Salesforce Org <span>Isn’t the Problem</span></h4>
                                <div className={Style.content}>
                                    <h5>Your Support Strategy Might Be</h5>
                                    <p>You invested in Salesforce to streamline your business—but somewhere along the way, things got messy.</p>
                                </div>


                                <div className={Style.mincard}>
                                <div className={Style.mincardinner}>
                                  <div className={Style.mincardview}>
                                        <div className={Style.image}>
                                            <Image src={"/Component45.svg"} alt={"Component45"} width={72} height={72} />
                                        </div>
                                        <div className={Style.content}>
                                            <p>Users aren’t <br /> adopting it</p>
                                        </div>
                                    </div>
                                    <div className={Style.mincardview}>
                                        <div className={Style.image}>
                                            <Image src={"/Component422.svg"} alt={"Component45"} width={72} height={72} />
                                        </div>
                                        <div className={Style.content}>
                                            <p>Reports are <br /> unreliable.</p>
                                        </div>
                                    </div>
                                  </div>
                                  <div className={Style.mincardinner}>
                                    <div className={Style.mincardview}>
                                        <div className={Style.image}>
                                            <Image src={"/Component345.svg"} alt={"Component45"} width={72} height={72} />
                                        </div>
                                        <div className={Style.content}>
                                            <p>Processes feel clunky. </p>
                                        </div>
                                    </div>
                                    <div className={Style.mincardview}>
                                        <div className={Style.image}>
                                            <Image src={"/Componentdd45.svg"} alt={"Component45"} width={72} height={72} />
                                        </div>
                                        <div className={Style.content}>
                                            <p>Small changes take weeks.</p>
                                        </div>
                                    </div>
                                    </div>
                                    <div className={Style.mincardinner}>
                                    <div className={Style.mincardview}>
                                        <div className={Style.image}>
                                            <Image src={"/Component3345.svg"} alt={"Component45"} width={72} height={72} />
                                        </div>
                                        <div className={Style.content}>
                                            <p>And no one’s quite sure who’s supposed to fix what.</p>
                                        </div>
                                    </div>
                                    </div>


                                </div>

                            </div>



                            <div className={Style.btn}>
                                <a href="#contact">Get Started. <b>its for free!</b></a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default Bannersal2;



