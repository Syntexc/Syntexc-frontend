import Image from "next/image"
import Style from "./style.module.scss"

const WhyMigrate = () => {
    return (
        <>


            <section className={Style.section}>
                <div className={Style.containerabout}>
                    <div className={Style.contentbox}>
                        <h2>Why Migrate with Synexc?</h2>
                        <div className={Style.pre}>
                            <p>Moving to Salesforce isn’t just a technical task. It’s a transformation.</p>
                            <p>Done right, data migration empowers faster decisions, cleaner insights, and smoother operations.</p>
                            <h3>Done wrong? It becomes a bottleneck.</h3>
                            <h4>At Synexc, we help you migrate with meaning, every field mapped, every record refined.</h4>
                        </div>
                    </div>
                   

                     <div className={Style.imageWrapper}>
   
        <Image
          src="/new-public-banner.svg"
          alt="5566766_2892184"
          width={681}
          height={455}
          priority
          className={Style.backgroundImage}
        />
        <div className={Style.groupBook}>
                               <Image src="/group-book.svg"  width={150} height={150} alt="test" className={Style.fixedBooks} />
                        </div>
 <div className={Style.flyingBooks}>
       <Image src="/book.svg" className={`${Style.flyingFileOne} ${Style.delay1}`}  width={100} height={100} alt="test" />
<Image src="/book.svg" className={`${Style.flyingFile} ${Style.delay2}`} width={100} height={100} alt="test" />
 </div>
 
      </div>
                </div>

                <div className={Style.contentblock}>
                    <h3>Our 6-Step <span>Migration Framework</span></h3>

                    <div className={Style.stepbox}>
                        <div className={Style.layera}>
                            <Image src={"/Group39670larleft.svg"} alt={""} width={273} height={484} />
                        </div>
                        <div className={Style.stepboxheading}>
                            <h2>Step 1: <span>Plan Like a Strategist</span></h2>
                            <div className={Style.stepsub}>
                                <h4>“Failing to plan is planning to fail”</h4>
                                <h5> We start with questions, not tools.</h5>
                            </div>
                        </div>
                        <div className={Style.stepboxcontent}>
                            <div className={Style.content}>
                                <ul>
                                    <li>What’s working in your current system?</li>
                                    <li>What needs to be left behind?</li>
                                    <li>What does your ideal Salesforce org look like?</li>
                                </ul>
                                <p>We define clear goals, map source fields to Salesforce structures, and align every step to your business outcomes.</p>
                            </div>
                            <div className={Style.stepimage}>
                                <Image src={"/plan1.svg"} alt={"plan1"} width={165} height={165} />
                            </div>
                        </div>
                    </div>
                    <div className={Style.stepbox}>
                        <div className={Style.layerb}>
                            <Image src={"/Group39671larleft.svg"} alt={""} width={273} height={484} />
                        </div>
                        <div className={Style.stepboxheading}>
                            <h2>Step 2: <span>Cleanse Like a Pro</span></h2>
                            <div className={Style.stepsub}>
                                <h4>“Clean data = clean decisions”</h4>
                                <h5> We eliminate duplicates, fix broken formats, and ensure your < br/> data is trustworthy before it even touches Salesforce.</h5>
                            </div>
                        </div>
                        <div className={Style.stepboxcontent}>
                            <div className={Style.content}>
                                <ul>
                                    <li>Consistent formats</li>
                                    <li>Accurate fields</li>
                                    <li>No clutter</li>
                                </ul>
                               
                            </div>
                            <div className={Style.stepimage}>
                                <Image src={"/browser1.svg"} alt={"browser1"} width={165} height={165} />
                            </div>
                        </div>
                    </div>


                    <div className={Style.stepbox}>
                        <div className={Style.layera}>
                            <Image src={"/Group39672.svg"} alt={""} width={273} height={484} />
                        </div>
                        <div className={Style.stepboxheading}>
                            <h2>Step 3: <span>Pick the Right Tools</span></h2>
                            <div className={Style.stepsub}>
                                <h4>“One size never fits all.”</h4>
                                <h5>From Salesforce’s native tools to advanced ETL platforms, we choose <br /> the solution that fits your scale, complexity, and use case.</h5>
                            </div>
                        </div>
                        <div className={Style.stepboxcontent}>
                            <div className={Style.content}>
                                <ul>
                                    <li>Small uploads? Try Data Import Wizard</li>
                                    <li>Complex mappings? Data Loader</li>
                                    <li>Enterprise-grade needs? We tap into <br /> tools like MuleSoft & Informatica.</li>
                                </ul>
                               
                            </div>
                            <div className={Style.stepimage}>
                                <Image src={"/repair-tools.svg"} alt={"browser1"} width={165} height={165} />
                            </div>
                        </div>
                    </div>
                    <div className={Style.stepbox}>
                        <div className={Style.layerb}>
                            <Image src={"/Groupd39672.svg"} alt={""} width={273} height={484} />
                        </div>
                        <div className={Style.stepboxheading}>
                            <h2>Step 4: <span>Test Like It’s Live</span></h2>
                            <div className={Style.stepsub}>
                                <h4>“We simulate before we execute.”</h4>
                                <h5> A pilot migration with a subset of your data helps us validate:</h5>
                            </div>
                        </div>
                        <div className={Style.stepboxcontent}>
                            <div className={Style.content}>
                                <ul>
                                    <li>Field mapping accuracy</li>
                                    <li>Functional workflows</li>
                                    <li>Data integrity</li>
                                </ul>
                                <p>You see real results. Before the real move.</p>
                               
                            </div>
                            <div className={Style.stepimage}>
                                <Image src={"/testing.svg"} alt={"browser1"} width={165} height={165} />
                            </div>
                        </div>
                    </div>
                    <div className={Style.stepbox}>
                        <div className={Style.layera}>
                            <Image src={"/Group39670larleft.svg"} alt={""} width={194} height={383} />
                        </div>
                        <div className={Style.stepboxheading}>
                            <h2>Step 5: <span>Go Live Without Chaos</span></h2>
                            <div className={Style.stepsub}>
                                <h4>Migrations don’t have to mean mayhem.</h4> 
                            </div>
                        </div>
                        <div className={Style.stepboxcontent}>
                            <div className={Style.content}>
                                <ul>
                                    <li>We schedule smart (usually off-hours), monitor obsessively, and ensure a zero-surprise launch.</li>
                                    <li>Your business keeps running. Your data starts performing.</li> 
                                </ul>
                              
                               
                            </div>
                            <div className={Style.stepimage}>
                                <Image src={"/launch.svg"} alt={"browser1"} width={165} height={165} />
                            </div>
                        </div>
                    </div>
                    <div className={Style.stepbox}>
                         
                        <div className={Style.stepboxheading}>
                            <h2>Step 6: <span>Train, Verify, and Celebrate</span></h2>
                            <div className={Style.stepsub}>
                                <h4>“A migration isn’t complete until your team is confident.”</h4> 
                            </div>
                        </div>
                        <div className={Style.stepboxcontent}>
                            <div className={Style.content}>
                                <p>We help you verify the migration success, guide your users through the new setup, and make sure your business hits the ground running.</p>
                            <p><strong>Plus, we don’t walk away. Our post-migration support ensures you're never in the dark.</strong></p>  
                               
                            </div>
                            <div className={Style.stepimage}>
                                <Image src={"/party 1.svg"} alt={"browser1"} width={165} height={165} />
                            </div>
                        </div>
                    </div>
                </div>

            </section>


        </>
    )
}

export default WhyMigrate