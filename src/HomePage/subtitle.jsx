import Typography from "@mui/material/Typography";

const Subtitle = (props) => {
  const { children, ...others } = props;
  return (
    <Typography
      {...others}
      fontFamily="Noto Serif SC"
      sx={{
        fontSize: 25,
      }}
    >
      {children}
    </Typography>
  );
};

export default Subtitle;
