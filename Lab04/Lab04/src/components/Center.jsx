import React from "react";
import "./Center.css"; 
import salad1 from "./img/salad1.jpg";
import salad2 from "./img/salad2.jpg";
import salad3 from "./img/salad3.jpg";
import salad4 from "./img/salad4.jpg";
import salad5 from "./img/salad5.jpg";
import salad6 from "./img/salad6.jpg";

function Center() {
  // Danh sách món ăn
  const salads = [
    { img: salad1, name: "Cucumber salad, cherry tomatoes" },
    { img: salad2, name: "Italian-style tomato salad" },
    { img: salad3, name: "Potato Salad" },
    { img: salad4, name: "Salad with cabbage and shrimp" },
    { img: salad5, name: "Five-color salad" },
    { img: salad6, name: "Corn Salad" },
  ];

  return (
    <div className="p-6 w-full">
      {/* Tiêu đề */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Salad (32)</h2>
        <select className="border px-3 py-2 rounded-md">
          <option>A-Z</option>
          <option>Z-A</option>
          <option>Most Popular</option>
        </select>
      </div>

      {/* Grid danh sách món ăn */}
      <div className="grid grid-cols-3 gap-6">
        {salads.map((salad, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={salad.img} className="w-full h-48 object-cover" alt={salad.name} />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{salad.name}</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-pink-500">32 minutes</span>
                <button className="text-pink-500 border border-pink-500 rounded-full p-2">
                  ❤️
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Center;
