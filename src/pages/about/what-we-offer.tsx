import FeatureCards from "@/components/ui-blocks/sections/feature-cards"
import TextCenterMediumBlock from "@/components/ui-blocks/text-blocks/text-center-medium-block"
import { BookOpen, Users, Zap } from "lucide-react";
const WhatWeOffer:React.FC = () => {

    const content = [
        { icon: <BookOpen className="h-[2.2rem] w-[2.2rem]"/>,
          title: "Rich Content",
          description: "Access a wide range of articles, tutorials, and insights on the latest tech trends and best practices.",
        },
        { icon: <Users className="h-[2.2rem] w-[2.2rem]" />,
          title: "Vibrant Community",
          description: "Connect with like-minded individuals, share your knowledge, and grow your professional network.",
        },
        { icon: <Zap className="h-[2.2rem] w-[2.2rem]" />,
          title: "Cutting-edge Topics",
          description: "Stay ahead of the curve with content covering emerging technologies and innovative solutions.",
        },
      ];
    return(
        <FeatureCards content={content}>
        <TextCenterMediumBlock title="What We Offer" description="" />
      </FeatureCards>
    )
}
export default WhatWeOffer