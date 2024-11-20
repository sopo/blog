import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CardsSection from "../home/cards-section";

const TabsSection: React.FC = () => {
  return (
    <Tabs defaultValue="articles" className="w-full">
      <TabsList className="w-full">
        <TabsTrigger value="articles">Articles</TabsTrigger>
        <TabsTrigger value="about">About</TabsTrigger>
      </TabsList>
      <TabsContent value="articles">
       <CardsSection />
      </TabsContent>
      <TabsContent value="about">Change your password here.</TabsContent>
    </Tabs>
  );
};
export default TabsSection;
