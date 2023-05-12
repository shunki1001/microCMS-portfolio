import Sidebar from "../Sidebar";
import { useMediaQuery } from "react-responsive";
import FirstLogo from "../FirstLogo";
import Footer from "../Footer";
import { ReactNode, useEffect, useState } from "react";
import styles from "./ResponsiveLayout.module.css";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";

interface Props {
  children: ReactNode;
}

const footerText:string = "©tajimura 2023"

const ResponsiveLayout: React.FC<Props> = ({ children }) => {
  // hydrationエラー解消のため必要
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  // メディアクエリ
  const isWideScreen: boolean = useMediaQuery({
    query: "(min-width:768px)",
  });
  // スマホドロワー
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={styles.background}>
      <FirstLogo />
      {mounted && (
        <>
          {isWideScreen ? (
            <>
              <Sidebar
                variant="permanent"
                anchor="left"
                open={false}
                setOpen={() => {}}
              />
              <div className={styles.main_container_with_sidebar}>
                {children}
                <Box
                  className={styles.footer}
                >
                  <Typography>{footerText}</Typography>
                </Box>
              </div>
            </>
          ) : (
            <div className={styles.sp_container}>
              <AppBar position="static" color="inherit">
                <Toolbar>
                  <Box>
                    <Link href="/">
                      <Image
                        src="/images/only-text.svg"
                        width={240}
                        height={24}
                      />
                    </Link>
                  </Box>
                  <Box sx={{ flexGrow: 1 }} />
                  <IconButton onClick={() => setOpen(true)} color="inherit">
                    <MenuIcon />
                  </IconButton>
                </Toolbar>
              </AppBar>
              <Sidebar
                variant="temporary"
                anchor="right"
                open={open}
                setOpen={setOpen}
              />
              <div className={styles.main_container}>
                {children}
                <Box
                  className={styles.footer}
                >
                  <Typography>{footerText}</Typography>
                </Box>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ResponsiveLayout;
