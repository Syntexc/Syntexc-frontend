"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./MrSyncPopup.module.scss";
import { useRouter } from "next/navigation";

const MrSyncPopup = () => {
    const router = useRouter();
  const [show, setShow] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300 && !closed) {
        setShow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [closed]);  

  const closePopup = () => {
    setShow(false);
    setClosed(true);  
  };

  if (!show) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.closeBtn} onClick={closePopup}>✕</button>

        <div className={styles.content}>
          <p>
            Hey there, <br /> <span>I’m Mr. Sync!</span>
          </p>
          <p className={styles.crmText}>Your CRM spirit guide at Synexc.</p>

          <div className={styles.badge}>
            <span>Ready to</span>
          </div>

          <h3>
            Transform the way <br /> your team works?
          </h3>

          <p className={styles.book}>
            Book your free demo now and let’s move in sync.
          </p>

          <button className={styles.demoBtn} onClick={()=> router.push("/contact-us")}>Book Demo</button>
        </div>

        <div className={styles.imageWrap}>
          <Image
            src="/popupimage.jpeg"
            alt="Mr. Sync"
            width={200}
            height={350}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default MrSyncPopup;
