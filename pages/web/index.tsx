import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Paper, Typography, styled } from "@mui/material";
import Grid from '@mui/material/Grid';
import { serviceList } from "../../libs/serviceList";
import { webList } from "../../libs/webList";

const Web = () => {

  const handleClick = () =>{

  }
  return (
    <Box sx={{ flexGrow: 1, maxWidth: "900px", margin: " 0 auto", padding: "16px" }}>
      <Container maxWidth="sm" sx={{textAlign:  "center"}}>
        {webList.map((item)=>{
          return(
            <Box key={item.title}>
              <Typography variant="h2">{item.title}</Typography>
              <Typography>{item.content}</Typography>
              <Typography>例）{item.example}</Typography>
            </Box>
          )
        })}
        
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
