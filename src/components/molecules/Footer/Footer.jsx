import Container from "../../foundations/container/container";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles["footer-main"]}>
      <Container>
        <div className={styles["footer-card"]}>
          <div className={styles["quick-links"]}>
            <p className={styles["ptag"]}>Quick Links</p>
            <div className={styles["p-content"]}>
              <p className={styles["p-text"]}>About Us</p>
              <p className={styles["p-text"]}>Contact Us</p>
              <p className={styles["p-text"]}>Privacy Policy</p>
              <p className={styles["p-text"]}>Terms & Conditions</p>
            </div>
          </div>

          <div className={styles["quick-links"]}>
            <p className={styles["ptag"]}>Courses</p>
            <div className={styles["p-content"]}>
              <p className={styles["p-text"]}>Login</p>
              <p className={styles["p-text"]}>Download</p>
              <p className={styles["p-text"]}>All Courses</p>
            </div>
          </div>

          <div className={styles["quick-links"]}>
            <p className={styles["ptag"]}>Contact Us</p>
            <div className={styles["p-content"]}>
              <p className={styles["p-text"]}>contact@email.com</p>
              <div className={styles["social-img"]}>
                <img src="/images/facebook.svg" alt="" />
                <img src="/images/instagram.svg" alt="" />
              </div>
              <form>
                <input
                  className={styles["email"]}
                  type="text"
                  placeholder="Email Address"
                />
                <button className={styles["subscribe"]}>Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        <p className={styles["p-footer"]}>
          This website is developed by GTCoding &copy; 2021
        </p>
      </Container>
    </div>
  );
};

export default Footer;
