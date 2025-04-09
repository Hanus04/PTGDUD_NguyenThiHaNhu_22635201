import { useState } from "react";

const EditDetail = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [orderValue, setOrderValue] = useState(0);
  const [orderDate, setOrderDate] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = () => {
    console.log("Updated order:", {
      customerName: name,
      company,
      orderValue,
      orderDate,
      status,
    });

    alert("Thông tin đã được ghi nhận");
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === "modalOverlay") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      id="modalOverlay"
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-white/20 backdrop-blur-xs flex items-center justify-center z-50"
    >
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-6">Update Orders</h2>
        </div>
        <div>
          <label>Customer Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="customerName..."
            className="border border-gray-300 px-3 py-2 w-full mb-4 rounded"
          />
        </div>
        <div>
          <label>Company</label>
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            type="text"
            placeholder="company..."
            className="border border-gray-300 px-3 py-2 w-full mb-4 rounded"
          />
        </div>
        <div>
          <label>Order Value</label>
          <input
            value={orderValue}
            onChange={(e) => setOrderValue(Number(e.target.value))}
            type="number"
            placeholder="orderValue..."
            className="border border-gray-300 px-3 py-2 w-full mb-4 rounded"
          />
        </div>

        <div>
          <label>Order Date</label>
          <input
            value={orderDate}
            onChange={(e) => setOrderDate(e.target.value)}
            type="date"
            className="border border-gray-300 px-3 py-2 w-full mb-4 rounded"
          />
        </div>

        <div>
          <label>Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border border-gray-300 px-3 py-2 w-full mb-4 rounded"
          >
            <option value="">-- Chọn trạng thái --</option>
            <option value="New">New</option>
            <option value="In-progress">In-progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
          >
            Đóng
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded bg-[#E64F84] text-white hover:bg-[#ff1491]"
          >
            Ghi nhận
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditDetail;
