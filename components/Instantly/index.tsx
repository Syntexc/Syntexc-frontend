import Image from "next/image";
import Style from "./Instantly.module.scss"

const Instantly = () => {
    return (
        <>
            <section className={Style.section}>
                <div className={Style.container}>
                    <div className={Style.row}>
                        <h3>Hire Salesforce Consultants – Fast & Flexible</h3>
                        <p>Need Salesforce experts without long hiring cycles? Synexc provides contract-based Salesforce consultants for immediate impact.</p>
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
        content: "Flexible engagement models"
    },
    {
        image: "/Component2.svg",
        content: "Certified Salesforce consultants in every cloud "
    },
    {
        image: "/Component3.svg",
        content: "Faster deployment and proven expertise"
    },
]