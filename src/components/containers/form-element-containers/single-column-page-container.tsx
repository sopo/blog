import { PropsWithChildren } from "react";

const SingleColumnPageContainer: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return <div className="flex items-center justify-center">{children}</div>;
};
export default SingleColumnPageContainer;
