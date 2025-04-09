import React, { useState } from "react";
import EditDetail from "./EditDetail";

const ordersData = [
  {
    id: "1",
    customerName: "Elizabeth Lee",
    company: "AvatarSystems",
    orderValue: 359,
    orderDate: "10/07/2023",
    status: "New",
  },
  {
    id: "2",
    customerName: "Carlos Garcia",
    company: "SmoozeShift",
    orderValue: 747,
    orderDate: "24/07/2023",
    status: "New",
  },
  {
    id: "3",
    customerName: "Elizabeth Bailey",
    company: "Prime Time Telecom",
    orderValue: 564,
    orderDate: "08/08/2023",
    status: "In-progress",
  },
  {
    id: "4",
    customerName: "Ryan Brown",
    company: "OmniTech Corporation",
    orderValue: 541,
    orderDate: "31/08/2023",
    status: "In-progress",
  },
  {
    id: "5",
    customerName: "Ryan Young",
    company: "DataStream Inc.",
    orderValue: 769,
    orderDate: "01/05/2023",
    status: "Completed",
  },
  {
    id: "6",
    customerName: "Hailey Adams",
    company: "FlowRush",
    orderValue: 922,
    orderDate: "10/06/2023",
    status: "Completed",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "New":
      return "bg-yellow-100 text-yellow-800";
    case "In-progress":
      return "bg-blue-100 text-blue-800";
    case "Completed":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const OrderTable = () => {
  const [orders, setOrders] = useState(ordersData);
  const [selectedId, setSelectedId] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const openEdit = (id) => {
    setSelectedId(id);
    setIsEditOpen(true);
  };

  const closeEdit = () => {
    setIsEditOpen(false);
  };

  const fetchOrderData = async () => {
    const res = await fetch("http://localhost:3001/orders");
    const data = await res.json();
    setOrders(data);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="bg-white rounded-xl p-6 w-full shadow-xl">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-6">Orders Overview</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-gray-700">ID</th>
                <th className="px-4 py-3 text-left font-medium text-gray-700">Customer Name</th>
                <th className="px-4 py-3 text-left font-medium text-gray-700">Company</th>
                <th className="px-4 py-3 text-left font-medium text-gray-700">Order Value</th>
                <th className="px-4 py-3 text-left font-medium text-gray-700">Order Date</th>
                <th className="px-4 py-3 text-left font-medium text-gray-700">Status</th>
                <th className="px-4 py-3 text-left font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 border-b">
                  <td className="px-4 py-3">{order.id}</td>
                  <td className="px-4 py-3">{order.customerName}</td>
                  <td className="px-4 py-3">{order.company}</td>
                  <td className="px-4 py-3">${order.orderValue.toLocaleString()}</td>
                  <td className="px-4 py-3">{order.orderDate}</td>
                  <td className="px-4 py-3">
                    <span className={`px-3 py-1 text-sm rounded-full font-semibold ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => openEdit(order.id)}
                      className="px-3 py-1 rounded bg-[#E64F84] text-white hover:bg-[#ff1491]"
                    >
                      Sửa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <EditDetail
        id={selectedId}
        isOpen={isEditOpen}
        onClose={closeEdit}
        fetchOrderData={fetchOrderData}
      />
    </div>
  );
};

export default OrderTable;
