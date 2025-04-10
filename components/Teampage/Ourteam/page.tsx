import Image from "next/image";
import Style from "./ourteam.module.scss"
const OurTeam = ()=> {
    return(
        <>
        <section className={Style.section}>
            <div className={Style.container}>
                <div className={Style.row}>
                    <h2>OUR TEAM</h2>
                </div>
<div className={Style.teamcardrow}>
    {teamcardarray?.map((items,index)=>{
        return(
            <>
            <TeamCard
            key={index}
            image={items.image}
            name={items.name}
            role={items.role}
            />
            </>
        )
    })}
</div>
            </div>
        </section>
        </>
    )
}
export default OurTeam;



interface TeamCardProp {
image?:any;
name?:string;
role?:string;
}

const TeamCard = ({
    image,
    name,
    role,
}:TeamCardProp)=>{
    return(
        <>
        <div className={Style.teamcard}>
            <div className={Style.image}>
                <Image src={image} alt={"iamge"} width={267}  height={231}/>
            </div>
            <div className={Style.content}>
                <h3>{name}</h3>
                <p>{role}</p>
            </div>
        </div>
        </>
    )
}







const teamcardarray = [
    {
        image:"/SambbhavArora.png",
        name:"Sambbhav Arora",
        role:"Founder & CEO",
    },
    {
        image:"/Kashish-Kumar.png",
        name:"Kashish Kumar",
        role:"Global Head- Growth Strategist ",
    },
    {
        image:"/Nishu-Mahaseth.png",
        name:"Nishu Mahaseth",
        role:"Chief- People Success And Strategist ",
    },
    {
        image:"/Asheesh-Pandey.png",
        name:"Asheesh Pandey",
        role:"Head- Revenue and Growth Strategist ",
    },
]