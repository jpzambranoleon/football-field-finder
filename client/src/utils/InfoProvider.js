import { useState, createContext, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { isExpired } from "react-jwt";
export const InfoContext = createContext();

export const InfoProvider = (props) => {
  const [authorized, setAuthorized] = useState(false);
  const [status, setStatus] = useState({
    open: false,
    message: "",
    severity: "error",
  });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      if (isExpired(token)) {
        localStorage.removeItem("token");
        setAuthorized(false);
      } else {
        setAuthorized(true);
      }
    }
  }, [status]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setStatus((prevState) => ({
      ...prevState,
      open: false,
    }));
  };

  return (
    <InfoContext.Provider value={{ setStatus, authorized, setAuthorized }}>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={status.open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <MuiAlert
          onClose={handleClose}
          severity={status.severity}
          sx={{ width: "100%" }}
        >
          {status.message}
        </MuiAlert>
      </Snackbar>

      {props.children}
    </InfoContext.Provider>
  );
};
