import Style from "./style.module.scss"

interface NewProps {
    setOpen: (open: boolean) => void;
}
const GoLightning = ({setOpen}:NewProps) => {
    return(
        <>

        <section className={Style.section}>
            <div className={Style.container}>
                <div className={Style.row}>
                    <div className={Style.content}>
                    <h2>Ready to Go <span>Lightning?</span></h2>
                    <h3>If you're looking to modernize your Salesforce experience or migrate from Classic, Synexc is your go-to team.</h3>
                    <h4>We don't just flip the switch, we ensure your team is ready to shine.  
 </h4>
                    <h4> 
Let’s turn on the Lightning.</h4>
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

export default GoLightning;