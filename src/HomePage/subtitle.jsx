import Typography from "@mui/material/Typography";

const Subtitle = (props) => {
  const { children, ...others } = props;
  return (
    <Typography
      {...others}
      fontFamily="Noto Serif SC"
      sx={{
        fontSize: 25,
        paddingBottom: { xs: "0.5rem", md: "2rem" },
      }}
    >
      {children}
    </Typography>
  );
};

export default Subtitle;
