import { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import RedirectToAdminButton from "./RedirectToAdminButton";
const DrawerList = ({ list }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box
          role="presentation"
          sx={{
            width: "200px",
          }}
        >
          <List>
            {list.map((item) => (
              <ListItem
                key={`Homepage-sidebar-list-item-${item.name}`}
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Box
                  component={Link}
                  to={item.url}
                  sx={{
                    textDecoration: "none",
                    color: "#368B91",
                  }}
                >
                  <Typography variant="h6" textAlign="center" fontWeight="bold">
                    {item.name}
                  </Typography>
                </Box>
              </ListItem>
            ))}
            <Divider />
            <ListItem
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <RedirectToAdminButton />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default DrawerList;
