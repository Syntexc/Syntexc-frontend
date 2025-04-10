import Image from "next/image";
import Style from "./teambanner.module.scss"

const Teambanner = ()=>{
    return(
        <>
<section className={Style.section}>
<div className={`${Style.layer1} ${Style.rounded1}`}></div>
<div className={`${Style.layer2} ${Style.rounded1}`}></div>
<div className={`${Style.layer3} ${Style.rounded2}`}></div>
<div className={`${Style.layer4} ${Style.rounded2}`}></div>


<div className={Style.container}>
    <div className={Style.row}>
        <div className={Style.heading2}>
            <Image src={"/sdlfsdf.svg"} alt={""} width={171} height={203} className={Style.layeer1} />
            <h4>Meet the         <span>
                <Image src={"/Filesdasds.svg"} alt={""} width={77} height={77} /></span>Minds Behind</h4>
            <div  className={Style.name}>
            <Image src={"/name.svg"} alt={""} width={587} height={119} />
            </div>
        </div>
        <div className={Style.midheight}>
            <h3>
            Where strategy meets <span>execution</span>—and people power the <span>platform.</span>
            </h3>
        </div>
        <div className={Style.perstyle}>
            <p> Our leadership team blends technical brilliance with bold thinking, crafting cloud-first solutions that scale, adapt, and deliver real impact. Every decision starts with our clients, and every innovation is powered by the people below.</p>
        </div>
        

        
    </div>
</div>
</section>
        </>
    )
}

export default Teambanner;