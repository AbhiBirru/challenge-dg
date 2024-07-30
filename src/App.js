import Courses from "./components/molecules/Courses/Courses";
import Header from "./components/molecules/Header/Header";
import Store from "./components/molecules/Store/Store";
import Testimonials from "./components/molecules/testimonial";
import HeroMain from "./components/sections/hero-main";
import Footer from "./components/molecules/Footer/Footer";

const App = () => {
  return (
    <main>
      <div className="hero-main">
        <Header />
        <HeroMain />
      </div>
      <Testimonials />
      <Courses />
      <Store />
      <Footer />
    </main>
  );
};

export default App;
