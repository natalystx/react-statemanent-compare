import React from "react";
import ContentSection from "../ContentSection";
import Footer from "../Footer";
import Navbar from "../Navbar";
import TodosSection from "../TodosSection";

const Home = () => {
  console.log("Home");

  return (
    <div className="w-full flex flex-col h-full min-h-screen">
      <Navbar />
      <ContentSection>
        <h1 className="w-full text-center">Jotai</h1>
        <TodosSection />
      </ContentSection>
      <Footer />
    </div>
  );
};

export default Home;
