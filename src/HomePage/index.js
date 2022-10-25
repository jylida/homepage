import Stack from "@mui/material/Stack";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      minHeight="100vh"
      width="100%"
    >
      <Header />
      <Outlet />
      <Footer />
    </Stack>
  );
};

export default HomePage;
