import { Chip, Container, Typography } from "@mui/material";
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import styles from "../../styles/Home.module.css";

const Contact = () => {
  return (
    <Container maxWidth="md" className={styles.contact}>
      <Typography>メールへ直接ご連絡いただくか、以下のフォームよりお問い合わせください。</Typography>
      <Chip
        label="tajimura0505 'at' gmail.com へのメールを作成する"
        component="a"
        href="mailto:tajimura0505@gmail.com"
        style={{cursor: 'pointer'}}
      />
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfRXSdUDidNx3Ho3z0vtrGPiyJAglc904Kc8usYj2W-8CV6Aw/viewform?embedded=true" width="640" height="1000" frameBorder="0" marginHeight={0} marginWidth={0}>
        読み込んでいます…
        </iframe>
    </Container>
  );
};

export default Contact;
