import { Fragment, ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <Fragment>
      {children}
    </Fragment>
  );
};

export default AuthLayout;