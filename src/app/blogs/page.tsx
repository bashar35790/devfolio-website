import React from "react";
import Blog from "../../../utility/Blog";

const page = () => {
  return (
    <div className="container max-w-7xl mx-auto px-20">
      <h2 className="text-3xl font-bold mb-12 text-center">
       Blog Posts
      </h2>
      <Blog />
    </div>
  );
};

export default page;
