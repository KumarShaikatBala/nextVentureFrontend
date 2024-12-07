"use client";
import { Button } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import React, { useState, useEffect, useCallback } from "react";
import axios from "@/axios/axiosInstance";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function DocumentUpdate({ allDocumentData}) {
    const router = useRouter();
    const [files, setFiles] = useState({});
    const [validForms, setValidForms] = useState({});
    const [formValues, setFormValues] = useState({});

    useEffect(() => {
        const initialFormValues = {};
        const initialValidForms = {};
        allDocumentData?.forEach(doc => {
            initialFormValues[doc.id] = {
                certificate_no: doc.certificate_no || '',
                issue_date: doc.issue_date || '',
                expiry_date: doc.expiry_date || ''
            };
            initialValidForms[doc.id] = false;
        });
        setFormValues(initialFormValues);
        setValidForms(initialValidForms);
    }, [allDocumentData]);

    const validateForm = useCallback(() => {
        const updatedValidForms = { ...validForms };
        allDocumentData?.forEach(doc => {
            const values = formValues[doc.id];
            const file = files[doc.id];
            const isValid = values?.certificate_no && values?.issue_date && values?.expiry_date && file;
            updatedValidForms[doc.id] = isValid;
        });
        setValidForms(updatedValidForms);
    }, [formValues, files, allDocumentData]);

    useEffect(() => {
        validateForm();
    }, [formValues, files, validateForm]);

    const handleInputChange = (id, field, value) => {
        setFormValues(prevFormValues => {
            const updatedFormValues = {
                ...prevFormValues,
                [id]: {
                    ...prevFormValues[id],
                    [field]: value
                }
            };
            return updatedFormValues;
        });
    };

    const handleFileChange = (id, event) => {
        const file = event.target.files[0];
        setFiles(prevFiles => ({
            ...prevFiles,
            [id]: file
        }));
    };

    const handleSubmit = (document) => {
        const values = formValues[document.id];
        const data = {
            "certificate_number": values.certificate_no,
            "issue_date": values.issue_date,
            "expiry_date": values.expiry_date,
        };
        const formData = new FormData();
        const file = files[document.id];

        if (file) {
            formData.append(document.document_type_id + "_type", file);
        }
        formData.append(document.document_type_id + "_data", JSON.stringify(data));
        axios
            .post("/candidate/profile-documents", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => {
                if (response.status === 200) {
                    toast.success("আপনার নথিপত্র সফলভাবে আপলোড হয়েছে");
                    router.refresh();
                
                    
                }
            })
            .catch((error) => {
                toast.error("কিছু সমস্যা হয়েছে");
            });
    };

    const groupedData = allDocumentData?.reduce((acc, item) => {
        const type = item.document_type.type || 'No Type';
        if (!acc[type]) {
            acc[type] = [];
        }
        acc[type].push(item);
        return acc;
    }, {});

    return (
        <div className="border">
            <div className="py-1 px-1">
                <div className={`text-[red] py-4 px-5 border-b-2 focus:outline-none`}>
                    (৫০০ কিলোবাইট এর নিচে পিডিএফ গ্রহণ করা হবে )
                </div>
                <div>
                    {groupedData && Object.keys(groupedData).length > 0 && (
                        <div className="bg-[#f3f9fb] w-full border rounded-md shadow-sm p-3 overflow-auto">
                            {Object.entries(groupedData).map(([type, documents]) => (
                                <div key={type}>
                                    <h2 className="text-lg font-semibold py-2">{type !== 'No Type' ? `${type}` : 'No Type'}</h2>
                                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 border">
                                        <thead className="text-xs text-gray-700 uppercase bg-[#D5ECC2]">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-center">বিদ্যমান নথির নাম</th>
                                                <th scope="col" className="px-6 py-3 text-center">কোর্স / সনদের নম্বর</th>
                                                <th scope="col" className="px-6 py-3 text-center">ইস্যুর তারিখ</th>
                                                <th scope="col" className="px-6 py-3 text-center">মেয়াদ</th>
                                                <th scope="col" className="px-6 py-3 text-center">অ্যাকশন</th>
                                                <th scope="col" className="px-6 py-3 text-center">ভিউ</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {documents.map((doc, index) => (
                                                <tr key={doc.id} className="bg-white border-b hover:bg-gray-50">
                                                    <td className="px-3 py-1.5">{doc.document_type?.name}</td>
                                                   
                                                    <td>
                                                        <input
                                                            type="text"
                                                            value={formValues[doc.id]?.certificate_no || ''}
                                                            onChange={(e) => handleInputChange(doc.id, 'certificate_no', e.target.value)}
                                                            className="p-2 block w-full bg-gray-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                            placeholder="সনদের নম্বর"
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="date"
                                                            value={formValues[doc.id]?.issue_date || ''}
                                                            onChange={(e) => handleInputChange(doc.id, 'issue_date', e.target.value)}
                                                            required={true}
                                                            className="p-2 block w-full bg-gray-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                            max={new Date().toISOString().split("T")[0]}
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="date"
                                                            value={formValues[doc.id]?.expiry_date || ''}
                                                            onChange={(e) => handleInputChange(doc.id, 'expiry_date', e.target.value)}
                                                            required={true}
                                                            className="p-2 block w-full bg-gray-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                            min={formValues[doc.id]?.issue_date}
                                                        />
                                                    </td>
                                                    <td>
                                                        <div className="flex gap-2 items-center w-full">
                                                            <Button
                                                                component="label"
                                                                variant="outlined"
                                                                size="small"
                                                                className="grow"
                                                            >
                                                                <input
                                                                    type="file"
                                                                    accept=".pdf"
                                                                    onChange={(event) => handleFileChange(doc.id, event)}
                                                                    className="grow"
                                                                />
                                                            </Button>
                                                            <div className="flex justify-end">
                                                                <Button
                                                                    variant="contained"
                                                                    color="primary"
                                                                    className="bg-blue-500"
                                                                    onClick={() => handleSubmit(doc)}
                                                                    disabled={!validForms[doc.id]}
                                                                >
                                                                    {!doc.path ? 'আপলোড' : 'আপডেট'}
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </td>

                                                    <td className="px-2 py-2 flex gap-2 items-center">
                                                        {doc?.path && (
                                                            <Link href={doc.path} target='_blank' rel="noopener noreferrer" 
                                                             className="border hover:bg-orange-600 text-purple-400 hover:text-white rounded-xl cursor-pointer p-1 m-1"
                                                            >
                                                              
                                                                <VisibilityIcon />
                                                            </Link>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
