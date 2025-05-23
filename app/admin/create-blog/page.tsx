"use client";
import React, { useState } from "react";
// import { Input, Textarea, Button } from "@nextui-org/react";
import axios from "axios"; 
import CreateBlogfname from "../blog/CreateBlogForm";
import SideBarLayout from "@/components/SideBarLayout";

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
