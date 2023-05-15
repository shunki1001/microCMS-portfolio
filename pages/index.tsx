import { Box, Container, Typography } from "@mui/material";
import { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { webList } from "../libs/webList";
import Image from "next/image";
import topbanner from "../public/images/top_banner_v2.png"

const Home: NextPage = () => {
  return (
    <>
      {/* <div className={styles.top_banner_container}>
        <Image
          src={topbanner}
          fill
          alt="たじむらトップバナー"
        />
      </div> */}
      <Container maxWidth="md" sx={{textAlign:  "center"}}>
        <Typography variant="h2">サービス</Typography>
          {webList.map((item)=>{
            return(
              <Box key={item.title} className={styles.left_right}>
                <Typography variant="h3">{item.title}</Typography>
                <Typography>{item.content}</Typography>
                <Typography>例）{item.example}</Typography>
                  <Image
                    src={item.photo}
                    width={400}
                    height={200}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={item.title}
                  />
              </Box>
            )
          })}
      </Container>
    </>
  );
};

export default Home;
