import React from "react";
import Header from "../__shared_one_time/Header/Header";
import Footer from "../__shared_one_time/Footer/Footer";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
