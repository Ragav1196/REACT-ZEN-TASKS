import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import { useState } from "react";

// TOP MENU BAR
export function TopBar() {
  // SEARCH BUTTON
  const [search, setSearch] = useState(true);

  const searchStyles = {
    opacity: search ? "0" : "1",
    transform: search ? "scaleX(0.7)" : "scaleX(1)",
  };

  // ALERTS BUTTON
  const [alerts, setAlerts] = useState(true);

  const alertsStyles = {
    opacity: alerts ? "0" : "1",
    transform: alerts ? "scaleX(0.7)" : "scaleX(1)",
  };

  // MESSAGE BUTTON
  const [message, setMessage] = useState(true);

  const messageStyles = {
    opacity: message ? "0" : "1",
    transform: message ? "scaleX(0.7)" : "scaleX(1)",
  };

  return (
    <article className="topBarContainer">
      {/* SEARCH BUTTON */}
      <div style={searchStyles} className="Search">
        <input type="text" placeholder="Search for..." />
        <IconButton aria-label="calender">
          <SearchIcon />
        </IconButton>
      </div>

      {/* ALERTS BUTTON */}
      <div style={alertsStyles} className="alerts">
        <div>
          <p>ALERTS CENTER</p>
        </div>
        <div className="alertsDetailsContainer">
          <div className="alertsDetails" id="alertsDetails1">
            <div>
              <TextSnippetIcon />
            </div>
            <div>
              <p>December 12, 2019</p>
              <p>A new monthly report is ready to download!</p>
            </div>
          </div>
          <div className="alertsDetails" id="alertsDetails2">
            <div>
              <PriceCheckIcon />
            </div>
            <div>
              <p>December 7, 2019</p>
              <p>$290.29 has been deposited into your account!</p>
            </div>
          </div>
          <div className="alertsDetails" id="alertsDetails3">
            <div>
              <AddAlertIcon />
            </div>
            <div>
              <p>December 2, 2019</p>
              <p>
                Spending Alert: We've noticed unusually high spending for your
                account.
              </p>
            </div>
          </div>
        </div>
        <div>
          <p>Show All Alerts</p>
        </div>
      </div>

      {/* MESSAGE BUTTON */}
      <div style={messageStyles} className="message">
        <div>
          <p>MESSAGE CENTER</p>
        </div>
        <div className="messageDetailsContainer">
          <div className="messageDetails">
            <div>
              <img
                src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile_1.svg"
                alt="profile"
              />
            </div>
            <div>
              <p>
                Hi there! I am wondering if you can help me with a problem I've
                been having.
              </p>
              <p>Emily Fowler · 58m</p>
            </div>
          </div>
          <div className="messageDetails">
            <div>
              <img
                src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile_2.svg"
                alt="profile"
              />
            </div>
            <div>
              <p>
                I have the photos that you ordered last month, how would you
                like them sent to you?
              </p>
              <p>Jae Chun · 1d</p>
            </div>
          </div>
          <div className="messageDetails">
            <div>
              <img
                src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile_3.svg"
                alt="profile"
              />
            </div>
            <div>
              <p>
                Last month's report looks great, I am very happy with the
                progress so far, keep up the good work!
              </p>
              <p>Morgan Alvarez . 2d</p>
            </div>
          </div>
          <div className="messageDetails">
            <div>
              <img
                src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                alt="profile"
              />
            </div>
            <div>
              <p>
                Am I a good boy? The reason I ask is because someone told me
                that people say this to all dogs, even if they aren't good...
              </p>
              <p>Chicken the Dog · 2w</p>
            </div>
          </div>
        </div>
        <div>
          <p>Show All Messages</p>
        </div>
      </div>

      <div className="topBarButtons">
        {/* SEARCH BUTTON */}
        <IconButton
          onClick={() => {
            setSearch(!search);
            setAlerts(true);
            setMessage(true);
          }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>

        {/* ALERTS BUTTON */}
        <IconButton
          onClick={() => {
            setAlerts(!alerts);
            setSearch(true);
            setMessage(true);
          }}
          aria-label="Notification"
        >
          <NotificationsIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            setMessage(!message);
            setAlerts(true);
            setSearch(true);
          }}
          aria-label="profilePic"
        >
          <EmailIcon />
        </IconButton>
        <div>
          <img
            src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile.svg"
            alt="profile"
          />
        </div>
      </div>
    </article>
  );
}
