"use client";
import React, { useState } from "react";
import Header   from "@/Components/Header";
import BasicLayout from "@/Components/BasicLayout";

const page = () => {
 
 const [marks, setCount] = useState(80);
  return (
  <>
      {/* <h1> My Marks were {marks}</h1> */}
      {/* <button className="bg-gray-400 px-3 py-2 rounded mt-5" onClick={() => setCount(marks + 1)}>Add Marks</button> */}
      <>
      <Header />
      <BasicLayout/>
      </>
  </>
  );
}

export default page;