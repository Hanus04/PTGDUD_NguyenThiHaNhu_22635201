import { NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <div className="p-5 border-r border-gray-300">
      <img src="./logo.png" alt="Logo" />
      <NavLink to='/' className="flex gap-3 px-3 py-1.5 rounded">
        <img src="./Squares_four_1.png" alt="Dashboard" />
        <p>Dashboard</p>
      </NavLink>
      <NavLink to='/projects' className="flex gap-3 px-3 py-1.5 rounded">
        <img src="./Folder.png" alt="Projects" />
        <p>Projects</p>
      </NavLink>
      <NavLink to='/teams' className="flex gap-3 px-3 py-1.5 rounded">
        <img src="./Groups.png" alt="Teams" />
        <p>Teams</p>
      </NavLink>
      <NavLink to='/analytics' className="flex gap-3 px-3 py-1.5 rounded">
        <img src="./Pie_chart.png" alt="Analytics" />
        <p>Analytics</p>
      </NavLink>
      <NavLink to='/messages' className="flex gap-3 px-3 py-1.5 rounded">
        <img src="./Chat.png" alt="Messages" />
        <p>Messages</p>
      </NavLink>
      <NavLink to='/integrations' className="flex gap-3 px-3 py-1.5 rounded">
        <img src="./Code.png" alt="Integrations" />
        <p>Integrations</p>
      </NavLink>

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
