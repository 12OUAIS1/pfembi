import React from 'react';
import { Box } from "@mui/material";

import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/nav/Navbar';

const FAQ = () => {
  return (
  <>
    <Navbar/>
    <Box m="20px">
     

     <Accordion>
       <AccordionSummary expandIcon={<ExpandMoreIcon />}>
         <Typography variant="h5">
           Question 1: A PROPOS D' ATM MOBILIS
         </Typography>
       </AccordionSummary>
       <AccordionDetails>
         <Typography>
         Filiale du Groupe Télécom Algérie, Mobilis est le premier opérateur mobile en Algérie, devenu autonome en août 2003.

Depuis sa création, Mobilis s’est fixé des objectifs principaux qui sont : la satisfaction client, la fidélisation client, l’innovation et le progrès technologique, qui lui ont permis de faire des profits et d'acquérir près de 20 Million d’abonnés en un temps record.

Optant pour une politique de changement et d'innovation, Mobilis travaille en permanence sur son image de marque et veille constamment à offrir le meilleur à ses clients.

         </Typography>
       </AccordionDetails>
     </Accordion>

     <Accordion>
       <AccordionSummary expandIcon={<ExpandMoreIcon />}>
         <Typography variant="h5">
           Question 1:Comment envoier une Réclamation
         </Typography>
       </AccordionSummary>
       <AccordionDetails>
         <Typography>
          1-connecté a votre compte mobilis <br/>
          2-dans la barre d'outile cliquer sur help <br/>
          3-vous trouvez un boutton reclamation vous cliquer et remplir
         </Typography>
       </AccordionDetails>
     </Accordion>

     <Accordion>
       <AccordionSummary expandIcon={<ExpandMoreIcon />}>
         <Typography variant="h5">
           Question 2:  Comment choisir des offre?
         </Typography>
       </AccordionSummary>
       <AccordionDetails>
         <Typography>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
         </Typography>
       </AccordionDetails>
     </Accordion>
     <Accordion>
       <AccordionSummary expandIcon={<ExpandMoreIcon />}>
         <Typography variant="h5">
           Question 4: la duré et la quality de service?
         </Typography>
       </AccordionSummary>
       <AccordionDetails>
         <Typography>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
         </Typography>
       </AccordionDetails>
     </Accordion>
     <Accordion>
       <AccordionSummary expandIcon={<ExpandMoreIcon />}>
         <Typography variant="h5">
           Question 5:support mobilis?
         </Typography>
       </AccordionSummary>
       <AccordionDetails>
         <Typography>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
         </Typography>
       </AccordionDetails>
     </Accordion>
     <Accordion>
       <AccordionSummary expandIcon={<ExpandMoreIcon />}>
         <Typography variant="h5">
           Question 6: Where can I get some?
         </Typography>
       </AccordionSummary>
       <AccordionDetails>
         <Typography>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
         </Typography>
       </AccordionDetails>
     </Accordion>
     <Accordion>
       <AccordionSummary expandIcon={<ExpandMoreIcon />}>
         <Typography variant="h5">
           Question 7: comment regler les problems?
         </Typography>
       </AccordionSummary>
       <AccordionDetails>
         <Typography>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
         </Typography>
       </AccordionDetails>
     </Accordion>
   </Box>
   <Footer/>
  </>
  );
};

export default FAQ;
