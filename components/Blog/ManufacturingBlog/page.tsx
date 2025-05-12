import Style from "./style.module.scss"

const ManufacturingBlog = () => {
    return(
        <>
          <section className={Style.section}>
            <div className={Style.container}>
                <div className={Style.row}>
                    <div className={Style.content}>
                    <h2>We don’t just follow<span> Salesforce evolution
                    We help shape it.</span></h2>
                    <h4>Want to keep up with the latest in platform innovation, customer success stories,<br />
                      and Synexc-grade strategy? You’re in the right place</h4>
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
export default ManufacturingBlog;