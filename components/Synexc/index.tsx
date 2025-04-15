import Image from "next/image";
import Style from "./synexc.module.scss"
import { useSpinnerRotation } from "@/hooks/useSpinnerRotation";
const Synexc =()=>{

    const spinnerRef = useSpinnerRotation();
    return(
        <>
        <section className={Style.section}>
            <div className={Style.container}>
                <div className={Style.row}>
                  <div className={Style.box}>
                    <Image src={"/homefly.png"} alt={""} width={65} height={79} className={Style.homefly} />
                  <h2>Is Your Salesforce Investment <br /> Truly Paying Off?</h2>
                    <h3>Turning Salesforce Into Your Competitive Edge</h3>
                    <h4>More Than Just <span className={Style.dsd}>A Platform </span>Make It Your <span className={Style.sdsd}>Growth Engine</span></h4>
                    <div className={Style.inner}>
                    <ul>
                        <li><a href="#contact">Consulting</a></li>
                        <li><a href="#contact">Resource Augmentation</a></li>  
                        <li><a href="#contact">AppExchange Development</a></li>
                    </ul>
                    <ul>
                        <li><a href="#contact">Implementation</a></li> 
                        <li><a href="#contact">Managed Services</a></li> 
                    </ul>
                    </div>
                    <a href="#contact" className={Style.btnn}>Get a <b>Free</b> Consultation now!</a>
                  </div>
                </div>

<div id="about">
<h2 className={Style.mide}>Synexc: Where Strategy Meets CRM, <span> <br /> and Success Follows</span></h2>

                <div className={Style.row1}>
                    <div className={Style.content}>
                        <p>Your CRM should do more than store data. It should drive growth, optimize operations, and power smarter decisions. That’s where Synexc comes in.</p>
                        <p><span>We design, implement, and optimize custom CRM solutions that help businesses scale, automate, and innovate.</span> Whether you're looking to streamline sales, enhance customer engagement, or integrate AI-powered automation, our experts deliver strategies that work.</p>
                       <p>Our certified Salesforce experts, developers, and strategists bring deep expertise and a passion for delivering results.</p>
                        
                    </div>
                    {/* <div className={Style.image}> 
                        <Image src={"/objects.svg"} width={556} height={470} alt="Asset"
                         />
                          <Image src={"/spinner.svg"} width={556} height={470} alt="Asset"
                         />
                    </div> */}




<div className={Style.containerSecond}>
      <div className={Style.imageWrapper}>
        <Image
          src="/objects.svg"
          alt="Background"
          width={556}
          height={470}
          className={Style.staticBg}
        />
       <img
  src="/fixed-spinner.svg"
  alt="Rotating Spinner"
  className={Style.spinner}
  width={556}
  height={470}
/>
      </div>

      {/* <div className={Style.textTopLeft}>Streamline Sales</div>
      <div className={Style.textBottomLeft}>Enhance Customer Engagement</div>
      <div className={Style.textRight}>AI-Powered Automation</div> */}
    </div>

                    
                </div>
                </div>


                {/* <div className={Style.logostyle}>
                    <h2>Brands Weve Helped <span>Scale with Salesforce</span></h2>
                    <ul>
                       
                                <li>
                                    <Image src={"/a.png"} alt={"sas"} width={151} height={35} />
                                </li>
                                <li>
                                    <Image src={"/b.png"} alt={"sas"} width={150} height={33} />
                                </li>
                                <li>
                                    <Image src={"/c.png"} alt={"sas"} width={150} height={27} />
                                </li>
                                <li>
                                    <Image src={"/d.png"} alt={"sas"} width={93} height={37} />
                                </li>
                                <li>
                                    <Image src={"/e.png"} alt={"sas"} width={115} height={33} />
                                </li>
                                <li>
                                    <Image src={"/f.png"} alt={"sas"} width={102} height={45} />
                                </li>
                                <li>
                                    <Image src={"/g.png"} alt={"sas"} width={71} height={30} />
                                </li>
                                
                        
                    </ul>
                </div> */}
            </div>
        </section>
        
        </>
    )
}
export default Synexc;


 