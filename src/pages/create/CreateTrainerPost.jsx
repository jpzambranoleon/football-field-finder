import { Sports } from "@mui/icons-material";
import { Avatar, Box, Button, Card, CardContent, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import { useState } from "react";

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

export default function CreateTrainerPost() {
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
        <main>
            <Box 
                sx={{ 
                    bgcolor: 'background.paper', 
                    pt: 8, 
                    pb: 6,
                }}
            >
                <Container maxWidth="sm">
                    <Card 
                        sx={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center'  
                        }}
                    >
                        <Avatar sx={{ height: '60px', width: '60px', bgcolor: pink[400], mt: 3 }}>
                            <Sports fontSize="large" />
                        </Avatar>
                        <CardContent>
                            <Typography variant="h5" align="center" gutterBottom>
                                Trainer Post
                            </Typography>
                            <Box component="form" noValidate sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            autoComplete="given-name"
                                            name="trainerName"
                                            required
                                            fullWidth
                                            id="trainerName"
                                            label="Trainer Name"
                                            autoFocus
                                        />
                                    </Grid>
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
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            margin="normal"
                                            id="outlined-multiline-static"
                                            label="Description"
                                            multiline
                                            rows={4}
                                            fullWidth 
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField 
                                            margin="normal"
                                            fullWidth
                                            id="telephone"
                                            label="Telephone Number"
                                            name="telephone"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            margin="normal"
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    color="success"
                                >
                                    Submit Post
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Container>
            </Box>
        </main> 
    )
};