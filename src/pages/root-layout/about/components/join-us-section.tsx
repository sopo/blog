import TextCenterMediumBlock from "@/components/ui-blocks/text-blocks/text-center-medium-block";
import { Button } from "@/components/ui/button";

const JoinUsSection: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <TextCenterMediumBlock
        title="Join Us on Our Journey"
        description="Whether you're a seasoned developer, a curious beginner, or somewhere in between, there's a place for you at bitBlogs. Let's shape the future of technology together."
      />
      <Button variant="default">Get Started Today</Button>
    </div>
  );
};
export default JoinUsSection;
