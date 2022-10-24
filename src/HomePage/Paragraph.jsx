import Typography from "@mui/material/Typography";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
const Paragraph = (props) => {
  const theme = useTheme();
  const isSM = useMediaQuery(theme.breakpoints.down("md"));
  const { children, ...others } = props;
  return (
    <Typography
      variant={isSM ? "body2" : "body1"}
      paragraph
      color={others.color || "text.secondary"}
      sx={{
        fontFamily: "Noto Sans SC",
      }}
    >
      {children}
    </Typography>
  );
};

export default Paragraph;
