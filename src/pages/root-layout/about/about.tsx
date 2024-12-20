import ScreenLg from "@/components/containers/page-containers/screen-lg";
import JoinUsSection from "./components/join-us-section";
import OurStorySection from "./components/our-story";
import OurMissionSection from "./components/our-mission-section";
import AboutUsSection from "./components/about-us-section";
import WhatWeOffer from "./components/what-we-offer";
const About: React.FC = () => {
  return (
    <div>
      <ScreenLg>
        <AboutUsSection />
        <OurMissionSection />
        <WhatWeOffer />
        <OurStorySection />
        <JoinUsSection />
      </ScreenLg>
    </div>
  );
};
export default About;
