import { Box, Container, Typography } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const AuctionPage = () => {
    return (
        <>
            <Container sx={{ display: "flex", flexDirection: "row", bgcolor: "red" }}>
                <Box
                    height={400}
                    width="100%"
                    display="flex"
                    flexDirection="Column"
                    alignItems="start"
                    gap={4}
                    p={2}
                >
                    <Typography>Auction Title</Typography>
                    <img src="" alt="Auction Image" />
                </Box>
                <Box
                    height={400}
                    display="flex"
                    flexDirection="Column"
                    alignItems="start"
                    gap={4}
                    p={2}
                >
                    <Typography>Auction Details</Typography>
                    <Typography>Bids</Typography>

                </Box>
            </Container>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    Bids
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default AuctionPage;