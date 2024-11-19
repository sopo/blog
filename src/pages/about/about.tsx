import ScreenLg from "@/components/containers/page-containers/screen-lg";
import JoinUsSection from "./about-components/join-us-section";
import OurStorySection from "./about-components/our-story";
import OurMissionSection from "./about-components/our-mission-section";
import AboutUsSection from "./about-components/about-us-section";
const About: React.FC = () => {

  return (
    <div>
      <ScreenLg>
       <AboutUsSection />
        <OurMissionSection />
        <OurStorySection />
        <JoinUsSection />
      </ScreenLg>
    </div>
  );
};
export default About;
