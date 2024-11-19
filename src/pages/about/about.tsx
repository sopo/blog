import ScreenLg from "@/components/containers/page-containers/screen-lg";
import JoinUsSection from "./join-us-section";
import OurStorySection from "./our-story";
import OurMissionSection from "./our-mission-section";
import AboutUsSection from "./about-us-section";
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
