import Container from "../../foundations/container/container";
import "./hero-main.css";

const HeroMain = () => {
  return (
    <Container>
      <div className="hero">
        <div className="hero-content">
          <h1>Learn the art of Game Dev</h1>
          <p>
            This is a comprehensive course on Game Development. You will learn
            everything from generating an idea to publishing your games to
            different platforms.
          </p>
          <a href="/">
            {editpencilicon}
            <p>Enroll Now</p>
          </a>
        </div>

        <div className="hero-visuals">
          <div className="hero-visuals--desc-card-1">
            <p>32K</p>
            <span>Students Enrolled</span>
          </div>
          <div className="hero-visuals--desc-card-2">
            <p>
              4.7 <span>{staricon}</span>
            </p>
            <span>Overall rating</span>
          </div>
          <img className="hero-visuals--img" src="/images/lady-smiling.svg" />
        </div>
      </div>
    </Container>
  );
};

const editpencilicon = (
  <svg
    width="18"
    height="19"
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.6726 2.82743C15.3351 2.48998 14.8773 2.30042 14.4 2.30042C13.9228 2.30042 13.465 2.48998 13.1274 2.82743L6.30005 9.65483V12.2H8.84525L15.6726 5.37263C16.0101 5.03508 16.1997 4.57733 16.1997 4.10003C16.1997 3.62274 16.0101 3.16498 15.6726 2.82743Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1.80005 5.89998C1.80005 5.42259 1.98969 4.96475 2.32726 4.62718C2.66482 4.28962 3.12266 4.09998 3.60005 4.09998H7.20005C7.43874 4.09998 7.66766 4.1948 7.83644 4.36358C8.00523 4.53236 8.10005 4.76128 8.10005 4.99998C8.10005 5.23867 8.00523 5.46759 7.83644 5.63637C7.66766 5.80515 7.43874 5.89998 7.20005 5.89998H3.60005V14.9H12.6V11.3C12.6 11.0613 12.6949 10.8324 12.8637 10.6636C13.0324 10.4948 13.2614 10.4 13.5 10.4C13.7387 10.4 13.9677 10.4948 14.1364 10.6636C14.3052 10.8324 14.4 11.0613 14.4 11.3V14.9C14.4 15.3774 14.2104 15.8352 13.8728 16.1728C13.5353 16.5103 13.0774 16.7 12.6 16.7H3.60005C3.12266 16.7 2.66482 16.5103 2.32726 16.1728C1.98969 15.8352 1.80005 15.3774 1.80005 14.9V5.89998Z"
      fill="white"
    />
  </svg>
);

const staricon = (
  <svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M42.625 17.325H26.8812L22 2.0625L17.1187 17.325H1.375L14.0938 26.7438L9.28125 41.9375L22 32.5187L34.7188 41.9375L29.8375 26.675L42.625 17.325Z"
      fill="#FFCE31"
    />
  </svg>
);

export default HeroMain;
