import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LinkIcon from "@mui/icons-material/Link";
import MuiLink from "@mui/material/Link";
const RedirectToAdminButton = () => {
  return (
    <MuiLink
      href="https://jingyeschool.org.cn:8441"
      target="_blank"
      sx={{
        textDecoration: "none",
      }}
    >
      <Button endIcon={<LinkIcon color="error" />} variant="text">
        <Typography variant="subtitle1" fontWeight="bold" color="error">
          信息系统
        </Typography>
      </Button>
    </MuiLink>
  );
};

export default RedirectToAdminButton;
