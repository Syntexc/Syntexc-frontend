import Image from "next/image";
import header from "../Header/header.module.scss"

const Header = ()=>{
    return (
        <>
        <header className={header.header}>
        <div className={header.containerbox}>
        <div className={header.row}>
                <div className={header.logo}>
                    <Image src="/Logo.png" width={280}  height={64} alt="Logo" />
                </div>
                <div className={header.nav}>
                    <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Blogs</a></li>
                    </ul>
                </div>
                <div className={header.getinquery}>
                    <a href="#" className={header.sales}>Contact sales</a>
                    <a href="#" className={header.getinquery}>get quote</a>
                </div>
                </div>
            </div>
        </header>
        </>
    )
}
export default Header;