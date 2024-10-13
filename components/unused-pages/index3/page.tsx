import Layout from "../../layout/Layout";
import About2 from "../../sections/About2";
import Blog3 from "../../sections/Blog3";
import CaseStudy3 from "../../sections/CaseStudy3";
import Hero3 from "../../sections/Hero3";
import Pricing1 from "../../sections/Pricing1";
import Project1 from "../../sections/Project1";
import Team3 from "../../sections/Team3";
import Testimonial3 from "../../sections/Testimonial3";
import TextSlider6 from "../../sections/TextSlider6";
export default function Home() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={3}>
        <div className="position-relative overflow-hidden">
          <div className="line-shape cus-z-1 first w-100 h-100 d-flex flex-wrap" />
          <Hero3 />
          <About2 />
          <CaseStudy3 />
          <Team3 />
          <Project1 />
          <Pricing1 />
          <TextSlider6 />
          <Testimonial3 />
          <Blog3 />
        </div>
      </Layout>
    </>
  );
}
