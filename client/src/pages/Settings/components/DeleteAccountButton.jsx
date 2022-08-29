import { Box, Button, Modal, Stack, styled, Typography } from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import { InfoContext } from "../../../utils/InfoProvider";
import { useNavigate } from "react-router-dom";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const CustomBox = styled(Box)({
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const DeleteAccountButton = () => {
  const [open, setOpen] = useState(false);
  const { setStatus, authorizedUser } = useContext(InfoContext);
  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOnDelete = async (event) => {
    event.preventDefault();
    axios
      .delete(`/users/delete/${authorizedUser._id}`)
      .then((res) => {
        setStatus({
          open: true,
          message: res.data.message,
          severity: "success",
        });
        navigate("/");
      })
      .catch((err) => {
        setStatus({
          open: true,
          message: err.response ? err.response.data.message : err.message,
          severity: "error",
        });
      });
  };

  return (
    <div>
      <Button
        color="error"
        variant="contained"
        size="small"
        onClick={handleOpen}
        sx={{ textTransform: "none" }}
      >
        Delete account
      </Button>
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={300}
          bgcolor={"background.default"}
          color="text.primary"
          p={2}
          borderRadius={2}
        >
          <CustomBox>
            <Typography variant="h6" align="center">
              Are you sure you want to delete this account?
            </Typography>
            <Typography variant="body1" align="center" color="text.secondary">
              Your account and all of your posts will be deleted
            </Typography>
          </CustomBox>
          <Stack spacing={2}>
            <Button
              onClick={handleOnDelete}
              variant="contained"
              color="error"
              size="small"
            >
              yes
            </Button>
            <Button
              onClick={handleClose}
              variant="contained"
              color="success"
              size="small"
            >
              No
            </Button>
          </Stack>
        </Box>
      </StyledModal>
    </div>
  );
};

export default DeleteAccountButton;
