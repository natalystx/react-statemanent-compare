import React from "react";
import dynamic from "next/dynamic";

const index = () => {
  const Home = dynamic(() => import("../components/Home"), {
    ssr: false,
  });
  return <Home />;
};

export default index;
