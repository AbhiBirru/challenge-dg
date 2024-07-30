import Container from "../../foundations/container/container";
import styles from "./Courses.module.css";

const coursesdata = [
  {
    img: "/images/toy.png",
    title: "Gaming Design Essentials",
    hrs: "8HRS",
  },
  {
    img: "/images/toy-game.jpg",
    title: "Unity Game Engine Fundamentals",
    hrs: "8HRS",
  },
];

const Courses = () => {
  return (
    <div className={styles["courses"]}>
      <Container>
        <div className={styles["cont"]}>
          <div className={styles["courses-main"]}>
            <p>Our Courses</p>
            <div className={styles["container"]}>
              {coursesdata.map((item) => (
                <div key={item.title} className={styles["left-container"]}>
                  <img
                    className={styles["toy"]}
                    src={item.img}
                    alt={item.title}
                  />
                  <div>
                    <p className={styles["toy-text"]}>{item.title}</p>
                    <p className={styles["hrs"]}>{item.hrs}</p>
                  </div>
                  <div className={styles["toy-border"]}></div>
                </div>
              ))}
            </div>

            <a className={styles["all-courses"]} href="/">
              All Courses
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Courses;
