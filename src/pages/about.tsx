import ContainerGridCol2 from "@/components/containers/grid/container-grid-c-2";
import ScreenLg from "@/components/containers/page-containers/screen-lg";
import TextCenterLargeBlock from "@/components/ui-blocks/text-center-large-block";
import TextRightMediumBlock from "@/components/ui-blocks/text-right-medium-block";

const About: React.FC = () => {
  return (
    <div>
     <ScreenLg>
    <TextCenterLargeBlock title="About us" description="Empowering tech enthusiasts to share knowledge and inspire innovation." />
      <ContainerGridCol2>
      <TextRightMediumBlock title="About us" description="Empowering tech enthusiasts to share knowledge and inspire innovation." />
      <img
                  src="https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?"
                  className="rounded-xl object-cover w-auto]"
                />
      </ContainerGridCol2>
      <TextRightMediumBlock title="About us" description="Founded in 2023, bitBlogs started as a small project by a group of passionate developers who wanted to create a space for sharing their experiences and learning from others. What began as a simple blog quickly grew into a thriving community of tech enthusiasts from all around the world.

Today, bitBlogs is proud to be a leading platform for technology-focused content, fostering innovation and collaboration in the ever-evolving world of tech." />
      </ScreenLg>
    </div>
  );
};
export default About;
