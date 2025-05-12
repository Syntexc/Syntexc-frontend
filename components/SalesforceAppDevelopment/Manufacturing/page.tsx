import Style from "./style.module.scss"

const Manufacturing = () => {
    return(
        <>
          <section className={Style.section}>
            <div className={Style.container}>
                <div className={Style.row}>
                    <div className={Style.content}>
                    <h2>Whether You’re in <span> Real Estate, Manufacturing, Healthcare, Finance, or E-commerce...</span></h2>
                    <h3>Your CRM should help your business thrive—not hold it back.</h3>
                    <h4>We know your industry. We know Salesforce. And we know how to connect the two <br /> in a way that drives actual results.</h4>
                    </div>
                    <div className={Style.btn}>
            <a href="#">Book a  <b>consultation now</b></a>
        </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Manufacturing;