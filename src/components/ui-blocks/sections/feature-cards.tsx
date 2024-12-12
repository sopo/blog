import ContainerGridCol3 from "@/components/containers/grid/container-grid-c-3";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PropsWithChildren } from "react";
import { ReactNode } from "react";
interface FeatureCardsProps {
  content: { icon: ReactNode; title: string; description: string }[];
}
const FeatureCards: React.FC<PropsWithChildren<FeatureCardsProps>> = ({
  children,
  content,
}) => {
  return (
    <ContainerGridCol3>
      <div className="col-span-full">{children}</div>
      {content.map((card) => {
        return (
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">{card.icon}</CardTitle>
            </CardHeader>
            <CardContent>
              <h4 className="title-xsmall">{card.title}</h4>
              <p className="paragraph-small-secondary">{card.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </ContainerGridCol3>
  );
};
export default FeatureCards;
