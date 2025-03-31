import Image from "next/image";
import Style from "./expertpartner.module.scss"
const ExpertPartner = () =>{
    return (
        <>
        <div className={Style.section} id="services">
 
    <div className={Style.first}>
        <div className={Style.box}></div>
        <div className={Style.box}></div>
        <div className={Style.box}></div>
        <div className={Style.box}></div>
    </div>

    <div className={Style.section2}>
<div className={Style.style2}>
<div className={Style.first2}>
        <div className={Style.box}></div>
        <BoxCard imageurl={"/Component 6.png"} title="CPQ (Configure, Price, Quote)" />
       
        <BoxCard imageurl={"/Component 7.png"} title="Experience Cloud" />
       
        <BoxCard imageurl={"/Component 8.png"} title="Health Cloud" />
        <div className={Style.box}></div>
    </div>

<div className={Style.threerow}>
    <div className={Style.onerow}>
    <BoxCard imageurl={"/Component 10.png"} title="Sales Cloud" />
   
    <BoxCard imageurl={"/Component 11.png"} title="Service Cloud" />
    </div>

<div className={Style.midbox}>
    <div className={Style.box1}>
        <h2>Every Salesforce Cloud. One Expert Partner.</h2>
        <p>Which Salesforce Cloud Powers Your Growth? We’ve Got You Covered.</p>
    </div>
</div>


<div className={Style.onerow}>
<BoxCard imageurl={"/Component 12.png"} title="Experience Cloud" />

    <BoxCard imageurl={"/Component 13.png"} title="Agentforce" />
    </div>
</div>


    <div className={Style.first2}>
        <div className={Style.box}></div>
        <BoxCard imageurl={"/Component 15.png"} title="Marketing Cloud" />
        <BoxCard imageurl={"/Component 16.png"} title="Data Cloud" />
        <BoxCard imageurl={"/Component 17.png"} title="Vlocity" />

        <div className={Style.box}></div>
    </div>
</div>
    
    </div>

    <div className={Style.first}>
        <div className={Style.box}></div>
        <div className={Style.box}></div>
        <div className={Style.box}></div>
        <div className={Style.box}></div>
    </div>
 
        </div>
        </>
    )
}


export default ExpertPartner;

interface BoxCardProp {
imageurl?:any;
title?:string
}

const BoxCard = ({imageurl, title}:BoxCardProp)=> {
    return (
        <>
        <div className={Style.box}>
<div className={Style.image}><Image src={imageurl} alt={""} width={72} height={72} /> </div>
<h3>{title}</h3>
        </div>
        </>
    )
}
 
