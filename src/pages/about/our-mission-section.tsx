import ContainerGridCol2 from "@/components/containers/grid/container-grid-c-2";
import TextRightMediumBlock from "@/components/ui-blocks/text-blocks/text-right-medium-block";

const OurMissionSection: React.FC = () => {
  return (
    <ContainerGridCol2>
      <TextRightMediumBlock
        title="Our mission"
        description="At bitBlogs, we believe in the power of shared knowledge. Our mission is to create a platform where tech enthusiasts, developers, and innovators can come together to share ideas, learn from each other, and push the boundaries of what's possible in the world of technology."
      />
      <img
        src="https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?"
        className="rounded-xl object-cover w-auto]"
      />
    </ContainerGridCol2>
  );
};
export default OurMissionSection;
