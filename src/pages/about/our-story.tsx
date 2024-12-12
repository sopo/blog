import LowLevelCardContainer from "@/components/containers/card-containers/low-level-card-containers/low-level-card-container";
import TextRightMediumBlock from "@/components/ui-blocks/text-blocks/text-right-medium-block";

const OurStorySection: React.FC = () => {
  return (
    <LowLevelCardContainer>
      <TextRightMediumBlock
        title="Our Story"
        description="Founded in 2023, bitBlogs started as a small project by a group of passionate developers who wanted to create a space for sharing their experiences and learning from others. What began as a simple blog quickly grew into a thriving community of tech enthusiasts from all around the world.
Today, bitBlogs is proud to be a leading platform for technology-focused content, fostering innovation and collaboration in the ever-evolving world of tech."
      />
    </LowLevelCardContainer>
  );
};
export default OurStorySection;
