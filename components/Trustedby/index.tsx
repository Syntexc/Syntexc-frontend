"use client"
import RatingCard from "../RatingCard";
import Styles from "./trustedby.module.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
const Trustedby = () =>{

    const [slides, setSlides] = useState(3);

    useEffect(() => {
      const updateSlides = () => {
        setSlides(window.innerWidth < 500 ? 1.1 : 3);
      };
      updateSlides();
      window.addEventListener('resize', updateSlides);
      return () => window.removeEventListener('resize', updateSlides);
    }, []);

    const swiperRef = useRef<any | null>(null);
    return(
        <>
        <section className={Styles.trustedbybox}>
            <div className={Styles.container}>
                <div className={Styles.row}>
                <h2>Trusted by Industry Giants. <span>Chosen by Innovators.</span></h2>
                <p>From Fortune 500 companies to high-growth disruptors, businesses turn to Synexc for next-level Salesforce solutions that drive impact, efficiency, and measurable success.</p>
                </div>

                <div className={Styles.row1}>
<div className={Styles.cScore}>
    <h3>97<span>%</span></h3>
<div className={Styles.cont}>
<h4>CSAT Score</h4>
<p>Because great solutions create great experiences.</p>
</div>
</div>




<div className={`${Styles.ratingcard2} mobile-none`}>
<div className="testimonial-container">
      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="testimonialslider"
      >
        {ratingCards?.length > 0 ? (
          ratingCards.map((card, index) => (
            <SwiperSlide key={index}>
              <RatingCard
                image={card.image}
                username={card.username}
                role={card.role}
                desc={card.desc}
              /> 
            </SwiperSlide>
          ))
        ) : (
          <p>Loading testimonials...</p>
        )}
      </Swiper>

      
     
    </div>
    
</div>
<div className={`${Styles.ratingcard2} desktop-none`}>
<div className="testimonial-container">
      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        spaceBetween={30}
        slidesPerView={2}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="testimonialslider"
      >
        {ratingCards?.length > 0 ? (
          ratingCards.map((card, index) => (
            <SwiperSlide key={index}>
              <RatingCard
                image={card.image}
                username={card.username}
                role={card.role}
                desc={card.desc}
              /> 
            </SwiperSlide>
          ))
        ) : (
          <p>Loading testimonials...</p>
        )}
      </Swiper>

      
     
    </div>
    
</div>





                </div>

                <div className={Styles.arrowButton}>

<div className={`${Styles.arrowButtonLeft} swiper-button-prev`} onClick={() => swiperRef.current?.slidePrev()}><Image src="/svg-icons/arrow-left-s-line.svg" width={25}  height={25} alt="Logo" /></div>
<div className={`${Styles.arrowButtonRight} swiper-button-next `}  onClick={() => swiperRef.current?.slideNext()}><Image src="/svg-icons/arrow-right-s-line.svg" width={25}  height={25} alt="Logo" /></div>
</div>
                <div className={Styles.row3}>
<Image src={"/homefly.png"} width={70} height={86} alt="" className={Styles.homefly} />

    <a href="/#contact">Join our community </a>
    </div>
            </div>
        </section>
        </>
    )
}

export default Trustedby ;


const ratingCards = [
    {
        image: "/user1.png",
        username: "Alex R.",
        role: "Director of Sales  Tech Solutions Inc.",
        desc: "Sales Cloud completely changed our sales process, thanks to Synexc. We struggled with manual lead tracking and disorganiz",
    },
    {
        image: "/users/second-user (1).png",
        username: "Mike M.",
        role: "Director of Sales  Tech Solutions Inc.",
        desc: "With Service Cloud and automation from Synexc, our customer support team is thriving. Before, tickets were scattered across different channels..",
    },
    {
        image: "/users/second-user (2).png",
        username: "David S.",
        role: "Director of Sales  Tech Solutions Inc.",
        desc: "We wanted to launch our app on the Salesforce AppExchange, but the security review process felt like a mountain to climb. Synexc handled ..",
    },
    {
      image: "/users/second-user (1).png",
      username: "Mike M.",
        role: "Director of Sales  Tech Solutions Inc.",
        desc: "Sales Cloud completely changed our sales process, thanks to Synexc. We struggled with manual lead tracking and disorganiz",
    },
    {
      image: "/users/second-user (2).png",
      username: "David S.",
        role: "Director of Sales  Tech Solutions Inc.",
        desc: "With Service Cloud and automation from Synexc, our customer support team is thriving. Before, tickets were scattered across different channels..",
    },
    {
        image: "/user1.png",
        username: "Alex R.",
        role: "Director of Sales  Tech Solutions Inc.",
        desc: "We wanted to launch our app on the Salesforce AppExchange, but the security review process felt like a mountain to climb. Synexc handled ..",
    }
]