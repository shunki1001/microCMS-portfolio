import { useEffect, useState } from "react";
import styles from "./FirstLogo.module.css";

const FirstLogo = () => {
  const [isLogo, setIsLogo] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLogo(false);
    }, 4000);
  }, []);
  return (
    <>
      {isLogo && (
        <div id={styles.first_overlay}>
          <div id={styles.logo}>
            <div id={styles.upper}>
              <img src="/images/red.png" />
            </div>
            <div id={styles.lower}>
              <img src="/images/red.png" />
            </div>
            <div id={styles.right}>
              <img src="/images/longer-blue.png" />
            </div>
            <div id={styles.left}>
              <img src="/images/shorter-blue.png" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FirstLogo;
