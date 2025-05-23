"use client";
import React, { useState } from "react";
import axios from "axios"; 
import SideBarLayout from "@/components/SideBarLayout";
import CreateBlogfname from "../CreateBlogForm";

const page = () => {
  return (
    <SideBarLayout>
      <div className="p-4">
        <div className="">
          <CreateBlogfname />
        </div>
      </div>
    </SideBarLayout>
  );
};

export default page;
