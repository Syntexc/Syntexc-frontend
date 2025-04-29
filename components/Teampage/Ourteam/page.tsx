"use client"
import Image from "next/image";
import Style from "./ourteam.module.scss"
import React from "react";
const OurTeam = ()=> {
    const [activeId, setActiveId] = React.useState<number | null>(null);
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
            isActive={activeId === items?.id}
          onClick={() => setActiveId(items?.id)}
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
isActive?: boolean;
onClick?: () => void;
}

const TeamCard = ({
    image,
    name,
    role,
    isActive,
    onClick,
}:TeamCardProp)=>{
 
    return(
        <>
           <div className={Style.teamcard}>
      <div className={Style.image} onClick={onClick}>
        <Image
          src={image}
          alt="team"
          width={267}
          height={231}
          className={!isActive ? Style.grayscale : ''}
        />
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
    {id:0,
        image:"/SambbhavArora.png",
        name:"Sambbhav Arora",
        role:"Founder & CEO",
    },
    {id:1,
        image:"/Kashish-Kumar.png",
        name:"Kashish Kumar",
        role:"Global Head- Growth Strategist ",
    },
    {id:2,
        image:"/Nishu-Mahaseth.png",
        name:"Nishu Mahaseth",
        role:"Chief- People Success And Strategist ",
    },
    { id:3,
        image:"/Asheesh-Pandey.png",
        name:"Asheesh Pandey",
        role:"Head- Revenue and Growth Strategist ",
    },
]