"use client";
import Loading from "@/app/components/common/Loading";
import axios from "@/axios/axiosInstance";
import customFetch from "@/fetch/api";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import {Avatar, Button, TextField} from "@mui/material";
import {styled} from "@mui/material/styles";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import Image from "next/image";
import ImageBackgroundDetector from "@/app/components/ImageBackgroundDetector";

const UserProfile = () => {
    const router = useRouter();
    const [user, setPersonal] = useState({});
    const [loading, setLoading] = useState(false);
    const [isModified, setIsModified] = useState(false);
    const [url, seturl] = useState(null);
    const [userData, setUserData] = useState({
        phone: user?.phone || "",
        email: user?.email || "",
        image: user?.image || "",
        presentAddress: user?.candidate_info?.present_address || "",
    });

    useEffect(() => {
        const profile = async () => {
            setLoading(true);
            try {
                customFetch("auth/info")
                    .then((response) => {
                        setPersonal(response.data);
                        
                        setUserData({
                            ...userData,
                            phone: response.data.phone,
                            email: response.data.email,
                            presentAddress: response.data.candidate_info?.present_address,
                        });
                        setLoading(false);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } catch (e) {
                console.log(e);
            }
        };
        profile();
    }, []);

    useEffect(() => {
        const {phone, email, candidate_info} = user;
        const isModifiedMobile = userData.phone !== phone;
        const isModifiedEmail = userData.email !== email;
        const isModifiedAddress =
            userData.presentAddress !== candidate_info?.present_address;

        setIsModified(isModifiedMobile || isModifiedEmail || isModifiedAddress);
    }, [user, userData.phone, userData.email, userData.presentAddress]);

    const VisuallyHiddenInput = styled("input")({
        clip: "rect(0 0 0 0)",
        clipPath: "inset(50%)",
        height: 1,
        overflow: "hidden",
        position: "absolute",
        bottom: 0,
        left: 0,
        whiteSpace: "nowrap",
        width: 1,
    });
    const handleFile = (event) => {
        const File = event.target.files[0];
        const Url = URL.createObjectURL(File);
        seturl(Url);
        setUserData({...userData, image: File});
        setIsModified(true);
    };     
    const saveChanges = () => {
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append("phone", userData.phone);
            formData.append("email", userData.email);
            formData.append("present_address", userData.presentAddress);
            if (userData.image) {
                formData.append("image", userData.image);
            }
            axios
                .post("auth/info", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((response) => {
                    setLoading(false);
                    if (response.status === 200) {
                        toast.success("Profile Updated Successfully");
                        setIsModified(false);
                        router.refresh();
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <>
            {loading ? (
                <div className="text-center">
                    <Loading/>
                </div>
            ) : (
                <div className="container mx-auto">
                    <div
                        className=" bg-[#f3f9fb] w-full lg:grid grid-cols-3 justify-between border rounded-md shadow-sm p-3 ">
                        <div className="flex justify-center sm:border-r">
                            <div
                                className="bg-white relative flex flex-col justify-center items-center border  p-2 w-40 h-40 overflow-hidden">
                                <div className="w-full absolute z-50 right-2 top-2 flex justify-end">
                                    <Button
                                        component="label"
                                        size="small"
                                        startIcon={<AddPhotoAlternateOutlinedIcon/>}
                                        className="inline-flex justify-end p-0 mb-1"
                                    >
                                        <VisuallyHiddenInput
                                            type="file"
                                            accept="image/*"
                                            onChange={handleFile}
                                        />
                                    </Button>
                                </div>

                                {url ? (
                                    <div className="w-[150px] h-[150px] overflow-hidden">
                                        <Image
                                            src={url}
                                            alt="profile"
                                            className="min-h-40 min-w-40"
                                            width={150}
                                            height={150}
                                            layout="responsive"
                                            objectFit="cover"
                                        />
                                    </div>
                                ) : (
                                    <div className=" relative w-[150px] h-[150px] overflow-hidden">
                                       {/* <ImageBackgroundDetector imageUrl={user?.image}/>*/}
                                        {/*<ImageBackgroundDetector imageUrl='http://157.230.243.221:8800/upload/candidate/images/admin.png'/>*/}
                                        {user?.image && (
                                            <Image
                                                src={user?.image}
                                                alt="profile"
                                                fill
                                            />
                                        )}
                                </div>
                                )}
                            </div>
                        </div>

                        <div className="col-span-2 flex justify-start items-center sm:pl-5">
                            <table className="p-5 text-sm">
                                <tbody>
                                <tr className="align-top">
                                    <td className="px-1  py-1 sm:px-3 font-semibold sm:whitespace-nowrap sm:min-w-[150px]">
                                        নাম (বাংলা)
                                    </td>
                                    <td className="px-1  py-1 sm:px-3 text-justify">
                                        :
                                        <span className="pl-1">
                        {user?.candidate_info?.name_bn}
                      </span>
                                    </td>
                                </tr>
                                <tr className="align-top">
                                    <td className="px-1  py-1 sm:px-3 font-semibold sm:whitespace-nowrap sm:min-w-[150px]">
                                        নাম (ইংরেজি)
                                    </td>
                                    <td className="px-1  py-1 sm:px-3 text-justify ">
                                        :{" "}
                                        <span
                                            className="pl-1 font-Inter"
                                            style={{fontFamily: "Inter"}}
                                        >
                        {user?.name}
                      </span>
                                    </td>
                                </tr>
                                <tr className="align-top">
                                    <td className="px-1  py-1 sm:px-3 font-semibold sm:whitespace-nowrap sm:min-w-[150px]">
                                        আইসিএন নং
                                    </td>
                                    <td className="px-1  py-1 sm:px-3 text-justify">
                                        : <span className="pl-1">{user?.username}</span>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="bg-[#f3f9fb] mt-5 w-full">
                        <div className="lg:grid grid-cols-2 gap-5 border rounded-md shadow-sm  p-3">
                            <div className="grid grid-cols-3 lg:grid-cols-3 text-sm p-1">
                                <h5 className="font-semibold sm:whitespace-nowrap">
                                    পিতার নাম (ইংরেজি)
                                </h5>
                                <p className="col-span-2">
                                    :
                                    <span className="pl-1" style={{fontFamily: "Inter"}}>
                    {user?.candidate_info?.father_en_name}
                  </span>
                                </p>
                            </div>

                            <div className="grid grid-cols-3 text-sm p-1">
                                <h5 className="font-semibold sm:whitespace-nowrap">
                                    পিতার নাম (বাংলা)
                                </h5>
                                <p className="col-span-2">
                                    :
                                    <span className="pl-1" style={{fontFamily: "Inter"}}>
                    {user?.candidate_info?.father_bn_name}
                  </span>
                                </p>
                            </div>

                            <div className="grid grid-cols-3 text-sm p-1">
                                <h5 className="font-semibold sm:whitespace-nowrap">
                                    মাতার নাম (ইংরেজি)
                                </h5>
                                <p className="col-span-2">
                                    :
                                    <span className="pl-1" style={{fontFamily: "Inter"}}>
                    {user?.candidate_info?.mother_en_name}
                  </span>
                                </p>
                            </div>

                            <div className="grid grid-cols-3 text-sm p-1">
                                <h5 className="font-semibold sm:whitespace-nowrap">
                                    মাতার নাম (বাংলা)
                                </h5>
                                <p className="col-span-2">
                                    :
                                    <span className="pl-1">
                    {user?.candidate_info?.mother_bn_name}
                  </span>
                                </p>
                            </div>

                            <div className="grid grid-cols-3 text-sm p-1">
                                <h5 className="font-semibold sm:whitespace-nowrap">
                                    এনআইডি নম্বর
                                </h5>
                                <p className="col-span-2">
                                    : <span className="pl-1">{user?.nid}</span>
                                </p>
                            </div>

                            <div className="grid grid-cols-3 text-sm p-1">
                                <h5 className="font-semibold sm:whitespace-nowrap">
                                    জন্ম তারিখ
                                </h5>
                                <p className="col-span-2">
                                    {" "}
                                    : <span className="pl-1">{user?.dob}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    {loading ? (
                        <div className="text-center">
                            <Loading/>
                        </div>
                    ) : (
                        <>
                            <div className="bg-[#f3f9fb] mt-5 w-full">
                                <div className="lg:grid grid-cols-2  gap-5 border rounded-md shadow-sm  p-3">
                                    <div className="grid grid-cols-2 xl:grid-cols-3 text-sm p-1">
                                        <h5 className="font-semibold sm:whitespace-nowrap">
                                            মোবাইল নাম্বার
                                        </h5>

                                        <TextField
                                            //required
                                            fullWidth
                                            id="mobile"
                                            value={userData.phone || ""}
                                            onChange={(e) =>
                                                setUserData({...userData, phone: e.target.value})
                                            }
                                            size="small"
                                            label="মোবাইল নাম্বার"
                                            type="number"
                                            name="mobile"
                                            className="bg-white"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 xl:grid-cols-3 text-sm p-1">
                                        <h5 className="font-semibold sm:whitespace-nowrap">
                                            ইমেইল
                                        </h5>

                                        <TextField
                                            //  required
                                            fullWidth
                                            type="email"
                                            id="email"
                                            value={userData.email || ""}
                                            onChange={(e) =>
                                                setUserData({...userData, email: e.target.value})
                                            }
                                            size="small"
                                            label="ইমেইল"
                                            name="Email"
                                            className="bg-white"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className=" bg-[#f3f9fb] mt-5 w-full">
                                <div className=" border rounded-md shadow-sm  p-3">
                                    <div className="grid grid-cols-2 lg:grid-cols-6 text-sm p-1">
                                        <h5 className="font-semibold sm:whitespace-nowrap">
                                            স্থায়ী ঠিকানা
                                        </h5>
                                        <p className="sm:col-span-5">
                                            :
                                            <span className="pl-1">
                        {user?.candidate_info?.permanent_address?.division},
                                                {user?.candidate_info?.permanent_address?.district},
                                                {user?.candidate_info?.permanent_address?.upozila},
                                                {user?.candidate_info?.permanent_address?.region},
                                                {user?.candidate_info?.permanent_address?.postOffice},
                                                {user?.candidate_info?.permanent_address?.post_code},
                                                {
                                                    user?.candidate_info?.permanent_address
                                                        ?.homeOrHoldingNo
                                                }
                                                ,
                                                {
                                                    user?.candidate_info?.permanent_address
                                                        ?.additionalVillageOrRoad
                                                }
                                                ,
                                                {
                                                    user?.candidate_info?.permanent_address
                                                        ?.additionalMouzaOrMoholla
                                                }
                      </span>
                                        </p>
                                    </div>

                                    <div className="xl:grid grid-cols-6 text-sm p-1">
                                        <h5 className="font-semibold sm:whitespace-nowrap">
                                            বর্তমান ঠিকানা
                                        </h5>

                                        <TextField
                                            label="বর্তমান ঠিকানা"
                                            size="small"
                                            multiline
                                            rows={2}
                                            value={userData.presentAddress || ""}
                                            onChange={(e) =>
                                                setUserData({
                                                    ...userData,
                                                    presentAddress: e.target.value,
                                                })
                                            }
                                            fullWidth
                                            className="bg-white col-span-5"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 flex justify-end ">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className="mt-6  bg-blue-500"
                                    onClick={saveChanges}
                                    disabled={!isModified}
                                >
                                    আপডেট
                                </Button>
                            </div>
                        </>
                    )}
                </div>
            )}
        </>
    );
};

export default UserProfile;
