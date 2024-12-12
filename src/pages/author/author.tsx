import ScreenLg from "@/components/containers/page-containers/screen-lg";
import AuthorInfoSection from "./author-info-section";
import TabsSection from "./tabs-section";

const Author: React.FC = () => {
  return (
    <ScreenLg>
      <AuthorInfoSection />
      <TabsSection />
    </ScreenLg>
  );
};
export default Author;
