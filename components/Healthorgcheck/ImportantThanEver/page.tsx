"use client"
import Image from "next/image"
import Style from "./style.module.scss"
const ImportantThanEver = () => {
    return (
        <>
            <section className={Style.section}>

                <h3>Why It’s More Important Than Ever </h3>


                <div className={Style.cons}>
                    <div className={Style.contentbox}>
                        {/* <h4>Why It’s More Important Than Ever </h4> */}
                        <ul>
                            <li>Cyber threats are real. Misconfigured settings are open doors to data leaks.</li>
                            <li>User trust is non-negotiable. One lapse in security = long-term brand damage. </li>
                            <li>Salesforce is evolving. Your org settings should too, with every update and new feature.</li>
                            <li>Audit & compliance demands are rising. A secure org today saves you from penalties tomorrow. </li>
                        </ul>
                    </div>
                    <div className={Style.imagebox}>
                        <Image src={"/Group3239682.svg"} width={417} height={254} alt="Group239682" />
                    </div>
                </div>
            </section>
        </>
    )
}
export default ImportantThanEver;