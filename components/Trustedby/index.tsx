import RatingCard from "../RatingCard";
import Styles from "./trustedby.module.scss"
const Trustedby = () =>{
    return(
        <>
        <section className={Styles.trustedbybox}>
            <div className={Styles.container}>
                <div className={Styles.row}>
                <h2>Trusted by Industry Giants. <span>Chosen by Innovators.</span></h2>
                <p>From Fortune 500 companies to high-growth disruptors, businesses turn to Synexc for next-level Salesforce solutions that drive impact, efficiency, and measurable success.</p>
                </div>

                <div className={Styles.row1}>
<div className={Styles.cScore}>
    <h3>97<span>%</span></h3>
<div className={Styles.cont}>
<h4>CSAT Score</h4>
<p>Because great solutions create great experiences.</p>
</div>
</div>




<div className={Styles.ratingcard2}>
    <RatingCard 
    image={"/user1.png"}
    username="Alex R."
    role="Director of Sales  Tech Solutions Inc."
    desc="Sales Cloud completely changed our sales process, thanks to Synexc. We struggled with manual lead tracking and disorganiz"
    />
    <RatingCard 
    image={"/user1.png"}
    username="Alex R."
    role="Director of Sales  Tech Solutions Inc."
    desc="With Service Cloud and automation from Synexc, our customer support team is thriving. Before, tickets were scattered across different channels.."
    />
    <RatingCard 
    image={"/user1.png"}
    username="Alex R."
    role="Director of Sales  Tech Solutions Inc."
    desc="We wanted to launch our app on the Salesforce AppExchange, but the security review process felt like a mountain to climb. Synexc handled .."
    />
</div>




                </div>


                <div className={Styles.row3}>
    <a href="">Join our community </a>
    </div>
            </div>
        </section>
        </>
    )
}

export default Trustedby ;