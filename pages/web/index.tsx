import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Paper, Typography, styled } from "@mui/material";
import Grid from '@mui/material/Grid';
import { serviceList } from "./serviceList";



const Web = () => {

  const handleClick = () =>{

  }
  return (
    <Box sx={{ flexGrow: 1, maxWidth: "900px", margin: " 0 auto", padding: "16px" }}>
      <Container maxWidth="sm">
        
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
