import CardsSection from "./cards-section";
import CardsAside from "./cards-aside";
import Screen2Xl from "@/components/containers/page-containers/screen-2xl";
import ContainerGridCol3 from "@/components/containers/grid/container-grid-c-3";
export default function Home() {

  return (
  
    // <div className="px-4 flex-grow">
    //   <div className="container mx-auto flex flex-col md:flex-row gap-8">
<Screen2Xl>
    <ContainerGridCol3>
 
        <CardsSection />
       <CardsAside />
     
       </ContainerGridCol3>
       </Screen2Xl>
  

  );
}
