import ScreenLg from "@/components/containers/page-containers/screen-lg";
import AuthorInfoSection from "./components/author-info-section";
import TabsSection from "./components/tabs-section";


const Author: React.FC = () => {
  return (
    <ScreenLg>
      <AuthorInfoSection />
      <TabsSection />
    </ScreenLg>
  );
};
export default Author;
