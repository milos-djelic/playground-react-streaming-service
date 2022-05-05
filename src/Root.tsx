import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Root = ({ children }: Props) => {
  return (
    <>
      {children}
    </>
  );
}

export default Root;