import Stack from "@mui/material/Stack";
import MyCarousel from "./Carousel";
const HomePageContent = () => {
  return (
    <Stack
      direction="column"
      sx={{
        marginTop: { xs: "128px", md: "256px" },
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
