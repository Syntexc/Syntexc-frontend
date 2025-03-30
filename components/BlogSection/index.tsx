import BlogCard from "./blogcard";
import Style  from "./blogsection.module.scss";
// import React, { useRef, useState } from 'react';
 
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FreeMode, Pagination } from 'swiper/modules';
 
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/pagination';
 
const BlogSection = ()=> {

    
    return(
        <>
        <section className={Style.blogsection}>
            <div className={Style.container}>
                <div className={Style.row}>
                <h3>Explore our <span>latest highlights</span></h3>
                <p>Discover trends, industry updates, and expert opinions to drive informed decision-making and innovation.</p>
                </div>



                 <div className={Style.row1}>

                 {blogarry?.map((item,index)=>{
                        return (
                             
                            <BlogCard image={item.image} title={item.title} datess={item.date} key={index} />
                            
                        )
                    })}
                 {/* <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
                   
 </Swiper> */}

                </div>  


                <div className={Style.row2}>
                    <a href="#">Explore More <strong>INSIGHTS</strong></a>
                </div>


            </div>
        </section>
        </>
    )
}
export default BlogSection;

const blogarry = [
    {
        image:"/blog/blog-1.jpeg",
        title:"Navigating the Ups and Downs ...",
        date:"March 24, 2025 - 5 min read",
    },
    {
        image:"/blog/blog-2.jpeg",
        title:"How Staff Augmentation and AI ...",
        date:"March 27, 2025 - 5 min read",
    },
    // {
    //     image:"/Notifications_Outline 1.png",
    //     title:"Lorem ipsum dolor ",
    //     date:"April 24, 2022 - 5 min read",
    // },
    // {
    //     image:"/Notifications_Outline 1.png",
    //     title:"Lorem ipsum dolor ",
    //     date:"April 24, 2022 - 5 min read",
    // },
    // {
    //     image:"/Notifications_Outline 1.png",
    //     title:"Lorem ipsum dolor ",
    //     date:"April 24, 2022 - 5 min read",
    // },
]

