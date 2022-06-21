import { Box, Typography } from "@mui/material";
import { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <Box
      sx={{
        width: "80%",
        maxWidth: "500px",
        margin: "0 auto",
      }}
    >
      {/* <FirstLogo /> */}
      <Box
        sx={{
          width: "100%",
          height: "20vh",
          position: "relative",
        }}
      >
        <Image
          src="/images/tajimura-page-top.png"
          alt="logo"
          layout="fill"
          objectFit="contain"
        />
      </Box>
      <Typography>~Crafting the Core~</Typography>
    </Box>
  );
};

export default Home;
