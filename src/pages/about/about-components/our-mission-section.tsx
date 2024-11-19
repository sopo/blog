import ContainerGridCol2 from "@/components/containers/grid/container-grid-c-2"
import TextRightMediumBlock from "@/components/ui-blocks/text-blocks/text-right-medium-block"

const OurMissionSection:React.FC = () => {
    return(
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

    )
}
export default OurMissionSection