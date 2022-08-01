/* eslint-disable react/jsx-key */
import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Call, InfoOutlined, Send } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

type Anchor = "left";

export default function Menu() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      width="250px"
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItemButton>
          <ListItemIcon>
            <a href={`tel:${+998915316673}`}>
              <Call /> Number
            </a>
          </ListItemIcon>
        </ListItemButton>
      </List>
      <List>
        <ListItemButton>
          <ListItemIcon>
            <a href={`${"https://t.me/Kunxabariofficial"}`}>
              {" "}
              <Send />
              Telegram
            </a>
          </ListItemIcon>
        </ListItemButton>
      </List>
      <Divider />
    </Box>
  );

  return (
    <Box>
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className="muibtn" onClick={toggleDrawer(anchor, true)}>
            <MenuIcon> {anchor}</MenuIcon>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </Box>
  );
}
