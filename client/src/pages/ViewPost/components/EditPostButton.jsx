import { Box, Button, Modal, styled } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import UpdateForm from "./UpdateForm";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const EditPostButton = ({ post }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} color="success">
        Edit
      </Button>
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          bgcolor={"background.default"}
          color="text.primary"
          p={2}
          borderRadius={2}
        >
          <Container maxWidth="sm">
            <UpdateForm post={post} />
          </Container>
        </Box>
      </StyledModal>
    </div>
  );
};

export default EditPostButton;
