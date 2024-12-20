import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import TagBlock from "@/components/ui-blocks/tag-block";
import { getPopularTags } from "@/utils/static data/popular-tags";
const TabsSection: React.FC = () => {
  const { t } = useTranslation();
  const popularTags = getPopularTags(t);
  return (
    <Tabs defaultValue="articles" className="w-full">
      <TabsList className="w-full">
        <TabsTrigger value="articles">Articles</TabsTrigger>
        <TabsTrigger value="about">About</TabsTrigger>
      </TabsList>
      <TabsContent value="articles">{/* <CardsSection /> */}</TabsContent>
      <TabsContent value="about">
        <Card>
          <CardHeader>
            <CardTitle>
              <h3 className="title-small">About Jane Doe</h3>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <p className="paragraph-medium-secondary">
              Jane Doe is a seasoned software engineer with over a decade of
              experience in web development. She specializes in JavaScript,
              React, and Node.js, and has a keen interest in emerging
              technologies like AI and blockchain. Jane is a frequent speaker at
              tech conferences and contributes to various open-source projects.
            </p>
            <h6 className="title-xsmall">Skills</h6>
            <TagBlock variant="secondary" content={popularTags} />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
export default TabsSection;
