import React from "react";

type ContentSectionProps = {
  children: JSX.Element | JSX.Element[];
};

const ContentSection = ({ children }: ContentSectionProps) => {
  console.log("ContentSection");

  return <div className="w-full min-h-screen">{children}</div>;
};

export default ContentSection;
