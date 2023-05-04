import { Box, Typography } from "@mui/material";
import styles from "../../styles/Home.module.css";

const About = () => {
  return (
    <Box
      sx={{
        width: "80%",
        maxWidth: "500px",
        margin: "0 auto",
      }}
    >
      {/* <FirstLogo /> */}
      <Box className={styles.home_contents}>
        <Typography variant="h2"></Typography>
      </Box>
    </Box>
  );
};

export default About;
