import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#f0f0f0",
        padding: "2em 0",
        textAlign: "center",
        fontSize: "16px",
      }}
    >
      <Typography variant="caption">©tajimura 2023</Typography>
    </Box>
  );
};

export default Footer;
