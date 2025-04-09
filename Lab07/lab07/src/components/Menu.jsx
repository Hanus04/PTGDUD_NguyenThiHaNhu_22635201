const Menu = () => {
    return (
      <div className="p-5 border-r border-gray-300">
        <img src="./logo.png" alt="Logo" />
        <div className="mt-5 flex flex-col gap-5 text-gray-500">
          <div className="flex gap-3 px-3 py-1.5 rounded hover:bg-gray-100 cursor-pointer">
            <img src="./Squares_four_1.png" alt="Dashboard" />
            <p>Dashboard</p>
          </div>
          <div className="flex gap-3 px-3 py-1.5 rounded hover:bg-gray-100 cursor-pointer">
            <img src="./Folder.png" alt="Projects" />
            <p>Projects</p>
          </div>
          <div className="flex gap-3 px-3 py-1.5 rounded hover:bg-gray-100 cursor-pointer">
            <img src="./Groups.png" alt="Teams" />
            <p>Teams</p>
          </div>
          <div className="flex gap-3 px-3 py-1.5 rounded hover:bg-gray-100 cursor-pointer">
            <img src="./Pie_chart.png" alt="Analytics" />
            <p>Analytics</p>
          </div>
          <div className="flex gap-3 px-3 py-1.5 rounded hover:bg-gray-100 cursor-pointer">
            <img src="./Chat.png" alt="Messages" />
            <p>Messages</p>
          </div>
          <div className="flex gap-3 px-3 py-1.5 rounded hover:bg-gray-100 cursor-pointer">
            <img src="./Code.png" alt="Integrations" />
            <p>Integrations</p>
          </div>
        </div>
  
        <div className="mt-20 bg-[#EFF6FF] p-5 flex flex-col gap-5 items-center">
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
  