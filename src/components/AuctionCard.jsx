import {Box, Card, CardContent, Typography, Paper} from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';

const AuctionCard = ({ AuctionId, AuctionTitle, AuctionDesc, AuctionBid }) => {
    return (
        <Box sx={{ width: 220, height: 'fit-content', width: 250 }}>
            <Link
                to="/AuctionPage"
                state={{
                    AuctionId: AuctionId,
                    AuctionTitle: AuctionTitle,
                    AuctionDesc: AuctionDesc,
                    AuctionBid: AuctionBid
                }}
            >
            <Paper elevation={1}>
                <Card variant="outlined" sx={{ height: 250 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 16 }} gutterBottom>
                            {AuctionTitle}
                        </Typography>
                        <Typography sx={{ my: 2, color: 'green' }} variant="h5" component="div">
                            {AuctionBid}
                        </Typography>
                        <Typography color="text.secondary">
                            {AuctionDesc}
                        </Typography>
                    </CardContent>
                </Card>
            </Paper>
            </Link>
        </Box>
    );
};

export default AuctionCard;
