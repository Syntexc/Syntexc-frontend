import Style from "./style.module.scss"

interface NewProps {
    setOpen: (open: boolean) => void;
}
const DataCrm = ({setOpen}:NewProps) => {
    return(
        <>

        <section className={Style.section}>
            <div className={Style.container}>
                <div className={Style.row}>
                    <div className={Style.content}>
                    <h2>Ready to Build <span>Your Connected Future?</span></h2>
                    <h3>Don’t let disconnected systems hold you back.</h3>
                    <h4>Let’s turn your Salesforce platform into the unstoppable growth engine it’s meant to be.</h4>
                    </div>
                    <div className={Style.btn}>
            <a onClick={() => setOpen(true)}>Book a  <b>consultation now</b></a>
        </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default DataCrm;