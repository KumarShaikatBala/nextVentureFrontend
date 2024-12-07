"use client";
import DocumentsUpload from "@/app/components/profile/DocumentsUpload";
import OthersInformation from "@/app/components/profile/OthersInformation";
import PersonalInformation from "@/app/components/profile/PersonalInformation";
import { useState } from "react";

export default function Profile() {
  const [activeTab, setActiveTab] = useState(1);
  const [others, setOthers] = useState({});
  const [documents, setDocuments] = useState({});

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <>
      <div className="border ">
        <div className="bg-[#effaff]">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => handleTabClick(1)}
              className={`${
                activeTab === 1 ? "border-blue-500" : "border-transparent"
              } text-gray-700 py-4 px-5 border-b-2 focus:outline-none`}
            >
              ব্যক্তিগত তথ্য
            </button>

            <button
              onClick={() => handleTabClick(2)}
              className={`${
                activeTab === 2 ? "border-blue-500" : "border-transparent"
              } text-gray-700 py-4 px-5 border-b-2 focus:outline-none`}
            >
              অন্যান্য
            </button>

            <button
              onClick={() => handleTabClick(3)}
              className={`${
                activeTab === 3 ? "border-blue-500" : "border-transparent"
              } text-gray-700 py-4 px-5 border-b-2 focus:outline-none`}
            >
              নথিপত্র
            </button>
          </div>
        </div>

        <div className="py-6 px-5">
          {activeTab === 1 && (
            <div>
              <PersonalInformation />
            </div>
          )}
          {activeTab === 2 && (
            <div>
              <OthersInformation />
            </div>
          )}
          {activeTab === 3 && (
            <div>
              <DocumentsUpload />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
