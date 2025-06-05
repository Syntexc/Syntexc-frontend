import Style from "./style.module.scss"

interface NewProps {
    setOpen: (open: boolean) => void;
}
const Certainty = ({setOpen}:NewProps) => {
    return(
        <>

        <section className={Style.section}>
            <div className={Style.container}>
                <div className={Style.row}>
                    <div className={Style.content}>
                    <h2>Ready to Scale with <span>Certainty? </span></h2>
                    
                 <div>   <h4>Let Synexc architect your Salesforce release lifecycle. </h4>
 <h4>Because stable releases lead to unstoppable growth. </h4></div>
                    </div>
                    <div className={Style.btn}>
            <a onClick={() => setOpen(true)}>Talk to a <b>Release Expert</b></a>
            <a onClick={() => setOpen(true)}>Book a <b>Free</b> Audit</a>
        </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Certainty;