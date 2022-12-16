import Hero from "./Hero";
import Brands from "./Brands";
import Content1 from "./Content1";
import Content2 from "./Content2";
import Pricing from "./Pricing";
import Testimonial from "./Testimonial";
import CTX from "./CTA";
import Footer from "./Footer";

const Evseek = () => {
  return (
    <div className="overflow-x-hidden">
      {/* All the components for this one page application name with reference of figma design */}
      <Hero />
      <Brands />
      <Content1 />
      <Content2 />
      <Pricing />
      <Testimonial />
      <CTX />
      <Footer />
    </div>
  );
};

export default Evseek;
