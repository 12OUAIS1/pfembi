import React from 'react';
import { Box, Typography, Grid, Paper } from "@mui/material";
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/nav/Navbar';
import im1 from "../../img/img1-assets/Mobilis_موبيليس_-_panoramio_(1).jpg";

const AboutUs = () => {
  return (
   <>
    <Box m="20px">
      <Navbar/>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Who We Are
            </Typography>
            <Typography variant="body1" paragraph>
              Filiale du Groupe Télécom Algérie, Mobilis est le premier opérateur mobile en Algérie, devenu autonome en août 2003.
            </Typography>
            <Typography variant="body1" paragraph>
              Depuis sa création, Mobilis s’est fixé des objectifs principaux qui sont : la satisfaction client, la fidélisation client, l’innovation et le progrès technologique, qui lui ont permis de faire des profits et d'acquérir près de 20 Million d’abonnés en un temps record.
            </Typography>
            <Typography variant="body1" paragraph>
              Optant pour une politique de changement et d'innovation, Mobilis travaille en permanence sur son image de marque et veille constamment à offrir le meilleur à ses clients.
            </Typography>
            <Typography variant="body1" paragraph>
              En déployant un réseau de haute qualité, en assurant un service client satisfaisant, et en créant des produits et services innovants, Mobilis est positionné comme étant un opérateur proche de ses partenaires et de ses clients, renforcé par sa signature institutionnelle : « Ensemble construisons l’avenir ». Son slogan est une promesse d’écoute et un signe de son engagement à assumer son rôle dans le développement durable grâce à sa participation dans le progrès économique, son respect de la diversité culturelle, son engagement d’assumer son rôle social et sa participation à la protection de l’environnement.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Our Values
            </Typography>
            <Typography variant="body1" paragraph>
              Se munissant des valeurs : Transparence, Loyauté, Dynamisme et Innovation. Mobilis optimise sa qualité de service et veille à fidéliser ses clients.
            </Typography>
            <Typography variant="body1" paragraph>
              Mobilis, s'affirme une entreprise dynamique, innovante, loyale et transparente et continue sa compétition saine, dans un marché très concurrentiel où le sérieux, la crédibilité et la proximité sont les clés de la réussite.
            </Typography>
          </Paper>
          <Box mt={3}>
            <img src={im1} alt="" style={{ width: '100%', maxWidth: 600, height: 270 ,borderRadius: 4 }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
    <Footer/>
   </>
  );
};

export default AboutUs;
