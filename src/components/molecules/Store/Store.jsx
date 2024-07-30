import styles from "./Store.module.css";
import Container from "../../foundations/container/container";

const Student = () => {
  return (
    <Container>
      <div className={styles["store-card"]}>
        <div>
          <p className={styles["store-text"]}>Get Our App</p>
          <p className={styles["store-para"]}>
            You can use our App for better experience on smartphones
          </p>
        </div>
        <div className={styles["store-sources"]}>
          <a className={styles["card-app"]} href="/">
            <img src="/images/App.svg" alt="" />
            App Store
          </a>

          <a className={styles["card-app"]} href="/">
            <img src="/images/playstore.svg" alt="" />
            Google Play
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Student;
