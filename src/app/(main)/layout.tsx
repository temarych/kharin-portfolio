import { ReactNode } from "react";
import { Header }    from "@components/Header";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;