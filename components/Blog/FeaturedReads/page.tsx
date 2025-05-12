// "use client"

// import React from "react";
// import Style from "./style.module.scss"
// import Image from "next/image";
// import Link from "next/link";
// import { link } from "fs";
// import { unique } from "next/dist/build/utils";

// const FeaturedReads = () =>{
// const [activeTab, setActiveTab] = React.useState("Real estate");
    
//     return(
//         <>
//         <section className={Style.section}>
//             <div className={Style.container}>

// <div className={Style.row}>
//     <h2>Featured Reads</h2>
//     <ul className={Style.tabws}>
//                         {tabsarry?.map((items,index)=>{
//                             return(
//                                 <>
//                                 <button className={activeTab === items.tabname ? Style.active : Style.inactive} key={index} onClick={() => setActiveTab(items.tabname)}>{items.tabname}</button>
//                                 </>
//                             )
//                         })}
//                     </ul>

// <div className={Style.blogbox}>
// {blogData?.map((items , index)=>{
//     return(
//         <>
//         <SmallCard
//         key={index}
//         image={items?.image}
//         title={items?.title}
//         description={items?.description}
//         readmore={items?.link}
//         />
//         </>
//     )
// })}

// </div>



// </div>

//             </div>
//         </section>
//         </>
//     )
// }

// export default FeaturedReads;


// const tabsarry = [
//     {tabname:"Salesforce Insights"},
//     {tabname:"Culture"},
//     {tabname:"Tech & Tools"},
//     {tabname:"Staff Augmentation & Talent"},
//     {tabname:"Salesforce Appexchange"},
// ]



// const blogData = [
   
     
// {
//     id:"Salesforce Insights",
//     blogpost:
//     [
//         {
//             uniqueid:"0",
//             title: "ZERO TO CRM HERO: HOW WE HELPED A REAL ESTATE CLIENT TRIPLE CONVERSIONS",
//             description: "A legacy system was slowing them down...",
//             image: "/blog/blog1.png",
//             link:"#",
//           },  
//           {
//             uniqueid:"1",
//             title: "test",
//             description: "A legacy system was slowing them down...",
//             image: "/blog/blog1.png",
//             link:"#",
//           },    
//     ]
// },


// {
//     id:"Culture",
//     blogpost:
//     [
//         {
//             uniqueid:"2",
//             title: "ZERO TO CRM HERO: HOW WE HELPED A REAL ESTATE CLIENT TRIPLE CONVERSIONS",
//             description: "A legacy system was slowing them down...",
//             image: "/blog/blog1.png",
//             link:"#",
//           },   
//     ]
// },


// {
//     id:"Culture",
//     blogpost:
//     [
//         {
//             uniqueid:"3",
//             title: "VISIBILITY = VIABILITY: 5 WAYS TO MAKE YOUR APP STAND OUT",
//             description: "Before you launch, read this...",
//             image: "/blog/blog2.png",
//             link:"#",
//           },   
//     ]
// },


 
  
      
//     ,
//     // "Culture": [],
//     // "Tech & Tools": [],
//     // "Staff Augmentation & Talent": [],
//     // "Salesforce AppExchange": [],
// ];


// interface SmallCardProp {
// image?:any;
// title?:string;
// description?:string;
// readmore?:string;
// }
// const SmallCard = ({image,title,description,readmore}:SmallCardProp)=>{
//     return (
//         <>
//         <div className={Style.blogcard} >
//             <div className={Style.image}>
//                 <Image src={image}  width={312} height={200}  alt={title}  /> 
//             </div>
//             <div className={Style.contentbox}>
//                 <h3>{title}</h3>
//                 <p>{description}</p>
//                  <a href={readmore}>
//                 Read More
//                     </a> 
//             </div>
//         </div>
//         </>
//     )
// }



