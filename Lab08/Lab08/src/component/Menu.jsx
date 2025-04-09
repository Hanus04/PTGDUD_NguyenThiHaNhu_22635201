const Menu = ({ activePage, setActivePage }) => {
    const menuItems = [
      { id: "dashboard", icon: "./Squares_four_1.png", label: "Dashboard" },
      { id: "projects", icon: "./Folder.png", label: "Projects" },
      { id: "teams", icon: "./Groups.png", label: "Teams" },
      { id: "analytics", icon: "./Pie_chart.png", label: "Analytics" },
      { id: "messages", icon: "./Chat.png", label: "Messages" },
      { id: "integrations", icon: "./Code.png", label: "Integrations" },
    ];
  
    return (
      <div className="p-5 border-r border-gray-300">
        <img src="./logo.png" alt="Logo" />
  
        {menuItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActivePage(item.id)}
            className={`flex gap-3 px-3 py-1.5 rounded mt-3 cursor-pointer transition-all duration-200 ${
              activePage === item.id
                ? "bg-blue-100 text-blue-700 font-semibold"
                : "hover:bg-gray-100"
            }`}
          >
            <img src={item.icon} alt={item.label} />
            <p className="ml-3">{item.label}</p>
          </div>
        ))}
  
        <div className="mt-10 bg-[#EFF6FF] p-5 flex flex-col gap-5 items-center">
          <img src="./Group.png" alt="Update Notice" />
          <p className="font-medium text-2xl">V2.0 is available</p>
          <button className="bg-white text-blue-700 border border-blue-700 px-3 py-1.5 w-full rounded hover:bg-blue-700 hover:text-white transition-all duration-300">
            Try now
          </button>
        </div>
      </div>
    );
  };
  
  export default Menu;
  