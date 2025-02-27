import Layout from "../../components/layout/Layout";
import Hero1 from "../../components/sections/Hero1";
import ServicesHome from "../../components/sections/international-services/services-home";
import Product1 from "../../components/sections/Product1";
import Service1 from "../../components/sections/Service1";
import TextSLider1 from "../../components/sections/TextSLider1";

export default function Page() {
  return (
    <Layout headerStyle={1} footerStyle={1}>
      <div className="position-relative overflow-hidden">
        <div className="line-shape cus-z-1 first w-100 h-100 d-flex flex-wrap" />
        <Hero1 />
        <Product1 />
        <ServicesHome />
        <Service1 />
        <TextSLider1 />
        {/* <Testimonial1 /> */}
        {/* <Blog1 /> */}
      </div>
    </Layout>
  );
}
