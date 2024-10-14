import Features from "@/components/Features";
import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import ContactUs from "../components/ContactUs";
import Facts from "../components/Facts";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LogoCloud from "../components/LogoCloud";
import Navbar from "../components/Navbar";
import Testimonial from "../components/Testimonial";

export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <LogoCloud />
      <AboutUs />
      <Features />
      <Cards />
      <Testimonial />
      <ContactUs />
      <Footer />
    </>
  );
}
