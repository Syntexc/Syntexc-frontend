import Image from "next/image";
import Style from "./missionvision.module.scss"

const SalesforceApps = ()=>{
    return (
        <>

<section className={Style.section}>
    <div className={Style.conatiner}>
    <div className={Style.row}>
<h2>Why Custom  <span>Salesforce Apps?</span></h2>
<div className={Style.textheading}>
<h3>Your business isn’t generic. So why should your CRM be?</h3>
<p>When standard Salesforce features or AppExchange tools don’t cut it, we help you build apps that are:</p>
</div>

        </div>

        <div className={Style.row1}>
{missionvisionarry?.map((item,index)=>{
    return(
        <>
        <div className={Style.boxstyle} key={index}>
            <div className={Style.image}>
                <Image src={item.image} width={104} height={104} alt={item.title} />
            </div>
            <div className={Style.conatent}>
                <h4>{item.title}</h4>
                <p>{item.contant}</p>
            </div>
        </div>
        </>
    )
})}
        </div>

        <div className={Style.footertext}>
<p>From internal tools to commercial products, our apps work with your org not around it.</p>
        </div>
    </div>
</section>

        </>
    )
}
export default SalesforceApps;


const missionvisionarry = [
    {
        image:"/process1.svg",
        title:"Fully tailored to your workflows",
    },
    {
        image:"/native-advertising1.svg",
        title:"Native to the Salesforce ecosystem",
    },
    {
        image:"/visiona1.svg",
        title:"Scalable, secure, and Lightning-fast",
    },
]
