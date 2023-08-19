"use client";
import React, { useState } from "react";
import Header   from "@/Components/Header";

const page = () => {
 
 const [marks, setCount] = useState(80);
  return (
  <>
      {/* <h1> My Marks were {marks}</h1>
      <button onClick={() => setCount(marks + 1)}>Add Marks</button> */}

      <>
      <Header />
      </>
  </>
  );
}

export default page;