import { Box, Drawer } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import linkList from "./linkList";
import styles from "./Sidebar.module.css";
import { useEffect } from "react";

export const drawerWidth = 240;

interface Props {
  variant: "permanent" | "persistent" | "temporary" | undefined;
  anchor: "left" | "top" | "right" | "bottom" | undefined;
  open: boolean;
  setOpen: (value: boolean) => void;
}

const Sidebar: React.FC<Props> = (props) => {
  const { variant, anchor, open, setOpen } = props;
  const router = useRouter();

  useEffect(()=>{
    setOpen(false)
  },[router.pathname])
  return (
    <Drawer
      variant={variant}
      anchor={anchor}
      open={open}
      onClose={() => setOpen(false)}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Box className={styles.logo_container}>
        <Link href="/">
          <a>
            <img src="/images/menu-logo.png" className={styles.logo} />
          </a>
        </Link>
      </Box>
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
                <li>{menu.name}</li>
                <div className={styles.icon_container}></div>
              </a>
            </Link>
          );
        })}
      </Box>
    </Drawer>
  );
};

export default Sidebar;
