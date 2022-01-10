import SpeedIcon from "@mui/icons-material/Speed";
import SettingsIcon from "@mui/icons-material/Settings";
import BuildIcon from "@mui/icons-material/Build";
import FolderIcon from "@mui/icons-material/Folder";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import TableChartIcon from "@mui/icons-material/TableChart";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useHistory } from "react-router-dom";
import { useState } from "react";

export function SideMenuBar() {
  const content = [
    {
      icon: <EmojiEmotionsIcon />,
      fieldName: "Home",
      historyPath: "/",
    },
    {
      icon: <AdminPanelSettingsIcon />,
      fieldName: "Admin Panel",
      dropDown: 1,
    },
    {
      icon: <SpeedIcon />,
      fieldName: "Dashboard",
    },
    {
      icon: <SettingsIcon />,
      fieldName: "Components",
    },
    {
      icon: <BuildIcon />,
      fieldName: "Utilities",
    },
    {
      icon: <FolderIcon />,
      fieldName: "Pages",
    },
    {
      icon: <StackedBarChartIcon />,
      fieldName: "Charts",
    },
    {
      icon: <TableChartIcon />,
      fieldName: "Tables",
    },
  ];
  return (
    <section className="sidebarContainer">
      {content.map((data, index) => (
        <SidebarContent Data={data} key={index} />
      ))}
    </section>
  );
}

export function SidebarContent({ Data }) {
  const [hideDrpDwn, setHideDrpDwn] = useState(false);

  const history = useHistory();
  return (
    <section onMouseLeave={() => setHideDrpDwn(false)}>
      <section
        className="sidebarContent"
        onClick={() => {
          if (Data.historyPath) {
            history.push(Data.historyPath);
          }
        }}
      >
        <p
          onClick={() => {
            if (Data.dropDown) {
              setHideDrpDwn(!hideDrpDwn);
            }
          }}
        >
          {Data.icon}
        </p>
        <article>
          <p
            onClick={() => {
              if (Data.dropDown) {
                setHideDrpDwn(!hideDrpDwn);
              }
            }}
          >
            {Data.fieldName}
            {Data.dropDown ? <ArrowDropDownIcon /> : ""}
          </p>          
        </article>
      </section>
      <article className="dropDown">{hideDrpDwn ? <DropDown /> : ""}</article>
    </section>
  );
}

function DropDown() {
  const dropDown = [
    {
      icon: <PersonIcon />,
      fieldName: "Users List",
      historyPath: "/users-list",
    },
    {
      icon: <ShoppingCartIcon />,
      fieldName: "Products List",
      historyPath: "/products-list",
    },
  ];

  return (
    <section>
      {dropDown.map((Data, index) => (
        <DropDownContent Data={Data} key={index} />
      ))}
    </section>
  );
}

function DropDownContent({ Data }) {
  const history = useHistory();
  return (
    <section
      className="sidebarContent"
      onClick={() => {
        if (Data.historyPath) {
          history.push(Data.historyPath);
        }
      }}
    >
      <p>{Data.icon}</p>
      <article>
        <p>{Data.fieldName}</p>
      </article>
    </section>
  );
}
