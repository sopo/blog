import { Outlet } from "react-router-dom";
import Header from "@/components/ui/header";
export default function Root() {

  return (
    <div className="bg-white dark:bg-gray-900">
      <Header />
     <Outlet />

    </div>
  );
}
