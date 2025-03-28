import  Style  from "./inquery.module.scss";
const InqueryBox = () =>{
    return(
        <>
        <div className={Style.box}>
        <div className={Style.innerbox}>
            <ul>
                <li>
                <div className={Style.inboxgroup}>
                    <label htmlFor="First Name">First Name:</label>
                   <input type="text" id="First Name" placeholder="John" />
                </div>
                </li>
                <li>
                <div className={Style.inboxgroup}>
                    <label htmlFor="Last Name">Last Name:</label>
                   <input type="text" id="Last Name"  placeholder="Smith" />
                </div>
                </li>
                <li>
                <div className={Style.inboxgroup}>
                    <label htmlFor="Email">Email:</label>
                   <input type="text" id="Email" placeholder="John.smith@xyz.com" />
                </div>
                </li>
                <li>
                <div className={Style.inboxgroup}>
                    <label htmlFor="Phone Number">Phone Number:</label>
                   <input type="text" id="Phone Number" placeholder="1234567890" />
                </div>
                </li>
            </ul>
            <div className={Style.inboxgroup}>
                    <label htmlFor="Phone Number">Message:</label>
                   <textarea placeholder="Enter your message here....."></textarea>
                </div>

                <div className={Style.checkbox}>
                    <input type="checkbox"  id="I’m not a robot"/>
                    <label htmlFor="I’m not a robot">I’m not a robot</label>
                </div>
                <div className={Style.button}>
                <button>submit now</button>
                </div>
        </div>

        </div>
        </>
    )
}
export default InqueryBox;