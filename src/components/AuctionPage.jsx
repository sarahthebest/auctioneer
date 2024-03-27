import { Box, Container, Typography } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BidBtn from "./BidBtn";
import TextField from '@mui/material/TextField';



const AuctionPage = () => {
    return (
        <div>
            <Container sx={{ display: "flex", flexDirection: "row", bgcolor: "red", height: 300, width: '100%', p:0 }}>
                <Box
                    width="100%"
                    display="flex"
                    flexDirection="Column"
                    alignItems="start"
                    p={2}
                >
                    <Typography>Auction Title</Typography>
                </Box>
                <Box
                    width={'70%'}
                    display="flex"
                    flexDirection="Column"
                    p={2}
                    sx={{ border: '1px black solid' }}
                >
                    <Typography>Auction Details</Typography>
                </Box>
            </Container>
            <Container sx={{ display: "flex", flexDirection: "row", mt: 2, gap:2, p:0, width:'100%'}} >
                <TableContainer component={Paper} sx={{ width: 600 }}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Bids</TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Namn
                                </TableCell>
                                <TableCell align="right">Bud</TableCell>
                                <TableCell align="right">Tid</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box
                    component="form"
                    display='flex'
                    flexDirection='row'
                    sx={{
                        gap: 1, justifyItems: 'center'
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    <BidBtn />

                </Box>
            </Container>
        </div>
    );
}

export default AuctionPage;