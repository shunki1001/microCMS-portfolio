import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Fade, FormControlLabel, Paper, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, styled } from "@mui/material";
import Grid from '@mui/material/Grid';
import { serviceList } from "../../libs/serviceList";
import { webList } from "../../libs/webList";
import { skillList } from "../../libs/skillList";
import styles from "../../styles/Home.module.css";
import Image from "next/image";

const Web = () => {

  const handleClick = () =>{

  }
  return (
    <Box sx={{ flexGrow: 1, maxWidth: "900px", margin: " 0 auto", padding: "16px" }}>
      <Container maxWidth="md" sx={{textAlign:  "center"}}>
      <Typography variant="h2">サービス</Typography>
        {webList.map((item)=>{
          return(
            <Box key={item.title} className={styles.left_right}>
              <Typography variant="h3">{item.title}</Typography>
              <Typography>{item.content}</Typography>
              <Typography>例）{item.example}</Typography>
              {/* <Image
                // fill
                src={item.photo}
                width={400}
                height={200}
                alt={item.title}
              /> */}
            </Box>
          )
        })}
        <Typography variant="h2">プログラミングスキル</Typography>
        <TableContainer component={Paper} sx={{maxWidth: "600px", margin: "0 auto"}}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>言語</TableCell>
                <TableCell>経験年数</TableCell>
                <TableCell>内容</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {skillList.map((item)=>{
                return (
                  <TableRow key={item.title}>
                    <TableCell sx={{wordBreak: "break-word"}}>{item.title}</TableCell>
                    <TableCell>{item.year}年</TableCell>
                    <TableCell>{item.content}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant="h2">HP作成実績（例）</Typography>
      </Container>
      <Grid container spacing={2} justifyContent="center">
        {serviceList.map((item)=>{
          return (
            <Grid item xs={12} md={6} key={item.title}>
              <Card sx={{ maxWidth: 345, margin: "0 auto"}}>
                <CardActionArea onClick={handleClick}>
                  <CardMedia
                    component="img"
                    height="300"
                    src={item.img}
                    alt=""
                  />
                  <CardContent>
                    <Typography gutterBottom>
                      {item.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          )
        })}
        
      </Grid>
    </Box>
  );
};

export default Web;
