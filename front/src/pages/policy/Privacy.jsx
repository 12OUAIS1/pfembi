import React from 'react';
import { Box, Typography, Divider } from "@mui/material";
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/nav/Navbar';

const PrivacyPolicy = () => {
  return (
   <>
    <Box m="20px">
      <Navbar />
      <Box maxWidth={800} mx="auto" p={3}>
        <Typography variant="h4" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="body1" paragraph>
          At Mobilis, accessible from www.mobilis.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Mobilis and how we use it.
        </Typography>
        <Box mb={3}>
          <PolicyBox title="Log Files" description="We follow a standard procedure of using log files." />
        </Box>
        <Divider />
        <Box mb={3}>
          <PolicyBox title="Data Collection Purpose" description="We collect data for the purpose of analyzing user behavior and improving our services." />
        </Box>
        <Divider />
        {/* Add more PolicyBox components for additional policies */}
      </Box>
    </Box>
    <Footer/>
   </>
  );
};

const PolicyBox = ({ title, description }) => {
  return (
    <Box p={2} border={1} borderRadius={8} borderColor="grey.300">
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2">
        {description}
      </Typography>
    </Box>
  );
};

export default PrivacyPolicy;
