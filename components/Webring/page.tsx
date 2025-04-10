import Image from "next/image";
import Style from "./webring.module.scss"
const Webring = ()=>{
    return(
        <>
        <section className={Style.section}>
            <div className={Style.container}>
                <div className={Style.row}>
                    <Image src={"/Asset.svg"} width={143} height={170} alt="Asset" />
                    <h2>Why High Growth Companies Trust Synexc</h2>
                    <p>At Synexc, we build tailored Salesforce ecosystems aligned with your business model, scalable across teams, and designed for impact from day one.</p>
                </div>
                <div className={Style.row}>
                     
                    <h2>We bring:</h2>
                     
                </div>


<div className={Style.row1}>
    <HalfCardtop  
    image={"/Group39537.svg"}
    content="Deep expertise in Sales Cloud, Service Cloud, CPQ, integrations, and automation" />
    <HalfCardbottom
        image={"/Group39540.svg"}
    content="Deep expertise in Sales Cloud, Service Cloud, CPQ, integrations, and automation"
    />
    <HalfCardtop  
    image={"/Group39537.svg"}
    content="Deep expertise in Sales Cloud, Service Cloud, CPQ, integrations, and automation" />
     <HalfCardbottom
        image={"/Group39540.svg"}
    content="Deep expertise in Sales Cloud, Service Cloud, CPQ, integrations, and automation"
    />
</div>



            </div>
        </section>
        </>
    )
}

export default Webring;




interface HalfCardPop  {
image?:any;
content?:string 
}
const HalfCardtop = ({image,content}:HalfCardPop)=>{
    return(
        <>
        <div className={`${Style.halfcartop}  `}>
            <div className={Style.image}>
                <Image src={image} width={161} height={161} alt="image" />
            </div>
            <div className={Style.content}>
                <p className={Style.text}>{content}</p>
            </div>
        </div>
        </>
    )
}
interface HalfCardbottomPop  {
image?:any;
content?:string 
}
const HalfCardbottom = ({image,content}:HalfCardPop)=>{
    return(
        <>
        <div className={`${Style.halfcarbottom}  `}>
        <div className={Style.content}>
                <p className={Style.text}>{content}</p>
            </div>
            <div className={Style.image}>
                <Image src={image} width={161} height={161} alt="image" />
            </div>
            
        </div>
        </>
    )
}







 