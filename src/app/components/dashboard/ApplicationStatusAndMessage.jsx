import React from "react";
import Image from "next/image";
import MailIcon from "@mui/icons-material/Mail";
import ViewListIcon from "@mui/icons-material/ViewList";
import LoopIcon from "@mui/icons-material/Loop";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function ApplicationStatusAndMessage({ details }) {
  return (
    <div
      className={`w-full flex  grow rounded justify-between p-2 ${details.bg}`}
    >
      {/* <Image
        src="/icon/mailwhite.svg"
        width={100}
        height={100}
        alt={details.label}
        placeholder={"blur"}
        blurDataURL={"icon/mailwhite.svg"}
      /> */}

      <div className=" flex justify-between w-full">
        {details.label === "মোট বার্তা" ? (
          <MailIcon sx={{ fontSize: "85px", color: "white" }} />
        ) : (
          ""
        )}
        {details.label === "মোট আবেদন" ? (
          <ViewListIcon sx={{ fontSize: "85px", color: "white" }} />
        ) : (
          ""
        )}
        {details.label === "বিবেচনাধীন আবেদন" ? (
          <LoopIcon sx={{ fontSize: "85px", color: "white" }} />
        ) : (
          ""
        )}
        {details.label === "অনুমোদিত আবেদন" ? (
          <CheckCircleOutlineIcon sx={{ fontSize: "85px", color: "white" }} />
        ) : (
          ""
        )}
        <div className="p-2 grow flex flex-col text-right text-white">
          <p className="text-base font-normal  2xl:text-xl">{details.label}</p>
          <span className="font-medium text-xl p-2">{details.value}</span>
        </div>
      </div>
    </div>
  );
}
