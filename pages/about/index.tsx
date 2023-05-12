import { Box, Container, Grid, Typography } from "@mui/material";
import styles from "../../styles/Home.module.css";
import { aboutList } from "../../libs/aboutList";

const About = () => {
  return (
    <Container
      maxWidth="sm"
    >
      {/* <FirstLogo /> */}
      <Box className={styles.home_contents}>
        <Box className={styles.about_contents}>
          <Box className={styles.tajimuratoha}>
            <Typography variant="h2">たじむらとは</Typography>
            <Typography>
              たじむらとは、夫婦で活動するフリーランスチームです。
              夫の旧姓（たじま）と妻の性（ふたむら）を組み合わせて、命名されました。
              「夫婦でなにかしたい」「初心を忘れない」という想いから名付けました。
            </Typography>
            <Typography>
              ロゴには、「T」と「F」を織り交ぜたものをベースとし、
              すべて等しい長さ（夫婦の歩幅を合わせる意味）で、糸のように織りなすモチーフです。
            </Typography>
            <Typography>  
              色は、日本にゆかりのある「濃紺」と「猩々緋（しょうじょうひ）」を用いています。
            </Typography>
            {/* TODO：ここに顔のイラスト入れたい。左右どっちかに寄せるイメージで */}
          </Box>
          <Box className={styles.vision}>
            <Typography variant="h2">たじむらの目指すところ</Typography>
            <Typography>
              「常に人の一歩先にいたい」「他人と同じことをやりたくない」という想いを抱いております。
              そのきっかけは二人の結婚式でした。初めて二人で何かを作り上げる機会。
            </Typography>
            <Typography>「これって必要ある？」</Typography>
            <Typography>
              日本の結婚式では当然のように行われる慣習を、一から見直しながら、
              自分たちらしさを出していくためにはどんなことができるのか、そもそも
              自分たちらしさとは何かを見つめ直し、最高の結婚式を追求しました。
            </Typography>
            <Typography>
              その結果、多くのゲスト、スタッフに喜んでもらえた結婚式にすることができました。
              この経験が現在の活動でも大きく活かされています。
            </Typography>
            <Typography>
              自分たちだけでは何もできないこと、
            </Typography>
            <Typography>
              そして何より関わる人全員が喜べることほど最高のことが他にはないことを心に刻んでいます。
            </Typography>
            <Typography>
              関わる人全員にとっての、唯一無二の存在になれることを夢見て活動しています。
            </Typography>
          </Box>
          <Box className={styles.about}>
          <Typography variant="h2">会社情報</Typography>
            <Grid container spacing={2}>
              {aboutList.map((item)=>{
                return (
                  <>
                    <Grid item xs={3}>{item.title}</Grid>
                    <Grid item xs={9}>{item.content}</Grid>
                  </>
                )
              })}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
