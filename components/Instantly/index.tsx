import Image from "next/image";
import Style from "./Instantly.module.scss"

const Instantly = () => {
    return (
        <>
            <section className={Style.section}>
                <div className={Style.container}>
                    <div className={Style.row}>
                        <h3>Need Salesforce Experts? Scale Your Team Instantly.</h3>
                        <p>Get pre-vetted, certified Salesforce professionals ready to integrate into your team and accelerate your projects without the hassle of long hiring cycles.</p>
                    </div>


                    <div className={Style.row1}>
                        {boxconstentarray?.map((item, index) => {
                            return (
                                <div className={Style.box} key={index}>
                                    <div className={Style.image}>
                                        <Image src={item.image} width={60} height={60} alt={item.content} />
                                    </div>
                                    <div className={Style.content}>
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Instantly;









const boxconstentarray = [
    {
        image: "/Component1.svg",
        content: "Flexible contract-based staffing"
    },
    {
        image: "/Component2.svg",
        content: "Certified experts in every Salesforce cloud"
    },
    {
        image: "/Component3.svg",
        content: "Faster deployment and immediate impact"
    },
]