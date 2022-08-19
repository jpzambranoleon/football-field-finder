import { Box, TextField } from "@mui/material";
import { useRef } from "react";

const Otp = (digitCount, setOtp) => {
  let textInputs = useRef([]);

  const handleChange = (event) => {
    setOtp(
      textInputs.current
        .map((input) => input?.value)
        .join("")
        .slice(-4)
    );

    let index = parseInt(event.target.getAttribute("index"));

    event.target.style.border = "1px solid #FEFAF1";
    if (index < digitCount - 1) {
      if (event.target.value.length > 0) {
        textInputs.current[index + 1].value = "";
      }
      textInputs.current[index + 1].focus();
    }
  };

  return (
    <Box>
      {[...Array(digitCount)].map((_, index) => (
        <Box key={index}>
          <TextField
            margin="dense"
            required
            inputRef={(input) => textInputs.current.push(input)}
            inputProps={{
              inputMode: "numeric",
              index: index,
              maxLength: 1,
              style: { textAlign: "center" },
            }}
            onChange={handleChange}
          />
        </Box>
      ))}
    </Box>
  );
};

export default Otp;
