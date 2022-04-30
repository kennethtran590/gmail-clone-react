import { Button, IconButton } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import AddIcon from "@mui/icons-material/Add";
import InboxIcon from "@mui/icons-material/Inbox";
import SidebarOption from "./SidebarOption";
import StarIcon from "@mui/icons-material/Star";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import SendIcon from "@mui/icons-material/Send";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";

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
      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={54}
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title="Starred" number={54} />
      <SidebarOption Icon={WatchLaterIcon} title="Snooze" number={54} />
      <SidebarOption Icon={SendIcon} title="Sent" number={54} />
      <SidebarOption Icon={InsertDriveFileIcon} title="Drafts" number={54} />
      <SidebarOption Icon={DeleteIcon} title="Trash" number={54} />
      <SidebarOption Icon={ExpandMoreIcon} />

      <div className="sidebar__footer">
        <div className="sidebar_footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
