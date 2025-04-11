import Style from "./builtto.module.scss"
const Builtto = ()=>{
    return(
        <>
  <section className={Style.section}>
    <div className={Style.container}>
        <h2>Built to <span>Scale With You</span></h2>
        <p>Whether you're a fast-scaling startup looking to implement Salesforce for the first time, or a mature enterprise seeking optimization and integration Synexc meets you where you are.</p>
        <p><strong>And we stay with you for the long haul.</strong></p>
        <p>We don't do transactional consulting. We build relationships. <br /> Because at the heart of every powerful solution is trust and that's where we begin.</p>
        <div className={Style.container3}>
        <a href="#">Explore More <b>&nbsp;Insights</b> </a>
    </div>
    </div>
  </section>
        </>
    )
}
export default Builtto