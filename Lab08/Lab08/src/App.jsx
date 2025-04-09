import { useState } from "react";
import Header from "./component/Header";
import Menu from "./component/Menu";

import Dashboard from "./component/OrderTable";
import Projects from "./pages/Projects";
import Teams from "./pages/Teams";
import Analytics from "./pages/Analytics";
import Messages from "./pages/Messages";
import Integrations from "./pages/Integrations";

const App = () => {
  const [activePage, setActivePage] = useState("dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "projects":
        return <Projects />;
      case "teams":
        return <Teams />;
      case "analytics":
        return <Analytics />;
      case "messages":
        return <Messages />;
      case "integrations":
        return <Integrations />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="grid grid-cols-[2fr_8fr] min-h-screen">
      <div>
        <Menu activePage={activePage} setActivePage={setActivePage} />
      </div>
      <div>
        <Header />
        {renderPage()}
      </div>
    </div>
  );
};

export default App;
