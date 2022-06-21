import Link from "next/link";
import { useRouter } from "next/router";
import linkList from "./linkList";

import { Box, Toolbar } from "@mui/material";
import styles from "./Header.module.css";

const Header = () => {
  const router = useRouter();

  return (
    <Toolbar>
      <Box className={styles.nav_container} component="nav">
        {linkList.map((menu) => {
          return (
            <Link href={menu.path} key={menu.name}>
              <a
                className={
                  router.pathname == menu.path
                    ? `${styles.nav_active} ${styles.nav_link}`
                    : `${styles.nav_link}`
                }
              >
                {menu.name}
              </a>
            </Link>
          );
        })}
      </Box>
    </Toolbar>
  );
};

export default Header;
