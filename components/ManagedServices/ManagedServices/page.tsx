import Image from "next/image";
import Style from "./style.module.scss"
const ManagedServicesinner = ()=>{
    return (
        <>
        <section className={Style.section}>
            <div className={Style.container}>
                <div className={Style.row}>
   <div className={Style.boxstyle}>
    <div className={Style.heading}>
    <h2><span>The Solution:</span> Salesforce Managed Services</h2> 
</div>
<div className={Style.iinerbox}>
    <div className={Style.contentbox}>
        <h3>Admin & Platform Management</h3>
        <ul>
            <li>
                <b>User & Role Management:</b>New hires, team changes, access updates all managed securely and promptly.
            </li>
            <li><b>Configuration Management:</b>Fields, objects, validations, page layouts, apps we ensure everything is intuitive and efficient.</li>
       <li><b>Release Readiness:</b>With 3 major Salesforce releases a year, we prep, test, and deploy without disruption.</li>
        </ul>
    </div>
    <div className={Style.imagebox}>
        <Image src={"/mg1.svg"} alt={""} width={422} height={422}  />
    </div>
</div>
</div>




  <div className={Style.boxstyle}>
<div className={Style.iinerbox}>
     <div className={Style.imagebox}>
        <Image src={"/mg2.svg"} alt={""} width={422} height={422}  />
    </div>
    <div className={Style.contentbox}>
        <h3>User Support & Issue Resolution</h3>
        <ul>
            <li>
              <b>Tiered Support:</b> Tier 1 for “how-to” questions, Tier 2+ for bug resolution and technical escalations.
            </li>
            <li><b>Multi-Channel Helpdesk:</b> Support via chat, email, phone, and ticketing systems, whatever works for you.</li>
       <li><b>Usage Monitoring:</b> We track adoption patterns and friction points to recommend training or workflow simplification.</li>
        </ul>
    </div>
   
</div>
</div>

  <div className={Style.boxstyle}>
<div className={Style.iinerbox}> 
    <div className={Style.contentbox}>
        <h3>Customization & Development</h3>
        <ul>
            <li>
             <b>Declarative Enhancements:</b> Lightning App Builder, Flows, Validation Rules, Record Types, done right.
            </li>
            <li><b>Programmatic Development:</b> Apex classes, Visualforce, LWC, Triggers, developed and governed to scale.</li>
       <li><b>Sandbox Governance:</b> Clean build-release-deploy cycles using appropriate environments and versioning.</li>
        </ul>
    </div>
     <div className={Style.imagebox}>
        <Image src={"/mg3.svg"} alt={""} width={422} height={422}  />
    </div>
</div>
</div>

  <div className={Style.boxstyle}>
<div className={Style.iinerbox}> 
    <div className={Style.imagebox}>
        <Image src={"/mg4.svg"} alt={""} width={422} height={422}  />
    </div>
    <div className={Style.contentbox}>
        <h3>Integration & Data Connectivity</h3>
        <ul>
            <li>
             <b>Third-Party Integrations:</b> ERPs, CTIs, e-signatures, customer portals, payment gateways, we’ve done them all.
            </li>
            <li><b>API Monitoring:</b> Make sure your integrations don’t break with updates or data volume changes.</li>
       <li><b>Real-Time Syncing:</b> Push and pull data without manual exports or duplication risks.</li>
        </ul>
    </div>
     
</div>
</div>

  <div className={Style.boxstyle}>
<div className={Style.iinerbox}> 
   
    <div className={Style.contentbox}>
        <h3>Reporting, Dashboards & Analytics</h3>
        <ul>
            <li>
           <b>KPI-Centric Dashboards:</b> For Sales, Service, Marketing, Finance, built to tell real stories, not just numbers.
            </li>
            <li><b>Custom Report Types:</b> Not just what Salesforce gives out-of-the-box, but what your leadership actually needs.</li>
       <li><b>Data Quality Audits:</b> Catch duplicates, mismatches, and drop-offs before they damage decision-making.</li>
        </ul>
    </div>
      <div className={Style.imagebox}>
        <Image src={"/mg5.svg"} alt={""} width={422} height={422}  />
    </div>
</div>
</div>
  <div className={Style.boxstyle}>
<div className={Style.iinerbox}> 
   <div className={Style.imagebox}>
        <Image src={"/mg6.svg"} alt={""} width={422} height={422}  />
    </div>
    <div className={Style.contentbox}>
        <h3>On-Demand Talent & SME Access</h3>
        <ul>
            <li>
          Salesforce Architects for scalable org structure
            </li>
            <li>Industry Experts (SMEs) who know your sector’s regulations and KPIs</li>
       <li>Specialist Developers for niche modules (CPQ, FSL, Pardot, Commerce Cloud)</li>
       <li>Advisory Level Consultants for growth strategy and digital transformation</li>
        </ul>
    </div>
      
</div>
</div>
  <div className={Style.boxstyle}>
<div className={Style.iinerbox}> 
   
    <div className={Style.contentbox}>
        <h3>Change Management & Continuous Improvement</h3>
        <ul>
            <li>
          <b>User Feedback Loops:</b> Monthly or quarterly reviews to align CRM behavior with team realities.
            </li>
            <li><b>Feature Rollouts:</b> We don’t just activate new features, we make sure they land successfully with users.</li>
       <li><b>Process Automation:</b> We spot bottlenecks before you do and fix them with Flows, approvals, alerts, and escalations.</li> 
        </ul>
    </div>
      <div className={Style.imagebox}>
        <Image src={"/mg7.svg"} alt={""} width={422} height={422}  />
    </div>
</div>
</div>
  <div className={Style.boxstyle}>
<div className={Style.iinerbox}> 
     <div className={Style.imagebox}>
        <Image src={"/mg8.svg"} alt={""} width={422} height={422}  />
    </div>
    <div className={Style.contentbox}>
        <h3>Strategy-First Operations</h3>
        <ul>
            <li>
       <b>Business Process Alignment:</b> We map Salesforce to your actual workflows—not generic best practices.
            </li>
            <li><b>Org Health Audits:</b> We scan for tech debt, clutter, and inefficiencies that slow your team down.</li>
       <li><b>Roadmapping:</b> Strategic planning of how Salesforce can support scale, automation, and experience across 6–12–24 months</li> 
        </ul>
    </div>
    
</div>
</div>


                </div>
            </div>
        </section>
        </>
    )
}
export default ManagedServicesinner;