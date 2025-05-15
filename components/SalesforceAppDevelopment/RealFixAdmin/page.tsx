import Image from "next/image";
import Style from "./style.module.scss"
const RealFixAdmin = () => {
    return (
        <>
            <section className={Style.section}>
                <div className={Style.cardview}>
                    <h2>The Real Fix: <span>Admin + Developer Support That Understands Your Business</span></h2>
                    <p>At Synexc, we bring together Salesforce Admin Support and Developer Support on-demand, managed, or fully embedded in your team.</p>
                    <p>Because Salesforce doesn’t fail on its own. It fails when no one’s steering it.</p>

                    <div className={Style.image}>
                        <Image src="/Frame.svg" width={500} height={388} alt="Frame" />
                    </div>
                </div>



                <div className={Style.powerhouseouter}>
                    <h2>Our Two-Punch <span>Powerhouse</span></h2>
                    <div className={Style.powerhouse}>
                        <div className={Style.powerhousebox}>
                            <div className={Style.heading}>
                                <h3>Salesforce Admin Support</h3>
                                <div className={Style.sub}>
                                    <h4>Your front-line Salesforce team.</h4>
                                    <h5>Admins keep your org running, clean, and useful every single day.</h5>
                                </div>
                            </div>

                            <div className={Style.powerhousecontent}>
                                <div className={Style.content}>
                                    <p>We handle:</p>
                                    <ul>
                                        <li>User management & access control </li>
                                        <li>Reports, dashboards, and data visualisation</li>
                                        <li>Automation with Flow, Process Builder, and Workflow Rules</li>
                                        <li>Data imports, cleanup, and deduplication</li>
                                        <li>Page layouts, custom fields, approval processes</li>
                                        <li>Day-to-day troubleshooting for your team</li>
                                        <li>Sandboxes, basic deployments, and release management</li>
                                    </ul>
                                    <p>With Synexc Admins, you get a responsive, knowledgeable partner who ensures Salesforce actually supports your team—not the other way around.</p>
                                </div>
                                <div className={Style.image}>
                                    <Image src="/Frame427319328.png" width={527} height={397} alt="Frame427319328" />
                                </div>
                            </div>
                        </div>
                    
                        <div className={Style.powerhousebox}>
                            <div className={Style.heading}>
                                <h3>Salesforce Developer Support</h3>
                                <div className={Style.sub}>
                                    <h4>When your needs go beyond point-and-click.</h4>
                                    <h5>Our certified Salesforce Developers extend your platform with powerful custom code, deep integrations, and robust automation.</h5>
                                </div>
                            </div>

                            <div className={`${Style.powerhousecontent} ${Style.powerhousecontent2} `}>
                            <div className={Style.image}>
                                    <Image src="/Frame 4273193282.png" width={527} height={397} alt="Frame427319328" />
                                </div>
                                <div className={Style.content}>
                                    <p>We handle:</p>
                                    <ul>
                                        <li>Apex development (triggers, classes, batch jobs)</li> 
                                        <li>Lightning Web Components (LWC) & Aura components</li>
                                        <li>Custom APIs & third-party integrationS.</li>
                                        <li>Complex business logic not possible in Flo</li>
                                        <li>Custom apps, portals, and UI enhancement</li>
                                        <li>Performance tuning and code optimizatio</li>
                                        <li>DevOps pipelines with tools like Gearset and Copado</li>
                                    </ul>
                                    <p>Synexc Developers don’t just code—they collaborate. We solve for the business need, not just the ticket.</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>


               
            </section>
        </>
    )
}
export default RealFixAdmin;