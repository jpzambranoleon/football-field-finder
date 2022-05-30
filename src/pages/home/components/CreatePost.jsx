import { Button, Modal, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";

const CreatePost = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(true);

    return (
        <>
            <Button onClick={handleOpen} variant="outlined">Secondary action</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Paper>
                    <Container>
                        <Typography>
                            This is a Modal
                        </Typography>
                    </Container>
                </Paper>
            </Modal>
        </>
    )
}

export default CreatePost;