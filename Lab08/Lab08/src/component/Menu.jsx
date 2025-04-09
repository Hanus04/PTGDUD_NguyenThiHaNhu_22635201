import { NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <div className="p-5 border-r border-gray-300">
      <img src="./logo.png" alt="Logo" />
      <NavLink to='/' className="flex gap-3 px-3 py-1.5 rounded mt-5">
        <img src="./Squares_four_1.png" alt="Dashboard" />
        <p className="ml-3">Dashboard</p>
      </NavLink>
      <NavLink to='/projects' className="flex gap-3 px-3 py-1.5 rounded mt-3">
        <img src="./Folder.png" alt="Projects" />
        <p className="ml-3">Projects</p>
      </NavLink>
      <NavLink to='/teams' className="flex gap-3 px-3 py-1.5 rounded mt-3">
        <img src="./Groups.png" alt="Teams" />
        <p className="ml-3">Teams</p>
      </NavLink>
      <NavLink to='/analytics' className="flex gap-3 px-3 py-1.5 rounded mt-3">
        <img src="./Pie_chart.png" alt="Analytics" />
        <p className="ml-3">Analytics</p>
      </NavLink>
      <NavLink to='/messages' className="flex gap-3 px-3 py-1.5 rounded mt-3">
        <img src="./Chat.png" alt="Messages" />
        <p className="ml-3">Messages</p>
      </NavLink>
      <NavLink to='/integrations' className="flex gap-3 px-3 py-1.5 rounded mt-3">
        <img src="./Code.png" alt="Integrations" />
        <p className="ml-3">Integrations</p>
      </NavLink>

      <div className="mt-20 bg-[#EFF6FF] p-5 flex flex-col gap-5 items-center">
        <img src="./Group.png" alt="Update Notice" />
        <p className="font-medium text-2xl">V2.0 is available</p>
        <button className="bg-white text-pink-700 border border-pink-700 px-3 py-1.5 w-full rounded hover:bg-pink-700 hover:text-white transition-all duration-300">
          Try now
        </button>
      </div>
    </div>
  );
};

export default Menu;
