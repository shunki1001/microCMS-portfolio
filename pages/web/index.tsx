import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Paper, Typography, styled } from "@mui/material";
import Grid from '@mui/material/Grid';
import { serviceList } from "../../libs/serviceList";



const Web = () => {

  const handleClick = () =>{

  }
  return (
    <Box sx={{ flexGrow: 1, maxWidth: "900px", margin: " 0 auto", padding: "16px" }}>
      <Container maxWidth="sm" sx={{textAlign:  "center"}}>
        <Typography variant="h2">
          HP・LP作成
        </Typography>
        <Typography>
          企業様のHPや大学の体育会部活動、個人ブログまで幅広く作成しています。
          ヒアリングから、デザイン提案、コーディングまでを一貫して行います。
        </Typography>
        <Typography variant="h2">
          システム開発
        </Typography>
        <Typography></Typography>
        <Typography variant="h2">
          効率化・DX
        </Typography>
        <Typography variant="h2">
          ECサイトカスタマイズ
        </Typography>
        <Typography variant="h2">
          
        </Typography>
      </Container>
      <Grid container spacing={2} justifyContent="center">
        {serviceList.map((item)=>{
          return (
            <Grid item xs={12} md={6}>
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
