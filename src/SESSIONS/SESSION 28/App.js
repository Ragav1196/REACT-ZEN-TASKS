import "./App.css";
import { TopBar } from "./SESSIONS/SESSION 28/TopBar";
import { MainContent } from "./SESSIONS/SESSION 28/MainContent";
import { SideMenuBar } from "./SESSIONS/SESSION 28/SideMenuBar";

export default function App() {
  return (
    <section className="wholeContent">
      <SideMenuBar />
      <div className="middleWholeContent">
        <TopBar />
        <MainContent />        
      </div>    
    </section>
  );
}
