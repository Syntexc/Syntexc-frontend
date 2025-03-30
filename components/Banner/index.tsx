import Image from "next/image";
import Style from "./Banner.module.scss";
import React from "react";

const Banner = () => {
    return (
        <div className={Style.banner}>
            <div className={Style.topstyle}>
            <div className={Style.banner_content}>
                
                {/* <div className={Style.content_image}> */}
                {/* <div className={Style.middlestyle}>
                    <h1>
                    SYNEXC
                </h1>

                
                <p>Synergy That Drives Success</p>
                <h2>WHAT IF YOUR CRM DID <br /><span>MORE THAN JUST</span><br /> MANAGE CUSTOMERS?</h2>
                    
                <button>Get Started.<span>IT'S FOR FREE!</span></button>
                </div> */}
                {/* <Image src={"/Asset 1 1.png"} width={171} height={203} alt="banner"  className={Style.image_content}/> */}

            </div>
            <div className={Style.banner_image}>
                {/* Add your image here */}
                <div className={Style.bottomstyle}>
                <Image src={"/Frame 427319105.png"} width={120} height={120} alt="banner"  className={Style.image1}/>
                <Image src={"/Group (2).png"} width={271} height={163} alt="banner"  className={Style.image2}/>
                </div>
                <div className={Style.bottomstyle1}>
                <div className={Style.bottomstyle2}>
                    
                <Image src={"/pic1.png"} width={120} height={120} alt="banner"  className={Style.image6} />
                {/* <div style={{display: "flex", flexDirection: "column",}}> */}
                {/* <div> */}
                

                <Image src ={"/Frame 427319127 (1).png"} width={120} height={120} alt="banner" className={Style.image4}  />
                <Image src={"/Group (4).png"} width={120} height={120} alt="banner"  className={Style.image7} />
          

                {/* </div> */}
                </div>
                <Image src={"/Frame 427319075 (1).png"} width={450} height={450} alt="banner"  className={Style.image5} />
               
                {/* </div> */}
                {/* <div style={{display: "flex", flexDirection: "column",}}> */}
           
                <Image src={"/Group (3).png"} width={69} height={220} alt="banner"  className={Style.image3} />
               
                {/* </div> */}
            
                </div>
                <div className={Style.bottomstyle}>
                <Image src={"/Group (7).png"} width={14} height={64} alt="banner"  className={Style.image9}/>
                <Image src={"/Group (8).png"} width={189} height={121} alt="banner"  className={Style.image10}/>
                    <Image src={"/Group (5).png"} width={69} height={69} alt="banner"  className={Style.image8} />
                    </div>
                {/* <Image src={"/Asset 1 1.png"} width={171} height={203} alt="banner"  className={Style.image_content}/> */}


            </div>
            </div>
        </div>
    )
}

export default Banner;
