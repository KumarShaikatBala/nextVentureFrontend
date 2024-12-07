"use client";
import React from "react";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";

function Print() {
  return (
    <button
      onClick={() => window?.print()}
      className="px-3 hover:ring-2 py-1.5 text-xs flex gap-2 items-center rounded bg-primaryColor text-white print:hidden "
    >
      <p className="text-xs">প্রিন্ট</p>
      <span className="text-xs">
        <LocalPrintshopOutlinedIcon />
      </span>
    </button>
  );
}

export default Print;
