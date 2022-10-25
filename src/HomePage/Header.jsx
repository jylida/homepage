import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import DrawerList from "./DrawerList";
import Logo from "../static/images/Logo.svg";
import RedirectToAdminButton from "./RedirectToAdminButton";
const listNames = [
  { name: "学校简介", url: "/intro" },
  // { name: "招生信息", url: "/admin" },
  { name: "加入我们", url: "/hire" },
];

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const theme = useTheme();
  const isSM = useMediaQuery(theme.breakpoints.down("md"));
  const headerHeightChange = isSM ? 48 : 128;
  useEffect(() => {
    let timer;
    const handleScroll = (e) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setScrollY(window.scrollY);
      }, 15);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <AppBar
      component="nav"
      elevation={0}
      sx={{
        position: "fixed",
        top: 0,
        borderBottom: { xs: "5px solid #368B91", md: "10px solid #368B91" },
        height: isSM
          ? 128 - Math.min(48, scrollY)
          : 256 - Math.min(128, scrollY),
      }}
    >
      <Toolbar
        component="nav"
        sx={{
          backgroundColor: "#f5f7f7",
          color: "black",
          paddingX: { xs: "1rem", md: "3rem" },
          paddingTop: "0.3rem", //compensate bottom margin from Container component
          height: "100%",
        }}
      >
        <Container
          maxWidth="lg"
          disableGutters
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: { xs: "space-between", md: "flex-start" },
            alignItems: "center",
          }}
        >
          <Link to="/">
            <Box
              component="img"
              src={Logo}
              alt="School Logo"
              sx={{
                padding: {
                  xs: "0.5rem 0.5rem 0.5rem 0",
                  md: "1rem 1rem 1rem 0",
                },
                height: { xs: "4rem", md: "6rem" },
              }}
            />
          </Link>
          <Stack
            direction="column"
            sx={{
              flexGrow: 1,
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Typography
              component={Link}
              to="/"
              fontFamily="Noto Serif SC"
              letterSpacing={2}
              sx={{
                fontSize: 15,
                opacity: Math.max(0, 1 - scrollY / headerHeightChange),
                textDecoration: "none",
                color: "black",
              }}
            >
              呼和浩特市
            </Typography>
            <Typography
              component={Link}
              to="/"
              fontWeight={900}
              letterSpacing={6}
              sx={{
                fontSize: { xs: 30, md: 40 },
                fontFamily: "Noto Serif SC",
                opacity: Math.max(0, 1 - scrollY / headerHeightChange),
                textDecoration: "none",
                color: "black",
              }}
            >
              敬业学校
            </Typography>
          </Stack>
          {isSM ? (
            <DrawerList list={listNames} />
          ) : (
            <>
              {listNames.map((item) => (
                <Box
                  component={Link}
                  key={`Homepage-AppBar-menu-lg-${item.name}`}
                  to={item.url}
                  sx={{
                    textDecoration: "none",
                    color: "text.secondary",
                    marginRight: "1.5rem",
                  }}
                >
                  <Typography variant="subtitle1" fontWeight="bold">
                    {item.name}
                  </Typography>
                </Box>
              ))}
              <RedirectToAdminButton />
            </>
          )}
        </Container>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
