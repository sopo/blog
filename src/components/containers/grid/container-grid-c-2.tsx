import { PropsWithChildren } from "react";

const ContainerGridCol2: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="grid md:grid-cols-2 gap-6 items-center">{children}</div>
  );
};
export default ContainerGridCol2;
