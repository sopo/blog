import { PropsWithChildren } from "react";

const ScreenLg: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="grid mt-12 max-w-screen-lg mx-4 gap-12 sm:mx-12 md:mx-16 lg:mx-auto">
      {children}
    </div>
  );
};
export default ScreenLg;
