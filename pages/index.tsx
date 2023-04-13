import { Box, Typography } from "@mui/material";
import { NextPage } from "next";
import styles from "../styles/Home.module.css";

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
      <Box className={styles.home_contents}>
        <Typography variant="h2">たじむらとは</Typography>
        <Typography>
          たじむらとは、夫婦で活動するフリーランスチームです。
          夫の旧姓（たじま）と妻の性（ふたむら）を組み合わせて、命名されました。
          「夫婦でなにかしたい」「初心を忘れない」という想いから名付けました。
        </Typography>
        <Typography>
          ロゴには、「T」と「F」を織り交ぜたものをベースとし、
          すべて等しい長さ（夫婦の歩幅を合わせる意味）で、糸のように織りなすモチーフです。
          色は、日本にゆかりのある「濃紺」と「猩々緋（しょうじょうひ）」を用いています。
        </Typography>
        <Typography variant="h2">唯一無二の存在になりたい</Typography>
        <Typography>
          「常に人の一歩先にいたい」「他人と同じことをやりたくない」という想いを抱いております。
          そのきっかけは二人の結婚式でした。初めて二人で何かを作り上げる機会。
        </Typography>
        <Typography>「これって必要ある？」</Typography>
        <Typography>
          日本の結婚式では当然のように行われる慣習を、一から見直し、自分たち、ゲスト、会場スタッフ
          「三方よし」の結婚式を目指しました。
          その中で、自分たちらしさを出していくためにはどんなことができるのか、そもそも
          自分たちらしさとは何かを見つめ直し、無事に当日を迎えることができました。
          この経験が現在の活動でも大きく活かされています。
        </Typography>
        <Typography>
          「唯一無二の存在になりたい」これは一見すると、自己中心的な考えになるかもしれません。
          しかし、自分たちだけでは何もできないことは会社員生活で身にしみて感じています。
          そして何より関わる人全員が喜べることほど、最高のことが他にはないことを、結婚式で学びました。
        </Typography>
        <Typography>
          関わる人全員にとっての、唯一無二の存在になれることを夢見て活動しています。
          ロゴに使われている「猩々緋（しょうじょうひ）」色とは、戦国武将が陣羽織に挙って使った色。
          海外から伝わった色で、当時の日本では先端の色で、自身や周りを鼓舞するような働きもあるのではないかと考えています。
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
