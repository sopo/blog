import { PropsWithChildren } from "react";

const PersonList: React.FC<PropsWithChildren> = ({ children }) => {
  return <ul role="list">{children}</ul>;
};
export default PersonList;
