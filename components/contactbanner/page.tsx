import Image from "next/image";
import Style from  "./contactbanner.module.scss"

const ContactBanner = ()=>{
    return(
        <>
<section className={Style.section}>
<div className={`${Style.layer1} ${Style.rounded1}`}></div>
<div className={`${Style.layer2} ${Style.rounded1}`}></div>
<div className={`${Style.layer3} ${Style.rounded2}`}></div>
<div className={`${Style.layer4} ${Style.rounded2}`}></div>


<div className={Style.container}>
    <div className={Style.row}>
    <div className={Style.textbox}>
      <div className={Style.heading2}> 
            <h4>Let’s Build the</h4>
            <h4>Future  <span>
            <Image src={"/image321.svg"} alt={""} width={85} height={85} /></span>   Together</h4>
        </div>
        <div className={Style.midheight}>
            <h3>
            At Synexc, every conversation starts a journey toward <span>success.</span>
            </h3>
        </div>

        <div className={Style.perstyle}>
            <p>Whether you're looking to transform your operations, enhance customer experiences, or co-create the next big AppExchange solution, we’re ready to connect.</p>
        </div>
      </div>



      <div className={Style.imagebox}>
        <Image src={"/Group39544.svg"} alt={"image321"} width={503} height={454} />
      </div>
       

    
    </div>
</div>
</section>
        </>
    )
}

export default ContactBanner;