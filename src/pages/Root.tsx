import { Outlet } from "react-router-dom";
import Header from "@/components/ui/header";
import Footer from "@/components/ui-blocks/footer";
export default function Root() {

  return (
    <div className="bg-color-surface">
      <Header />
     <Outlet />
     <Footer />

    </div>
  );
}
