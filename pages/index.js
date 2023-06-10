import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Bootcamp from "../components/Bootcamp";

export default function Home() {
  return (
    <>
      <SeoHead title='Loka Academy Indonesia' />
      <Layout>
        <Hero />
        <Feature />
        <Bootcamp/>
      </Layout>
    </>
  );
}
