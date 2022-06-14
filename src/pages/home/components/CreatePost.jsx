import { Button, Checkbox, Container, FormControl, FormControlLabel, FormGroup, Grid, InputLabel, MenuItem, Modal, Select, TextField } from "@mui/material";
import { useState } from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ITEM_HEIGHT = 35;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 100,
    },
  },
};

const states = [
    'AL', 'AK', 'AZ', 'AR', 'CA',
    'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA',
    'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO',
    'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 
    'OK', 'OR', 'PA', 'RI', 'SC', 
    'SD', 'TN', 'TX', 'UT', 'VT', 
    'VA', 'WA', 'WV', 'WI', 'WY',
];

const CreatePost = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [state, setState] = useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setState(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <>
            <Button onClick={handleOpen} variant="outlined" color="success">Create a Post</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Container sx={style}>
                    <FormGroup row>
                        <FormControlLabel control={<Checkbox color="success" />} label="Team" />
                        <FormControlLabel control={<Checkbox color="success" />} label="Trainer" />
                        <FormControlLabel control={<Checkbox color="success" />} label="Free Agent" />
                    </FormGroup>
                    <TextField 
                        margin="normal"
                        required
                        fullWidth
                        id="team-name"
                        label="Team Name"
                        name="team-name"
                        autoFocus
                    />
                    <TextField 
                        margin="normal"
                        fullWidth
                        id="telephone"
                        label="Telephone Number"
                        name="telephone"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        fullWidth
                        
                    />
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth margin="normal">
                                <InputLabel id="simple-select-label">State</InputLabel>
                                <Select
                                    labelId="simple-select-label"
                                    id="simple-select"
                                    value={state}
                                    label="State"
                                    onChange={handleChange}
                                    MenuProps={MenuProps}
                                >
                                    {states.map((name) => (
                                        <MenuItem
                                            key={name}
                                            value={name}
                                        >
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="normal"
                                name="city"
                                fullWidth
                                id="city"
                                label="City"
                                autoFocus
                            />
                        </Grid>
                    </Grid>
                    <Button sx={{ mt: 2 }} variant="contained" color="success">
                        Submit
                    </Button>
                </Container>
            </Modal>
        </>
    )
}

export default CreatePost;