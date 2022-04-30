import { Button } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import AddIcon from "@mui/icons-material/Add";
import InboxIcon from "@mui/icons-material/Inbox";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  return (
    <div className="sidebar">
      <Button
        fontSize="large"
        className="sidebar__compose"
        startIcon={<AddIcon />}
      >
        Compose
      </Button>
      <SidebarOption Icon={InboxIcon} title="Inbox" number={54} />
    </div>
  );
}

export default Sidebar;
