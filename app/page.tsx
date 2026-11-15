import Image from "next/image";
import Nav from "./Nav";
import Footer from "./Footer";
import VideoBackground from "./pageContent/VideoBackground";
import FirstSection from "./pageContent/FirstSection";
import SecondSection from "./pageContent/SecondSection";
import ThirdSection from "./pageContent/ThirdSection";
import FourthSection from "./pageContent/FourthSection";
import FifthSection from "./pageContent/FifthSection";
import SixthSection from "./pageContent/SixthSection";
import Container from "@/components/helpers/Container";
import SeventhSection from "./pageContent/SeventhSection";
import EightSection from "./pageContent/EightSection";

export default function Home() {
  return (
    <span>
      <Nav />
      <VideoBackground />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EightSection />
      <Footer />
    </span>
  );
}
