import FeatureCards from "@/components/ui-blocks/sections/feature-cards"
import TextCenterMediumBlock from "@/components/ui-blocks/text-blocks/text-center-medium-block"
const WhatWeOffer:React.FC = () => {
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
    return(
        <FeatureCards content={content}>
        <TextCenterMediumBlock title="section title" description="" />
      </FeatureCards>
    )
}
export default WhatWeOffer