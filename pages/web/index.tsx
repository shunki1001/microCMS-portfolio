import { Box, Card, CardActionArea, CardContent, CardMedia, Paper, Typography, styled } from "@mui/material";
import Grid from '@mui/material/Grid';
import { serviceList } from "./serviceList";



const Web = () => {

  const handleClick = () =>{

  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{justifyContent: "center" }}>
        {serviceList.map((item)=>{
          return (
            <Grid item md={6}>
              <Card sx={{ maxWidth: 345, margin: "0 auto"}}>
                <CardActionArea onClick={handleClick}>
                  <CardMedia
                    component="img"
                    height="140"
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
