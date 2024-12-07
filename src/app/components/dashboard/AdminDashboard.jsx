"use client"
import * as React from "react";
import {Switch} from "@mui/material";
import Select from "react-select";
import ApplicationStatusAndMessage from "@/app/components/dashboard/ApplicationStatusAndMessage";
import CoPCard from "@/app/components/dashboard/CopCard";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Notification from "@/app/components/dashboard/Notification";

export default function AdminDashboard() {
    const [checked, setChecked] = React.useState(true);
    const [Application, setApplication] = React.useState(null);
    const [Status, setStatus] = React.useState(null);
    const [Type, setType] = React.useState(null);
    const [inputType, setInputType] = React.useState("text");

    const handleFocus = () => {
        setInputType("date");
    };

    const handleBlur = () => {
        setInputType("text");
    };

    // const Select = dynamic(() => import('react-select') );

    // applicationoption
    const applicationarr = [
        {
            label: "CoP",
            value: "cop",
        },
        {
            label: "CoC",
            value: "coc",
        },
        {
            label: "Application",
            value: "Application",
        },
    ];
    const statusarr = [
        {
            label: "this is ldsfsdabel",
            value: "12fsd34",
        },
        {
            label: "this is sdfsdflabel",
            value: "12sdf34",
        },
        {
            label: "this isdfdss label",
            value: "12fs34",
        },
        {
            label: "this is lasdfsdfbel",
            value: "12sdf34",
        },
        {
            label: "this is lsdfsdfabel",
            value: "1sfs234",
        },
    ];
    const typearr = [
        {
            label: "label1",
            value: "value1",
        },
        {
            label: "label2",
            value: "shjgdf1234",
        },
        {
            label: "label3",
            value: "value3",
        },
        {
            label: "label4",
            value: "value4",
        },
        {
            label: "label5",
            value: "value5",
        },
    ];

    const handleApplication = (select) => {
        setApplication(select);
    };
    const handleStatus = (select) => {
        setStatus(select);
    };
    const handleType = (select) => {
        setType(select);
    };
    //dashboard data for box message,aplication status

    const dashboardBox = [
        {
            label: "মোট বার্তা",
            value: "1",
            icon: "/icom/email.svg",
            bg: "bg-[#009FEE]",
        },
        {
            label: "মোট আবেদন",
            value: "12395",
            icon: "/icom/email.svg",
            bg: "bg-[#561AE9]",
        },
        {
            label: "বিবেচনাধীন আবেদন",
            value: "8",
            icon: "/icom/email.svg",
            bg: "bg-[#F1443D]",
        },
        {
            label: "অনুমোদিত আবেদন",
            value: "12387",
            icon: "/icom/email.svg",
            bg: "bg-[#7EBA4E]",
        },
    ];

    //fake data for design CoP Tab Header  Section
    const cop_card = [
        {
            name: "IC মূল্যায়ন",
            total: "14277",
            done: "13448",
            result: "95%",
            background: "bg-[#7EBA4E]",
        },
        {
            name: "IC মৌখিক",
            total: "14277",
            done: "13448",
            result: "95%",
            pending: "690",
            background: "bg-[#9724a0]",
        },
        {
            name: "IC সার্টিফিকেট",
            total: "14277",
            done: "13448",
            result: "95%",
            pending: "82349",
            background: "bg-[#009fee]",
        },
    ];


    const handleChange = () => {
        setChecked((state) => !state);
    };

    return (
        <div className="bg-white p-4">
            <div className="flex justify-between">
                <p className="font-bold text-lg ">ড্যাশবোর্ড</p>

                <div className="flex font-bold items-center">
                    <p className="px-4">ফিল্টার</p>
                    {checked ? "চালু" : "বন্ধ"}
                    <Switch
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ "aria-label": "controlled" }}
                    ></Switch>
                </div>
            </div>

            <div
                className={`${
                    checked ? "" : "opacity-0 translate-x-full hidden"
                } box   opacity-100 transition-opacity duration-500 delay-2000 pt-4 `}
            >
                <div
                    className={`relative  gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-gray-300 p-4  gap-x-6 z-20 `}
                >
                    <span className="bg-gray-300 w-5 h-5 absolute -top-[10px] z-10 rotate-45 right-5"></span>

                    <div className="w-full">
                        <Select
                            //array define in 24
                            options={applicationarr}
                            onChange={handleApplication}
                            value={Application}
                            isMulti={false}
                            placeholder="আবেদন"
                        />
                    </div>

                    <div className="w-full ">
                        <Select
                            //array define in 38
                            options={statusarr}
                            onChange={handleStatus}
                            defaultValue={Status}
                            isMulti={false}
                            placeholder="অবস্থা"
                        />
                    </div>

                    <div className="w-full ">
                        <Select
                            //array define in 56
                            options={typearr}
                            onChange={handleType}
                            value={Type}
                            isMulti={false}
                            placeholder="টাইপ"
                        />
                    </div>

                    <div className="w-full">
                        <input
                            type={inputType}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            className="rounded border border-gray-350 text-gray-500 font-semibold w-full text-xs h-full p-2 outline-none"
                            placeholder="তারিখ"
                        />
                    </div>
                </div>

                <div className="flex flex-end text-sm justify-end py-4 space-x-2 xl:space-x-3 2xl:space-x-4">
                    <button className="bg-gray-600 text-white px-5 py-2 rounded font-bold  w-24 xl:w-28">
                        রিসেট
                    </button>
                    <button className="bg-primaryColor text-white px-5 py-2 rounded font-bold w-24 xl:w-28">
                        অনুসন্ধান
                    </button>
                </div>
            </div>

            {/*Dashboard Card BOx message ANd Applicaiton status  */}
            <div className="grid grid-cols-1 pt-6 gap-2 md:grid-cols-2 md:gap-y-2  md:gap-x-6 xl:gap-x-5 xl:gap-y-4  xl:grid-cols-4 2xl:gap-10 2xl:grid-cols-4">
                {dashboardBox?.map((item) => (
                    <ApplicationStatusAndMessage key={item.label} details={item} />
                ))}
            </div>

            {/* CoP Section */}
            <div className="grid grid-cols-1 pt-4   gap-2 md:gap-10  md:grid-cols-2 xl:gap-8 xl:grid-cols-3 xl:pt-16">
                {cop_card?.map((item) => (
                    <CoPCard key={item?.name} details={item} />
                ))}
            </div>

            {/*APPLICAION RATE chart box  */}
            <Grid
                container
                spacing={3}
                sx={{
                    pt: 2,
                }}
            >
                <Grid item xs={12} md={7} lg={7}>
                    <p className="py-3 text-gray-600 font-semibold">আবেদনের হার</p>
                    <div className="shadow p-4 rounded flex justify-center relative">
                        <div className="absolute top-5 left-5">
                            <div className="flex gap-4">
                                <div className="bg-green-600 text-[9px] p-1 px-3 text-white rounded">
                                    বিবেচনাধীন
                                </div>
                                <div className="bg-sky-600 text-[9px] p-1 px-3 text-white rounded">
                                    সম্পন্ন
                                </div>
                            </div>
                        </div>
                        <div className="w-[300px] h-[300px] rounded-full bg-sky-600 overflow-hidden relative">
                            <p className="font-bold text-4xl absolute bottom-[80px] text-white right-[80px]">
                                85%
                            </p>
                            <div className="w-[150px] h-[150px] bg-green-600 relative">
                                <p className="absolute bottom-9 text-white right-8 text-4xl font-bold">
                                    15%
                                </p>
                            </div>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={12} md={5} lg={5}>
                    <p className="py-3 font-semibold text-gray-600">সর্বশেষ বিজ্ঞপ্তি</p>
                    <Paper
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <Notification />
                        <Notification />
                        <Notification />
                        <Notification />
                        <Notification />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}