import {
  Paper,
  Grid,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  Table,
} from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const SimpleTable = ({ post }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  function createData(name, item) {
    return { name, item };
  }

  const rows = [
    createData("Author", user.username),
    createData("Location", post.city + (", " + post.state)),
    createData("Phone", post.phone),
    createData("Email", post.email),
  ];

  return (
    <Grid item xs={12} sm={6} md={6}>
      <Typography variant="h5" paragraph fontWeight="bold">
        Info
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.item}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default SimpleTable;
