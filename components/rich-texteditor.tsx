"use client";
import React from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
});

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, true] }],
    [{ font: [] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ align: [] }],
    ["link", "clean"],
  ],
};

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function RichTextEditor({ value, onChange }: Props) {
  return (
    <div className="border-stroke border rounded-[8px] bg-white">
      <ReactQuill 
        value={value}
        onChange={onChange}
        modules={modules}
        className="!shadow-none  [&_[role=toolbar]]:!border-t-0 [&_[role=toolbar]]:!border-l-0 [&_[role=toolbar]]:!border-r-0 [&_[role=toolbar]]:!border-stroke [&_[role=toolbar]]:!border-b-1 [&_.ql-container]:!border-0   [&_p]:body-medium   "
      />
    </div>
  );
}
