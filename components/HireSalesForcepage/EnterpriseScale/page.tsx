import Style from "./style.module.scss"

interface NewProps {
    setOpen: (open: boolean) => void;
}
const EnterpriseScale = ({setOpen}:NewProps) => {
    return(
        <>

        <section className={Style.section}>
            <div className={Style.container}>
                <div className={Style.row}>
                    <div className={Style.content}>
                    <h2>From Startup Sprints to Enterprise Scale </h2>
                    <h4>No matter your size or Salesforce stage, we plug in where you need us most.</h4>
                    <h3>“Think of us as your extended team, only faster, sharper, and on-demand.” </h3>
                    </div>
                    <div className={Style.btn}>
            <a onClick={() => setOpen(true)}>Let’s connect and discuss <b> your project needs.</b></a>
        </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default EnterpriseScale;