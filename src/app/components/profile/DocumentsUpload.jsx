import axios from "@/axios/axiosInstance";
import CloudUploadIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const DocumentsUpload = () => {
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

  const [fileData, setFileData] = useState({
    certificate: null,
    testimonial: null,
    diploma: null,
    coc: null,
    nid: null,
    birthCertificate: null,
    endorsement: null,
    serviceBook: null,
    otherDocument: null,
  });

  // console.log(fileData.certificate);

  const handleFileChange = (fieldName, event) => {
    const file = event.target.files[0];
    setFileData({
      ...fileData,
      [fieldName]: file,
    });
  };

  const handleSubmit = () => {
    try {
      const formData = new FormData();

      if (fileData.certificate) {
        formData.append("Class_8/JSC_Certificate", fileData.certificate);
      }

      if (fileData.testimonial) {
        formData.append(
          "Sea_Service_Testimonial_(Last_5_years)",
          fileData.testimonial
        );
      }

      if (fileData.diploma) {
        formData.append(
          "ClDiploma_Marine_Technology_Certificate",
          fileData.diploma
        );
      }

      if (fileData.coc) {
        formData.append("coc_copy", fileData.coc);
      }

      if (fileData.nid) {
        formData.append("NID_Copy", fileData.nid);
      }

      if (fileData.birthCertificate) {
        formData.append("Birth_Certificate", fileData.birthCertificate);
      }

      if (fileData.endorsement) {
        formData.append("Karnafuli_Endorsement", fileData.endorsement);
      }

      if (fileData.serviceBook) {
        formData.append("Service_Book", fileData.serviceBook);
      }

      if (fileData.otherDocument) {
        formData.append("Other_Document", fileData.otherDocument);
      }

      axios
        .post("/candidate/document", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          setLoading(false);
          if (response.status === 200) {
            toast.success("Document Updated Successfully");
            profile();
            setIsModified(false);
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
    <div className="">
      <div className=" bg-[#f3f9fb] w-full  border rounded-md shadow-sm p-3 overflow-auto ">
        {" "}
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 border">
          <thead className="text-xs text-gray-700 uppercase bg-[#D5ECC2]">
            <tr>
              <th scope="col" className="p-3">
                নথির নাম
              </th>

              <th scope="col" className="p-3 w-32">
                অ্যাকশন
              </th>
              <th scope="col" className="p-3 w-32">
                ফাইলের নাম
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="px-3 py-1.5">Class 8/JSC Certificate</td>

              <td className="flex justify-between items-center gap-3  px-3 py-1.5">
                <Button
                  component="label"
                  variant="outlined"
                  size="small"
                  startIcon={<CloudUploadIcon />}
                >
                  <VisuallyHiddenInput
                    type="file"
                    onChange={(event) => handleFileChange("certificate", event)}
                  />
                </Button>

                <Button
                  component="label"
                  variant="outlined"
                  size="small"
                  startIcon={<VisibilityIcon />}
                ></Button>

                <Button
                  component="label"
                  variant="outlined"
                  size="small"
                  startIcon={<EditNoteOutlinedIcon />}
                ></Button>
              </td>
              <td>
                {" "}
                <span>{fileData.certificate && fileData.certificate.name}</span>
              </td>
            </tr>

            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="px-3 py-1.5">
                সমুদ্র পরিষেবা প্রশংসাপত্র (গত 5 বছর)
              </td>

              <td className="flex justify-between items-center gap-3  px-3 py-1.5">
                <Button
                  component="label"
                  variant="outlined"
                  size="small"
                  startIcon={<CloudUploadIcon />}
                >
                  <VisuallyHiddenInput
                    type="file"
                    onChange={(event) => handleFileChange("testimonial", event)}
                  />
                </Button>

                <Button
                  component="label"
                  variant="outlined"
                  size="small"
                  startIcon={<VisibilityIcon />}
                ></Button>

                <Button
                  component="label"
                  variant="outlined"
                  size="small"
                  startIcon={<EditNoteOutlinedIcon />}
                ></Button>
              </td>
              <td>
                {" "}
                <span>{fileData.testimonial && fileData.testimonial.name}</span>
              </td>
            </tr>

            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="px-3 py-1.5">
                ClDiploma মেরিন টেকনোলজি সার্টিফিকেট
              </td>

              <td className="flex justify-between items-center gap-3  px-3 py-1.5">
                <Button
                  component="label"
                  variant="outlined"
                  size="small"
                  startIcon={<CloudUploadIcon />}
                >
                  <VisuallyHiddenInput
                    type="file"
                    onChange={(event) => handleFileChange("diploma", event)}
                  />
                </Button>

                <Button
                  component="label"
                  variant="outlined"
                  size="small"
                  startIcon={<VisibilityIcon />}
                ></Button>

                <Button
                  component="label"
                  variant="outlined"
                  size="small"
                  startIcon={<EditNoteOutlinedIcon />}
                ></Button>
              </td>

              <td>
                {" "}
                <span>{fileData.diploma && fileData.diploma.name}</span>
              </td>
            </tr>

            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="px-3 py-1.5">CoC কপি</td>

              <td className="flex justify-between items-center gap-3  px-3 py-1.5">
                <Button
                  component="label"
                  variant="outlined"
                  size="small"
                  startIcon={<CloudUploadIcon />}
                >
                  <VisuallyHiddenInput
                    type="file"
                    onChange={(event) => handleFileChange("coc", event)}
                  />
                </Button>

                <Button
                  component="label"
                  variant="outlined"
                  size="small"
                  startIcon={<VisibilityIcon />}
                ></Button>

                <Button
                  component="label"
                  variant="outlined"
                  size="small"
                  startIcon={<EditNoteOutlinedIcon />}
                ></Button>
              </td>

              <td>
                {" "}
                <span>{fileData.coc && fileData.coc.name}</span>
              </td>
            </tr>

            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="px-3 py-1.5">NID কপি</td>

              <td className="flex justify-between items-center gap-3  px-3 py-1.5">
                <Button
                  component="label"
                  variant="outlined"
                  size="small"
                  startIcon={<CloudUploadIcon />}
                >
                  <VisuallyHiddenInput
                    type="file"
                    onChange={(event) => handleFileChange("nid", event)}
                  />
                </Button>

                <Button
                  component="label"
                  variant="outlined"
                  size="small"
                  startIcon={<VisibilityIcon />}
                ></Button>

                <Button
                  component="label"
                  variant="outlined"
                  size="small"
                  startIcon={<EditNoteOutlinedIcon />}
                ></Button>
              </td>
              <td>
                {" "}
                <span>{fileData.nid && fileData.nid.name}</span>
              </td>
            </tr>

            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="px-3 py-1.5">Birth Certificate</td>

              <td className="flex justify-between items-center gap-3  px-3 py-1.5">
                <Button
                  component="label"
                  variant="outlined"
                  size="small"
                  startIcon={<CloudUploadIcon />}
                >
                  <VisuallyHiddenInput
                    type="file"
                    onChange={(event) =>
                      handleFileChange("birthCertificate", event)
                    }
                  />
                </Button>

                <Button
                  component="label"
                  variant="outlined"
                  size="small"
                  startIcon={<VisibilityIcon />}
                ></Button>

                <Button
                  component="label"
                  variant="outlined"
                  size="small"
                  startIcon={<EditNoteOutlinedIcon />}
                ></Button>
              </td>
              <td>
                {" "}
                <span>
                  {fileData.birthCertificate && fileData.birthCertificate.name}
                </span>
              </td>
            </tr>

            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="px-3 py-1.5">কর্ণফুলী অনুমোদন</td>

              <td className="flex justify-between items-center gap-3  px-3 py-1.5">
                <Button
                  component="label"
                  variant="outlined"
                  size="small"
                  startIcon={<CloudUploadIcon />}
                >
                  <VisuallyHiddenInput
                    type="file"
                    onChange={(event) => handleFileChange("endorsement", event)}
                  />
                </Button>

                <Button
                  component="label"
                  variant="outlined"
                  size="small"
                  startIcon={<VisibilityIcon />}
                ></Button>

                <Button
                  component="label"
                  variant="outlined"
                  size="small"
                  startIcon={<EditNoteOutlinedIcon />}
                ></Button>
              </td>
              <td>
                {" "}
                <span>{fileData.endorsement && fileData.endorsement.name}</span>
              </td>
            </tr>

            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="px-3 py-1.5">সার্ভিস বুক</td>

              <td className="flex justify-between items-center gap-3  px-3 py-1.5">
                <Button
                  component="label"
                  variant="outlined"
                  size="small"
                  startIcon={<CloudUploadIcon />}
                >
                  <VisuallyHiddenInput
                    type="file"
                    onChange={(event) => handleFileChange("serviceBook", event)}
                  />
                </Button>

                <Button
                  component="label"
                  variant="outlined"
                  size="small"
                  startIcon={<VisibilityIcon />}
                ></Button>

                <Button
                  component="label"
                  variant="outlined"
                  size="small"
                  startIcon={<EditNoteOutlinedIcon />}
                ></Button>
              </td>
              <td>
                {" "}
                <span>{fileData.serviceBook && fileData.serviceBook.name}</span>
              </td>
            </tr>

            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="px-3 py-1.5">অন্যান্য নথি</td>

              <td className="flex justify-between items-center gap-3  px-3 py-1.5">
                <Button
                  component="label"
                  variant="outlined"
                  size="small"
                  startIcon={<CloudUploadIcon />}
                >
                  <VisuallyHiddenInput
                    type="file"
                    onChange={(event) =>
                      handleFileChange("otherDocument", event)
                    }
                  />
                </Button>

                <Button
                  component="label"
                  variant="outlined"
                  size="small"
                  startIcon={<VisibilityIcon />}
                ></Button>

                <Button
                  component="label"
                  variant="outlined"
                  size="small"
                  startIcon={<EditNoteOutlinedIcon />}
                ></Button>
              </td>
              <td>
                {" "}
                <span>
                  {fileData.otherDocument && fileData.otherDocument.name}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-end ">
        <Button
          variant="contained"
          color="primary"
          className="mt-6  bg-blue-500"
          onClick={handleSubmit}
        >
          আপডেট
        </Button>
      </div>
    </div>
  );
};

export default DocumentsUpload;
