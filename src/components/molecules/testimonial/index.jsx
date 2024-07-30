import Container from "../../foundations/container/container";
import styles from "./testimonial.module.css";

const Store = () => {
  return (
    <div className={styles["wrapper"]}>
      <Container>
        <div className={styles["testimonials"]}>
          <div className={styles["testimonials-main"]}>
            <img src="/images/testimonials.png" />

            <div className={styles["testimonials-main--content"]}>
              <div>
                <p>What our students say</p>
                <span>
                  All students get access to all the videos and also the source
                  code of the projects.
                  <br /> You will also have access to a private Discord channel
                  where you can discuss your doubts.
                </span>
              </div>
              <a href="/" className={styles["testimonials-a"]}>
                Learn More
              </a>
            </div>
          </div>
          <div className={styles["testimonials-link"]}>
            <a href="/" className={styles["testimonials-a-tab"]}>
              Learn More
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Store;
