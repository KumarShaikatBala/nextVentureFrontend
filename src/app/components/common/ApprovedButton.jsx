"use client"
import React, { useCallback, useState } from 'react'
import AddTaskIcon from '@mui/icons-material/AddTask';
import axios from "@/axios/axiosInstance";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { CircularProgress, Dialog, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

function ApprovedButton({ id }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleClose = useCallback(() => {
    console.log(open);
    setOpen(false);
    setLoading(false);
  }, []);

  // const handleClose = () => {
  //   console.log(open); // This should now log the correct value of open
  //   setOpen(false);
  //   setLoading(false);
  // };


  const handleApprove = async () => {
    axios
      .post(`dos/applications/${id}/schedule/confirmed`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success("Successfully");
          router.refresh();
          setOpen(false)

        }
      })
      .catch((err) => {

        toast.error("Something went wrong");
      }
      );


  };
  return (

    <>
      <div className="flex gap-2 items-center" onClick={() => setOpen(true)}>

        <div className="rounded-xl cursor-pointer z-10 flex gap-1 w-full text-center hover:shadow-xl ring-1 bg-white  hover:ring-1 text-xl p-2 text-primaryColor hover:text-white hover:bg-primaryColor">
          <AddTaskIcon />
          <p>অনুমোদন করুন</p>
        </div>


      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title" className="px-10 pt-10">
          {`আপনি কি নিশ্চিত?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {loading ? (
              <div className="flex justify-center items-center">
                <CircularProgress />
              </div>
            ) : (
              <div className="flex justify-center gap-3 items-center pb-6 pt-3">
                <button
                  onClick={handleApprove}
                  className="px-4 py-2 text-xs rounded-md bg-primaryColor  text-white"
                >
                  হ্যাঁ
                </button>
                <button
                  onClick={handleClose}
                  className="px-4 py-2 text-xs rounded-md bg-red-500 text-white"
                >
                  বাতিল
                </button>
              </div>
            )}
          </DialogContentText>
        </DialogContent>
      </Dialog>

    </>


  )
}

export default ApprovedButton;