import Layout from "../components/layout/Layout";
import Blog1 from "../components/sections/Blog1";
import Hero1 from "../components/sections/Hero1";
import Product1 from "../components/sections/Product1";
import Service1 from "../components/sections/Service1";
import Testimonial1 from "../components/sections/Testimonial1";
import TextSLider1 from "../components/sections/TextSLider1";

export default function Home() {
  return (
    <Layout headerStyle={1} footerStyle={1}>
      <div className="position-relative overflow-hidden">
        <div className="line-shape cus-z-1 first w-100 h-100 d-flex flex-wrap" />
        <Hero1 />
        <Product1 />
        <Service1 />
        <TextSLider1 />
        {/* <CaseStudy1 /> */}
        {/* <Watch1 /> */}
        {/* <Team1 /> */}
        {/* <TextSLider2 /> */}
        <Testimonial1 />
        <Blog1 />
        {/* <TextSLider3 /> */}
      </div>
    </Layout>
  );
}
