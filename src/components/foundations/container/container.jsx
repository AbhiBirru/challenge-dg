import "./container.css";

const Container = ({ children }) => {
  return (
    <div className="container-main">
      <div className="container">{children}</div>
    </div>
  );
};

export default Container;
