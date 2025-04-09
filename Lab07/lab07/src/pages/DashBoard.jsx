import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


const DashBoard = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const itemPerPage = 6;

  useEffect(() => {

    fetch("/database/overview.json")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data.orders || []);
      })
      .catch((err) => console.error("Lỗi khi tải dữ liệu:", err));
  }, []);

  const totalPages = Math.ceil(orders.length / itemPerPage);
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = orders.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleEditClick = (id) => {
    setSelectedOrderId(id);
    setEditModal(true);
  };

  const itemStatus = (status) => {
    if (status === "New") return "text-blue-700 bg-blue-100";
    else if (status === "In-progress") return "text-yellow-700 bg-yellow-100";
    else return "text-green-700 bg-green-100";
  };

  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div className="text-2xl font-bold flex gap-4 w-80">
          <img src={"./File_text_1.png"} alt="File_text_1" />
          <p>Detailed report</p>
        </div>
        <div className="flex gap-5">
          <button
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer flex items-center gap-3 px-3 py-1.5 text-[#E64F84] border border-[#E64F84] rounded-md"
          >
            <img src={"./Download.png"} alt="Download" />
            <p>Import</p>
          </button>
          <button className="flex items-center gap-3 px-3 py-1.5 cursor-pointer text-[#E64F84] border border-[#E64F84] rounded-md">
            <img src={"./Move_up.png"} alt="Move_up" />
            <p>Export</p>
          </button>
        </div>
      </div>

      <div className="mt-7">
        <table className="min-w-full border border-gray-300 rounded-sm border-separate">
          <thead>
            <tr className="text-gray-500">
              <td className="p-3"><input type="checkbox" /></td>
              <td className="px-4 py-3 font-bold">CUSTOMER NAME</td>
              <td className="px-4 py-3 font-bold">COMPANY</td>
              <td className="px-4 py-3 font-bold">ORDER VALUE</td>
              <td className="px-4 py-3 font-bold">ORDER DATE</td>
              <td className="px-4 py-3 font-bold">STATUS</td>
              <td className="px-4 py-3 font-bold"></td>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id}>
                <td className="p-3"><input type="checkbox" /></td>
                <td className="px-4 py-3 font-medium">{item.customerName}</td>
                <td className="px-4 py-3">{item.company}</td>
                <td className="px-4 py-3">${item.orderValue}</td>
                <td className="px-4 py-3 text-gray-400">{item.orderDate}</td>
                <td className="px-4 py-3">
                  <span className={`px-2.5 py-1.5 rounded-xl text-xs font-medium ${itemStatus(item.status)}`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-3 cursor-pointer">
                  <img onClick={() => handleEditClick(item.id)} src={"./create.png"} alt="create" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-5 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-600">{orders.length} results</p>

        <div className="flex items-center justify-center space-x-2">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1.5 rounded-md border transition ${currentPage === 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white hover:bg-gray-100 text-gray-700"
              }`}
          >
            <ChevronLeft size={18} />
          </button>

          {[...Array(totalPages).keys()].map((num) => {
            const page = num + 1;
            return (
              <button
                key={page}
                onClick={() => paginate(page)}
                className={`px-3 py-1.5 rounded-md text-sm border transition ${currentPage === page
                    ? "bg-[#E64F84] text-white"
                    : "bg-white hover:bg-gray-100 text-gray-700"
                  }`}
              >
                {page}
              </button>
            );
          })}

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1.5 rounded-md border transition ${currentPage === totalPages
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white hover:bg-gray-100 text-gray-700"
              }`}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {editModal && selectedOrderId !== null && (
        <EditModal id={selectedOrderId} isOpen={editModal} onClose={() => setEditModal(false)} />
      )}
    </div>
  );
};

export default DashBoard;
