import React from "react";
import Navbar from "@/components/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative">
      <Navbar />
      <div className="flex">
        <section className="flex min-h-screen flex-1 flex-col w-full">
          {children}
        </section>
      </div>
    </main>
  );
};

export default Layout;
