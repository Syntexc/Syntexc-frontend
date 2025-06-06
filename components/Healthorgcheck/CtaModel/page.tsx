import Style from "./style.module.scss"

interface NewProps {
    setOpen: (open: boolean) => void;
}
const CtaModel = ({setOpen}:NewProps) => {
    return(
        <>

        <section className={Style.section}>
            <div className={Style.container}>
                <div className={Style.row}>
                    <div className={Style.content}>
                    <h2>Book Your Salesforce Org <span>Health Check Today</span></h2>
                    <h3>Don’t wait for a data breach to take action. </h3>
                    <h4> Secure your Salesforce environment, elevate your performance, and earn your users’ trust, one setting at a time.   
 </h4> 
                    </div>
                    <div className={Style.btn}>
            <a onClick={() => setOpen(true)}>Contact Us!</a>
        </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default CtaModel;