"use client";
import axios from "@/axios/axiosInstance";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
const Select = dynamic(() => import("react-select"), { ssr: false });

const category = [
    {
        label: "Training Module",
        value: "Training Module",
    },
    {
        label: "Cop",
        value: "Cop",
    },
    {
        label: "Bug",
        value: "Bug",
    },
    {
        label: "Error",
        value: "Error",
    },
    {
        label: "Coc",
        value: "Coc",
    },
    {
        label: "Application",
        value: "Application",
    },
];

const priority = [
    {
        label: "High",
        value: "High",
    },
    {
        label: "Medium",
        value: "Medium",
    },
    {
        label: "Low",
        value: "Low",
    },
];

// select custom style 
const customStyles = {
    control: (provided, state) => ({
        ...provided,
        border: state.isFocused ? '1px solid #e5e7eb' : '1px solid #D2D3D6',
        borderRadius: '4px',
        boxShadow: 'none',
        height: '40px',
        '&:hover': {
            border: '1px solid #222',
        },
    }),
    placeholder: (provided) => ({
        ...provided,
        color: '#666666',
        fontSize: '20px',
        fontWeight: 'normal',
        '&[class$="-placeholder"]': {
            fontWeight: '100',
        },
    }),
};
export default function Ticket() {
    const router = useRouter();
    const [Category, setCategory] = React.useState(null);
    const [Priority, setPriority] = React.useState(null);
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState(null);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
    const [description, setDescription] = useState();
    const [formErrors, setFormErrors] = useState({});
    useEffect(() => {
        const updatedErrors = {};
        if (name !== "") {
            updatedErrors.name = "";
        } else {
            updatedErrors.name = "টিকেট টাইটেল is required";
        }

        if (description !== "") {
            updatedErrors.description = "";
        } else {
            updatedErrors.description = "Description is required";
        }

        setFormErrors((prevErrors) => ({
            ...prevErrors,
            ...updatedErrors,
        }));
    }, [name, description]);

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("টিকেট টাইটেল is required"),
        email: Yup.string().email(),
        description: Yup.string().required("description is required"),
    });
    const handleSubmit = async (event) => {
        setLoading(true);
        event.preventDefault();
        try {
            await validationSchema.validate(
                { name, email, description },
                { abortEarly: false }
            );
            const formData = new FormData();
            formData.append("name", name);
            formData.append("email", email);
            formData.append("category", Category?.value);
            formData.append("priority", Priority?.value);
            formData.append("subject", subject);
            formData.append("description", description);
            if (file) {
                formData.append("attachment", file);
            }
            axios
                .post("dos/dos-support-ticket", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((response) => {
                    setLoading(false);
                    if (response.status === 200) {
                        toast.success("Token Created Successfully");
                        router.push("/user/dos/support/ticket");
                        router.refresh();
                    }
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                });
        } catch (error) {
            setLoading(false);
            if (error instanceof Yup.ValidationError) {
                const errors = {};
                error.inner.forEach((err) => {
                    errors[err.path] = err.message;
                    toast.error(errors[err.path]);
                });
                setFormErrors(errors);
            } else {
                console.log(error);
                toast.error("error");
            }
        }
    };


    const handleFile = useCallback((event) => {
        setFile(event.target.files[0]);
    }, []);
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <form className="relative w-full" onSubmit={handleSubmit}>
                    <div className="sm:grid grid-cols-2">
                        <div className="w-full p-3">
                            <TextField
                                required
                                fullWidth
                                size="small"
                                id="name"
                                label="টিকেট টাইটেল"
                                name="name"
                                value={name || ""}
                                onChange={(e) => setName(e.target.value)}
                                error={!!formErrors.name}
                                helperText={formErrors.name && formErrors.name}
                            />
                        </div>
                        <div className="w-full p-3">
                            <TextField
                                required
                                fullWidth
                                size="small"
                                id="email"
                                label="ইমেইল"
                                name="email"
                                placeholder="ইমেইল"
                                value={email || ""}
                                onChange={(e) => setEmail(e.target.value)}
                                error={!!formErrors.email}
                                helperText={formErrors.email && formErrors.email}
                            />
                        </div>
                        <div className="w-full p-3">
                            <Select
                                placeholder={"ক্যাটাগরি নির্ধারণ করুন"}
                                className="z-10"
                                options={category}
                                onChange={(e) => setCategory(e)}
                                value={Category}
                                styles={customStyles}
                            />
                        </div>
                        <div className="w-full p-3">
                            <Select
                                placeholder={"প্রাথমিকতা নির্ধারণ করুন"}
                                className="z-10"
                                options={priority}
                                onChange={(e) => setPriority(e)}
                                value={Priority}
                                styles={customStyles}
                            />
                        </div>
                        <div className="w-full p-3">
                            <TextField
                                required
                                fullWidth
                                size="small"
                                id="subject"
                                label="বিষয়"
                                name="subject"
                                value={subject || ""}
                                onChange={(e) => setSubject(e.target.value)}
                                error={!!formErrors.subject}
                                helperText={formErrors.subject && formErrors.subject}
                            />
                        </div>
                        <div className="w-full p-3 col-span-2">
                            <TextField
                                required
                                fullWidth
                                size="small"
                                id="description"
                                label="বিবরণ"
                                name="description"
                                placeholder="Enter Text"
                                multiline
                                rows={4}
                                value={description || ""}
                                onChange={(e) => setDescription(e.target.value)}
                                error={!!formErrors.description}
                                helperText={formErrors.description && formErrors.description}
                            />
                        </div>
                        <div className="p-3 flex justify-start items-center">
                            <div className="space-y-1">
                                <p className="text-xs opacity-50">প্লিজ ২ mb এর নিচে ফাইল সিলেক্ট করুন </p>
                                {file && <p className="font-bold text-xs opacity-75 py-1 flex items-center">
                                    <p className={` ${(file?.size / 1000000)?.toFixed(2) <= 2 ? "text-primaryColor" : "text-red-400"}`}>
                                        {file?.name}
                                    </p>
                                    <span className="px-2 text-sm">( {(file?.size / 1000000)?.toFixed(2)} mb )</span>
                                </p>}
                                {file?.name ?
                                    <span className="mr-2">
                                        ফাইল পরিবর্তন করুন
                                    </span>
                                    :
                                    <span className="mr-2">
                                        ফাইল আপলোড করুন
                                    </span>
                                }
                                <input
                                    type="file"
                                    accept="image/*,audio/*,video/*,.doc,.docx,application/msword,.pdf"
                                    onChange={handleFile}
                                />

                            </div>
                        </div>

                        <div className="p-3 flex justify-end mt-auto">
                            <Button
                                type="submit"
                                variant="contained"
                                className="bg-primaryColor h-10"
                                disabled={loading}
                            >
                                তৈরি করুন
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
