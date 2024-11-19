import ContainerGridCol2 from "@/components/containers/grid/container-grid-c-2";
import ScreenLg from "@/components/containers/page-containers/screen-lg";
import TextCenterLargeBlock from "@/components/ui-blocks/text-blocks/text-center-large-block";
import TextRightMediumBlock from "@/components/ui-blocks/text-blocks/text-right-medium-block";
import FeatureCards from "@/components/ui-blocks/sections/feature-cards";
import TextCenterMediumBlock from "@/components/ui-blocks/text-blocks/text-center-medium-block";
const About: React.FC = () => {
  const content = [
    {
      title: "card title 1",
      description: "card content1",
    },
    {
      title: "card title 2",
      description: "card content2",
    },
    {
      title: "card title 3",
      description: "card content3",
    },
  ];
  return (
    <div>
      <ScreenLg>
        <TextCenterLargeBlock
          title="About us"
          description="Empowering tech enthusiasts to share knowledge and inspire innovation."
        />
        <ContainerGridCol2>
          <TextRightMediumBlock
            title="About us"
            description="Empowering tech enthusiasts to share knowledge and inspire innovation."
          />
          <img
            src="https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?"
            className="rounded-xl object-cover w-auto]"
          />
        </ContainerGridCol2>
        <TextRightMediumBlock
          title="About us"
          description="Founded in 2023, bitBlogs started as a small project by a group of passionate developers who wanted to create a space for sharing their experiences and learning from others. What began as a simple blog quickly grew into a thriving community of tech enthusiasts from all around the world.
Today, bitBlogs is proud to be a leading platform for technology-focused content, fostering innovation and collaboration in the ever-evolving world of tech."
        />
        <FeatureCards content={content}>
          <TextCenterMediumBlock title="section title" description="" />
        </FeatureCards>
      </ScreenLg>
    </div>
  );
};
export default About;
