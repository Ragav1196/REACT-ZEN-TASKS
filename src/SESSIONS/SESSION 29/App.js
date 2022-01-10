import "./App.css";
import { TopBar } from "./SESSIONS/SESSION 28/TopBar";
import { MainContent } from "./SESSIONS/SESSION 28/MainContent";
import { SideMenuBar } from "./SESSIONS/SESSION 28/SideMenuBar";
import { AdminPanel } from "./SESSIONS/SESSION 28/PRODUCTS LIST/AdminPanel";
import { AdminPanel as UsersAdminPanel } from "./SESSIONS/SESSION 28/USERS LIST/AdminPanel";
import { Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <section className="wholeContent">
            <SideMenuBar />
            <div className="middleWholeContent">
              <TopBar />
              <MainContent />
            </div>
          </section>
        </Route>

        <Route path="/products-list">
          <div className="adminPanel">
            <SideMenuBar />
            <AdminPanel />
          </div>
        </Route>

        <Route path="/users-list">
          <div className="adminPanel">
            <SideMenuBar />
            <UsersAdminPanel />
          </div>
        </Route>
      </Switch>
    </div>
  );
}
