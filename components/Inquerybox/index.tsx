"use client"
import { useState } from "react";
import  Style  from "./inquery.module.scss";
import axios from "axios";
import RotatingLoader from "../CustomLoader";




interface InqueryBoxProp extends React.HTMLAttributes<HTMLDivElement> {
   boxcontainer?: "full" | "container"
}

const InqueryBox = ({  boxcontainer , ...rest}:InqueryBoxProp) =>{
    const [loader, setLoader] = useState(false);
  const [finalModel, setFinalModel] = useState(false);

  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    description: "",
  });


  console.log("inputValue", { inputValue });

  const handleSendInquiry = async () => {
    const nesteddata = {
      firstName: inputValue?.firstName,
      lastName: inputValue?.lastName,
      email: inputValue?.email,
      phone: inputValue?.mobile,
      description: inputValue?.description,
    };

    try {
      setLoader(true);
      // const response = await axios.post("/api/inquiry", nesteddata);

      const emailRes = await axios.post("/api/sendemail", {
        firstName: inputValue?.firstName,
        lastName: inputValue?.lastName,
        email: inputValue?.email,
        message: inputValue?.description,
        phone: inputValue?.mobile,
        work_experience: inputValue?.description,
      });
      console.log("emailRes", emailRes);

      if (emailRes) {
        setInputValue({
          firstName: "",
          lastName: "",
          mobile: "",
          email: "",
          description: "",
        });
        setLoader(false);
        setFinalModel(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCLose = () => {
    setFinalModel(false);
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };
    return(
        <>
        <div className={` ${Style.box} ${boxcontainer==="full" && Style.full }   `} {...rest}>
        {finalModel && (
          <div className={Style.modalForm}>
            <div className={Style.modalContent}>
              <button
                className={Style.closeButton}
                onClick={() => setFinalModel(false)}
              >
                &times;
              </button>
              <div className={Style.thanksPopup}>
                <h1>Thank you for submitting your details</h1>
                <p>We will review your details and get back to you shortly</p>
              </div>
              <span className={Style.buttonClose} onClick={handleCLose}>
                Close
              </span>
            </div>
          </div>
        )}
        <div className={Style.innerbox}>
            <ul>
                <li>
                <div className={Style.inboxgroup}>
                    <label htmlFor="First Name">First Name:</label>
                   <input type="text" id="First Name" placeholder="John" 
                   value={inputValue.firstName}
                   onChange={(e) =>
                     setInputValue({
                       ...inputValue,
                       firstName: e.target.value,
                     })
                   }
                   />
                </div>
                </li>
                <li>
                <div className={Style.inboxgroup}>
                    <label htmlFor="Last Name">Last Name:</label>
                   <input type="text" id="Last Name"  placeholder="Smith"
                   value={inputValue.lastName}
                   onChange={(e) =>
                     setInputValue({ ...inputValue, lastName: e.target.value })
                   }
                   />
                </div>
                </li>
                <li>
                <div className={Style.inboxgroup}>
                    <label htmlFor="Email">Email:</label>
                   <input type="text" id="Email" placeholder="John.smith@xyz.com" 
                   value={inputValue.email}
                   onChange={(e) =>
                     setInputValue({ ...inputValue, email: e.target.value })
                   }
                   />
                </div>
                </li>
                <li>
                <div className={Style.inboxgroup}>
                    <label htmlFor="Phone Number">Phone Number:</label>
                   <input type="text" id="Phone Number" placeholder="1234567890"
                   value={inputValue.mobile}
                   onChange={(e) =>
                     setInputValue({ ...inputValue, mobile: e.target.value })
                   }
                   />
                </div>
                </li>
            </ul>
            <div className={Style.inboxgroup}>
                    <label htmlFor="Phone Number">Message:</label>
                   <textarea placeholder="Enter your message here....."
                   value={inputValue.description}
                   onChange={(e: any) =>
                     setInputValue({
                       ...inputValue,
                       description: e.target.value,
                     })
                   }
                   ></textarea>
                </div>

                <div className={Style.checkbox}>
                    <input type="checkbox"  id="I’m not a robot"/>
                    <label htmlFor="I’m not a robot">I’m not a robot</label>
                </div>
                <div className={Style.button}> 
                {loader ? (
                    <>
                      <button type="submit">
                        <RotatingLoader src={""} />
                      </button>
                    </>
                  ) : (
                    <>
                      <button type="submit" onClick={handleSendInquiry}>
                      Submit now
                      </button>
                    </>
                  )}
                </div>
        </div>

        </div>
        </>
    )
}
export default InqueryBox;