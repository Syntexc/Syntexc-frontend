import Style from "./style.module.scss"
const CRMWithout = () => {
    return(
        <>

        <section className={Style.section}>
            <div className={Style.container}>
                <div className={Style.row}>
                    <div className={Style.content}>
                    <h2>Ready to migrate <span>your CRM without the mess?</span></h2>
                    <h3>Let’s Talk.</h3>
                    <h4>Make the move with confidence. Make it with Synexc.</h4>
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

export default CRMWithout;