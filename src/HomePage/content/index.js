import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import MyCarousel from "./Carousel";
const HomePageContent = () => {
  return (
    <Stack
      direction="column"
      sx={{
        width: "100%",
        flexGrow: 1,
        alignItems: "center",
      }}
    >
      <MyCarousel />
    </Stack>
  );
};

export default HomePageContent;
