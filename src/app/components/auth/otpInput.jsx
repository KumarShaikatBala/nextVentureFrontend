"use client";
import React, { useState, useRef, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const OTPInput = ({onFullOtpChange }) => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const otpRefs = useRef(new Array(6).fill(0).map(() => React.createRef()));


  const handleChange = (event, index) => {
    const value = event.target.value;
    if (isNaN(value) || value === " ") return; 

    let newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      otpRefs.current[index + 1].current.focus();
    }
  };

  useEffect(() => {
 
    if (otp.every((digit) => digit.trim() !== "") && otp.indexOf("") === -1) {
      const otpValue = otp.join("");
      onFullOtpChange(otpValue); 
    }
  }, [otp, onFullOtpChange]);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
      {otp.map((data, index) => (
        <TextField
          key={index}
          type="text"
          name={`otp-${index}`}
          value={data}
          onChange={(e) => handleChange(e, index)}
          onFocus={(e) => e.target.select()}
          inputProps={{
            sx: {
              textAlign: "center",
            },
            maxLength: 1,
          }}
          inputRef={otpRefs.current[index]}
        />
      ))}
    </Box>
  );
};

export default OTPInput;
