import Style from "./style.module.scss"
const JustReading = ()=>{
    return(
        <>
         <section className={Style.section}>
            <div className={Style.container}>
                <div className={Style.row}>
                    <div className={Style.content}>
                    <h2>Want More Than Just Reading?</h2>
                    <h4>Talk to our consultants about how we can implement what you just read. </h4>
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
export default JustReading;