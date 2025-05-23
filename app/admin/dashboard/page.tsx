"use client";
import SideBarLayout from "@/components/SideBarLayout";
import Image from "next/image";
import React, { useState } from "react"; 

const NewDashboard = () => {
  return (
    <>
      <SideBarLayout>
        <div
        style={{
          textAlign: "center",
          fontSize: "2rem",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          height: "100vh",
        }}
        >Welcome to synexc</div>
      </SideBarLayout>
    </>
  );
};
export default NewDashboard;
