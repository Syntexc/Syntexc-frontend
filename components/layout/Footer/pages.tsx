import Image from "next/image";
import footer from "../Footer/footer.module.scss"
const Footer = ()=>{
    return (
        <>
        <footer className={footer.footer}>
            <div className={footer.container}>
                <div className={footer.row}>
                <div className={footer.col1}>
                    <div className={footer.widgets}>
                       <div className={footer.footerlogo}>
                         {/* <Image src={"/footerlogo.png"} width={314} height={78} alt="footerlogo" className={footer.logo} /> */}
                         </div>
                        <ul className={footer.contactdet}>
                            <li>
                                <span className={footer.icon}>
                                <Image src={"/map-marker-outline.svg"} width={20} height={20} alt=" Offices: Atlanta, GA | Noida, India" />
                                </span>
                                <p>
                                Offices: Bhutani Cyber Park, Tower B,<br/> block- C, 6th Floor, Sector 62 Noida
                                </p>
                            </li>
                            <li>
                                <span className={footer.icon}>
                                <Image src={"/phone-outline.svg"} width={20} height={20} alt="email" />
                                </span>
                                <p>
                                contact@synexc.com
                                </p>
                            </li>
                            <li>
                                <span className={footer.icon}>
                                <Image src={"/email-fast-outline.svg"} width={20} height={20} alt="contact number" />
                                </span>
                                <p>
                                +91 9810512585
                                </p>
                            </li>
                        </ul>

                        <div className={footer.sociallink}>
<ul>
    <li>
        <a href="https://www.instagram.com/synexc_global/?next=%2F&hl=en">
            <Image src={"/instagram-new.png"} width={20} height={20} alt="instagram" />
        </a>
    </li>
    <li>
        <a href="https://www.facebook.com/profile.php?id=61573616079229">
            <Image src={"/facebook-new.png"} width={14} height={22} alt="facebook" />
        </a>
    </li>
    <li>
        <a href="https://www.linkedin.com/company/synexc/about/?viewAsMember=true">
            <Image src={"/linkedin-new.png"} width={25} height={25} alt="youtube" />
        </a>
    </li>
    <li>
        <a href="https://www.linkedin.com/company/synexc/about/?viewAsMember=true">
            <Image src={"/twitter-new.png"} width={25} height={25} alt="youtube" />
        </a>
    </li>
</ul>
                        </div>
                    </div>
                    </div>
                <div className={footer.col2}>

                            <div className={footer.innerbox}>
                                <div className={footer.col3}>
                                <p className={footer.headingF}>Find us on</p>

                                    <ul>{footerlink1arry?.map((item, index) => {
                                        return (
                                            <>
                                                <li key={index}><a href={item?.href}>{item.link}</a></li>
                                            </>
                                        )
                                    })}</ul>

                                </div>
                                <div className={footer.col3}>
                                    <p className={footer.headingF}>Quick Links</p>
                                    <ul>
                                        
                                        {footerlink2arry?.map((item, index) => {
                                        return (
                                            <>
                                                <li key={index}><a href="#">{item.link}</a></li>
                                            </>
                                        )
                                    })}</ul>
                                </div>
                                {/* <div className={footer.col3}>
                                    <ul>{footerlink2arry?.map((item, index) => {
                                        return (
                                            <>
                                                <li key={index}><a href="#">{item.link}</a></li>
                                            </>
                                        )
                                    })}</ul>
                                </div> */}
                            </div>



                    </div>
               
                </div>
                <div className={footer.row2}>
                    <p>Copyright © 2025 synexc.com, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
        </>
    )
}
export default Footer;




const footerlink1arry = [
    {link:"Upwork" , href:"#"},
    {link:"Linkedin", href:"#contact"},
    {link:"Appexchange" , href:"#about"},
]

const footerlink2arry = [
    {link:"Blogs" , href:"#blogs"}, 
    {link:"Our Team" , href:"#blogs"}, 
    // {link:"FAQ" , href:"#"},
    {link:"Contact Us", href:"#contact"},
    {link:"Privacy Policy" , href:"#about"},
]