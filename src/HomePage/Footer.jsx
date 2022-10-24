import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Stack component="footer" direction="column" alignItems="center">
      <Typography
        sx={{ fontSize: 10, fontFamily: "Noto Sans SC" }}
        color="text.secondary"
      >
        版权&copy;{new Date().getFullYear()} 呼和浩特市敬业学校
      </Typography>
      <Link
        href="https://beian.miit.gov.cn/#/Integrated/index"
        underline="none"
        color="text.secondary"
        sx={{
          fontFamily: "Noto Sans SC",
          fontSize: 12,
        }}
      >
        蒙ICP备2022003259号-1
      </Link>
    </Stack>
  );
};
export default Footer;
