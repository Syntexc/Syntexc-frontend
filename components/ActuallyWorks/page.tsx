import Style from "./actuallyworks.module.scss"
const ActuallyWorks = () =>{
    return(
        <>
        <section className={Style.section}>
            <div  className={Style.container}>
                <div className={Style.row}>
                <div className={Style.box1}>
                    <h2>Ready to Build Something That Actually Works?</h2>
                    <p>Let’s turn your business challenges into smart, scalable solutions.</p>
                     </div>

<a href="#">Get Started. <span> its for free!</span></a>

                </div>
            </div>
        </section>
        </>
    )
}
export default ActuallyWorks;