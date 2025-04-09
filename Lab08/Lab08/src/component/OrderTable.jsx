import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AddDetail from "../component/AddDetail";
import EditDetail from "../component/EditDetail";

const OrderDetail = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 6;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const fetchOrderData = async () => {
    fetch("http://localhost:3001/orders")
      .then((response) => response.json())
      .then((data) => setOrders(data));
  };

  const itemStatus = (status) => {
    if (status === "New") return "text-blue-700 bg-blue-100";
    else if (status === "In-progress") return "text-yellow-700 bg-yellow-100";
    else return "text-green-700 bg-green-100";
  };

  useEffect(() => {
    fetchOrderData();
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
              <td className="p-3">
                <input type="checkbox" className="w-3 h-3 accent-pink-600" />
              </td>

              <td className="px-4 py-3 font-bold">CUSTOMER NAME</td>
              <td className="px-4 py-3 font-bold">COMPANY</td>
              <td className="px-4 py-3 font-bold">ORDER VALUE</td>
              <td className="px-4 py-3 font-bold">ORDER DATE</td>
              <td className="px-4 py-3 font-bold">STATUS</td>
              <td className="px-4 py-3 font-bold"></td>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index}>
                <td className="p-3">
                <input type="checkbox" className="w-3 h-3 accent-pink-600" />
              </td>

                <td className="px-4 py-3 font-medium">{item.customerName}</td>
                <td className="px-4 py-3">{item.company}</td>
                <td className="px-4 py-3">${item.orderValue}</td>
                <td className="px-4 py-3 text-gray-400">{item.orderDate}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2.5 py-1.5 rounded-xl text-xs font-medium ${itemStatus(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-3 cursor-pointer">
                  <img
                    onClick={() => handleEditClick(item.id)}
                    src={"./create.png"}
                    alt="create"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-5 flex flex-col items-center justify-center gap-2">

        <div className="flex items-center space-x-2">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-md border text-sm font-medium ${currentPage === 1
              ? "text-gray-400 border-gray-300 cursor-not-allowed"
              : "hover:bg-gray-100 text-gray-700 border-gray-300"
              }`}
          >
            <ChevronLeft size={18} />
          </button>


          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            return (
              <button
                key={page}
                onClick={() => paginate(page)}
                className={`px-3 py-1 rounded-md text-sm font-medium border transition-all duration-200 ${page === currentPage
                  ? "bg-[#E64F84] text-white border-[#E64F84]"
                  : "text-gray-700 hover:bg-gray-100 border-gray-300"
                  }`}
              >
                {page}
              </button>
            );
          })}

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded-md border text-sm font-medium ${currentPage === totalPages
              ? "text-gray-400 border-gray-300 cursor-not-allowed"
              : "hover:bg-gray-100 text-gray-700 border-gray-300"
              }`}
          >
            <ChevronRight size={18} />
          </button>

        </div>
        <p className="text-sm text-gray-600">
          {orders.length} results — Page {currentPage} of {totalPages}
        </p>
      </div>


      <AddDetail
        fetchOrderData={fetchOrderData}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {editModal && selectedOrderId !== null && (
        <EditDetail
          fetchOrderData={fetchOrderData}
          id={selectedOrderId}
          isOpen={editModal}
          onClose={() => setEditModal(false)}
        />
      )}
    </div>
  );
};

export default OrderDetail;
