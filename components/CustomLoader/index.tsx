import React from "react";
import styles from "./RotatingLoader.module.scss";

const RotatingLoader: React.FC<{ src: string; alt?: string }> = ({ src, alt = "Loading..." }) => {
  return (
    <div className={styles.loader}>
      <img src={"/svg-icons/connection-loading.svg"} width={100} height={100} alt={alt} className={styles.image} />
    </div>
  );
};

export default RotatingLoader;
