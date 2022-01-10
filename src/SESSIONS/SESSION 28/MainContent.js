import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PendingActionsIcon from "@mui/icons-material/PendingActions";

// MAIN CONTENT
export function MainContent() {
  return (
    <article className="mainContent">
      <h1>DASHBOARD</h1>
      {/* PERSONAL DETAILS */}
      <div className="personalDetails" id="personalDetails1">
        <div></div>
        <div>
          <p>EARNINGS (MONTHLY)</p>
          <p>$ 40,000</p>
        </div>
        <CalendarTodayIcon />
      </div>
      <div className="personalDetails" id="personalDetails2">
        <div></div>
        <div>
          <p>EARNINGS (ANNUAL)</p>
          <p>$ 215,000</p>
        </div>
        <AttachMoneyIcon />
      </div>
      <div className="personalDetails" id="personalDetails3">
        <div></div>
        <div>
          <p>TASKS</p>
          <p>50%</p>
        </div>
        <AssignmentIcon />
      </div>
      <div className="personalDetails" id="personalDetails4">
        <div></div>
        <div>
          <p>PENDING REQUESTS</p>
          <p>18</p>
        </div>
        <PendingActionsIcon />
      </div>
      <div></div>
      <div></div>

      {/* COLOR BOX */}
      <div className="colorBoxContainer">
        <div className="colorBox" id="colorBox1">
          <p>Primary</p>
          <p>#4e73df</p>
        </div>
        <div className="colorBox" id="colorBox2">
          <p>Success</p>
          <p>#1cc88a</p>
        </div>
        <div className="colorBox" id="colorBox3">
          <p>Info</p>
          <p>#36b9cc</p>
        </div>
        <div className="colorBox" id="colorBox4">
          <p>Warning</p>
          <p>#f6c23e</p>
        </div>
        <div className="colorBox" id="colorBox5">
          <p>Danger</p>
          <p>#e74a3b</p>
        </div>
        <div className="colorBox" id="colorBox6">
          <p>Secondary</p>
          <p>#858796</p>
        </div>
        <div className="colorBox" id="colorBox8">
          <p>Dark</p>
          <p>#5a5c69</p>
        </div>
      </div>
    </article>
  );
}
