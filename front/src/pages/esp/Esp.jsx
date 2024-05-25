import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/nav/Navbar';

const MobilisSupportsLesVerts = () => {
  return (
    <>
      <Navbar />

      <Box m="20px">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper elevation={3}>
              
              <Box p={3}>
                <Typography variant="h4" gutterBottom>
                  Mobilis Supports Les Verts!
                </Typography>
                <Typography variant="body1">
                  Date: October 11, 2023
                </Typography>
                <Typography variant="body1">
                  Location: Algeria
                </Typography>
                <Typography variant="h6" gutterBottom mt={3}>
                  Join Mobilis in cheering for Les Verts as they face off against Cap Vert and Egypt!
                </Typography>
                <Typography variant="body1" paragraph>
                  ATM Mobilis, proud Official Partner of the Algerian Football Federation (FAF) and the National Teams, stands with Les Verts as they prepare for upcoming international matches, including the start of the 2026 World Cup qualifiers and the 34th edition of the Africa Cup of Nations (CAN 2024) in Côte d'Ivoire.
                </Typography>
                <Typography variant="h6" gutterBottom mt={3}>
                  Match Details:
                </Typography>
                <Typography variant="body1" paragraph>
                  - Algeria vs Cap Vert
                  <br />
                  Date: Thursday, October 12, 2023
                  <br />
                  Time: 20:00
                  <br />
                  Venue: Stade du Chahid Hamlaoui, Constantine
                </Typography>
                <Typography variant="body1">
                  - Algeria vs Egypt
                  <br />
                  Date: Monday, October 16, 2023
                  <br />
                  Time: 17:00 (Algerian time)
                  <br />
                  Venue: Hazaa Bin Zayed Stadium, Al-Aïn, Abu Dhabi
                </Typography>
                <Typography variant="body1" paragraph mt={3}>
                  Get ready to support Les Verts on their journey!
                </Typography>
                <Typography variant="body1" paragraph>
                  Mobilis is committed to standing by the Desert Warriors, providing unwavering support every step of the way.
                </Typography>
                <Typography variant="body1">
                  Best of luck to Les Verts!
                </Typography>
                <Typography variant="body1" mt={3}>
                  Dzayer Bladna wel Khedra Dialna
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </>
  );
};

export default MobilisSupportsLesVerts;
