import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Fade, FormControlLabel, Paper, Stack, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, styled } from "@mui/material";
import Grid from '@mui/material/Grid';
import { serviceList } from "../../libs/serviceList";
import { skillList } from "../../libs/skillList";

import { GitHub } from "@mui/icons-material";
import Link from "next/link";

const Web = () => {

  const handleClick = () =>{

  }
  return (
    <Box sx={{ flexGrow: 1, maxWidth: "900px", margin: " 0 auto", padding: "16px" }}>
      <Container maxWidth="md" sx={{textAlign:  "center"}}>
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
        <Stack justifyContent="center" alignItems="center" sx={{margin: "1em auto"}}>
          <Link href="https://github.com/shunki1001" style={{cursor: 'pointer'}}>
            <Button variant="outlined" startIcon={<GitHub />} sx={{maxWidth:"10em"}}>
              github
            </Button>
          </Link>
        </Stack>
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
                    height="250"
                    src={item.img}
                    alt=""
                    sx={{opacity: "0.5"}}
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
