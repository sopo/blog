import { PropsWithChildren } from "react";

const AuthSection: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="grid mt-12 max-w-md mx-4 gap-12 sm:mx-12 md:mx-16 lg:mx-auto">
      {children}
    </div>
  );
};
export default AuthSection;
