"use client"

import React from "react";
import Style from "./style.module.scss"
import Image from "next/image";
import Link from "next/link";
import { link } from "fs";
import { unique } from "next/dist/build/utils";
import axios from "axios";
import { decode } from "html-entities";

const FeaturedReads = () => {
    const [activeTab, setActiveTab] = React.useState("Salesforce Insights");
    console.log("activeTab", { activeTab })

    const filteredData = blogData?.find((item) => item?.id === activeTab);
    const sortedBlogData = filteredData?.blogpost;
    console.log("sortedBlogData", { sortedBlogData })

      const [blog, setBlog] = React.useState<any>([]);
    console.log("blog", { blog })

  const getAllBlogsData = async () => {
    const data = await axios.get("/api/blog");
    if (data.status === 200) {
      setBlog(data?.data);
    }
  };

  React.useEffect(() => {
    getAllBlogsData();
  }, []);


  // filter blog based on active tab customCategory is have items so filter based on that 
    const filterBlogData = blog?.filter((item: any) => {
        // Check if the item has a customCategory and if it matches the activeTab
        return item?.customCategory?.some((category: any) => category?.value === activeTab);
    }
    );
    console.log("filterBlogData", { filterBlogData })
    return (
        <>
            <section className={Style.section}>
                <div className={Style.container}>

                    <div className={Style.row}>
                        <h2>Featured Reads</h2>
                       <div className={Style.bloglist}>
                       <ul className={Style.tabws}>
                            {tabsarry?.map((items, index) => {
                                return (
                                    <>
                                        <button className={activeTab === items.tabname ? Style.active : Style.inactive} key={index} onClick={() => setActiveTab(items.tabname)}>{items.tabname}</button>
                                    </>
                                )
                            })}
                        </ul>

                        <div className={Style.blogbox}>
                            {filterBlogData?.map((items:any, index:any) => {
                                console.log("items", { items })
                                return (
                                    <>
                                        <SmallCard
                                            key={index}
                                            image={items?.featureImage}
                                            title={items?.title}
                                            description={items?.content}
                                            readmore={`/blog/${items.slug}`}
                                        />
                                    </>
                                )
                            })}

                        </div>
                       </div>



                    </div>

                </div>
            </section>
        </>
    )
}

export default FeaturedReads;


const tabsarry = [
    { tabname: "Salesforce Insights" },
    { tabname: "Culture" },
    { tabname: "Tech & Tools" },
    { tabname: "Staff Augmentation & Talent" },
    { tabname: "Salesforce Appexchange" },
]



const blogData = [


    {
        id: "Salesforce Insights",
        blogpost:
            [
                {
                    uniqueid: "0",
                    title: "ZERO TO CRM HERO: HOW WE HELPED A REAL ESTATE CLIENT TRIPLE CONVERSIONS",
                    description: "A legacy system was slowing them down...",
                    image: "/blog/blog1.png",
                    link: "#",
                },
                {
                    uniqueid: "1",
                    title: "test",
                    description: "A legacy system was slowing them down...",
                    image: "/blog/blog1.png",
                    link: "#",
                },
                {
                    uniqueid: "3",
                    title: "ZERO TO CRM HERO: HOW WE HELPED A REAL ESTATE CLIENT TRIPLE CONVERSIONS",
                    description: "A legacy system was slowing them down...",
                    image: "/blog/blog1.png",
                    link: "#",
                },
                {
                    uniqueid: "4",
                    title: "test",
                    description: "A legacy system was slowing them down...",
                    image: "/blog/blog1.png",
                    link: "#",
                },
                {
                    uniqueid: "5",
                    title: "ZERO TO CRM HERO: HOW WE HELPED A REAL ESTATE CLIENT TRIPLE CONVERSIONS",
                    description: "A legacy system was slowing them down...",
                    image: "/blog/blog1.png",
                    link: "#",
                },
                {
                    uniqueid: "6",
                    title: "test",
                    description: "A legacy system was slowing them down...",
                    image: "/blog/blog1.png",
                    link: "#",
                },
            ]
    },


    {
        id: "Culture",
        blogpost:
            [
                {
                    uniqueid: "2",
                    title: "ZERO TO CRM HERO: HOW WE HELPED A REAL ESTATE CLIENT TRIPLE CONVERSIONS",
                    description: "A legacy system was slowing them down...",
                    image: "/blog/blog1.png",
                    link: "#",
                },
            ]
    },


    {
        id: "Tech & Tools",
        blogpost:
            [
                {
                    uniqueid: "3",
                    title: "VISIBILITY = VIABILITY: 5 WAYS TO MAKE YOUR APP STAND OUT",
                    description: "Before you launch, read this...",
                    image: "/blog/blog2.png",
                    link: "#",
                },
            ]
    },
    {
        id: "Staff Augmentation & Talent",
        blogpost:
            [
                {
                    uniqueid: "3",
                    title: "VISIBILITY = VIABILITY: 5 WAYS TO MAKE YOUR APP STAND OUT",
                    description: "Before you launch, read this...",
                    image: "/blog/blog2.png",
                    link: "#",
                },
            ]
    },
    {
        id: "Salesforce Appexchange",
        blogpost:
            [
                {
                    uniqueid: "3",
                    title: "VISIBILITY = VIABILITY: 5 WAYS TO MAKE YOUR APP STAND OUT",
                    description: "Before you launch, read this...",
                    image: "/blog/blog2.png",
                    link: "#",
                },
            ]
    },





    ,
];


interface SmallCardProp {
    image?: any;
    title?: string;
    description?: string;
    readmore?: string;
}
const SmallCard = ({ image, title, description, readmore }: SmallCardProp) => {
    console.log("description",{description})
    const cleanedHTML = description?.replace(/&nbsp;/g, ' ');
    const [cleanedText, setCleanedText] = React.useState('');
    React.useEffect(() => { 
    const noTags = description?.replace(/<[^>]+>/g, '');
    const decoded = decode(noTags); 
    setCleanedText(decoded);
  }, [description]);
  console.log("cleanedText", { cleanedText })
    return (
        <>
            <div className={Style.blogcard} >
                <div className={Style.image}>
                    <Image src={image} width={312} height={200} alt={title || "Default Alt Text"} />
                </div>
                <div className={Style.contentbox}>
                    <h3>{title}</h3>
                    
                    <p>{cleanedText}</p>
                    <Link href={readmore || "#"} >
                        Read More
                    </Link>
                </div>
            </div>
        </>
    )
}



