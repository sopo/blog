import { Outlet } from "react-router-dom";
import Header from "@/components/ui/header";
export default function Root() {

  return (
    <div>
      <Header />
     <Outlet />

    </div>
  );
}
