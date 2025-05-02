import Image from "next/image";
import Style from "./ourleadershipteam.module.scss"
import Link from "next/link";

const OurLeadershipTeam = ()=>{
    return(
        <>
<section className={Style.section}>
    <div className={Style.container}>
        <h2>Our Leadership Team</h2>
<p>Synexc is led by seasoned professionals who understand both the technical depth of Salesforce and the strategic vision it can unlock for businesses across industries.</p>
    </div>

    <div className={Style.container2}>
        <div className={Style.row}>
    <BigCard
    userimage={"/Ellipse3.png"}
    username="Sambhav Arora"
    role="Founder & CEO"
    content="A visionary leader who saw a gap in how businesses leverage Salesforce and built Synexc to bridge it."
    />



<div className={Style.row1}>
    {teamarray?.map((team,index)=>{
        return(
            <>
              <SmallCard
              id={team.teamdesc}
              key={index}
               teamimage={team.teamimage}
               teamname={team.teamname}
               teamrole={team.teamrole}
               teamdesc={team.teamdesc}
              /></>
        )
    })}
  
</div>


        </div>
    </div>

    <div className={Style.container3}>
        <Link href="https://www.linkedin.com/company/synexc/about/?viewAsMember=true">Join our <b>&nbsp;community</b> </Link>
    </div>
</section>
        </>
    )
}
export default OurLeadershipTeam;




interface BigCardProp {
    userimage?:any;
username?:string;
role?:string;
content?:string;

}


const BigCard =({
    userimage,
    username,
    role,
    content,
}:BigCardProp)=>{
    return(
        <>
    <div className={Style.bigcard}>
             <div className={Style.image}>
                <Image src={userimage} width={124} height={124} alt={"userimage"} key={userimage} />
             </div>
             <div className={Style.content}>
             <div className={Style.username}>
               <h3>{username}</h3>
               <h4>{role}</h4>
               </div>
                <p className={Style.desc}>{content}</p>
             </div>
             </div>
        </>
    )
}




interface SmallCardProp {
teamimage?:any;
teamname?:any;
teamrole?:string;
teamdesc?:string;
id?:any;
}
const SmallCard = ({
teamimage,
teamname,
teamrole,
teamdesc,
id,
}:SmallCardProp)=>{
    return(
        <>
        <div className={Style.smallcard}>
            <div className={Style.image}>
                <Image src={teamimage} width={60} height={60} alt={teamname} key={id} />
            </div>
            <div className={Style.content}>
               <div className={Style.teamname}>
               <h4>{teamname}</h4>
               <h5>{teamrole}</h5>
               </div>
               <p>{teamdesc}</p>
            </div>
        </div>
        </>
    )
}





const teamarray = [
    {
        id:1,
        teamimage:"/team1.png",
        teamname:"Nishu Mahaseth",
        teamrole:"Chief- People success & strategist",
        teamdesc:"Championing culture, performance, and alignment from the inside out.",
    },
    {
        id:2,
        teamimage:"/team2.png",
        teamname:"Kashish Kumar",
        teamrole:"Global Head of Growth Strategy",
        teamdesc:"Connecting Synexc s global potential with client outcomes at scale.",
    },
    {
        id:3,
        teamimage:"/team3.png",
        teamname:"Asheesh Pandey",
        teamrole:"Head of Revenue & Growth Strategy",
        teamdesc:"Helping clients design systems that don’t just operate they accelerate.",
    },
]
