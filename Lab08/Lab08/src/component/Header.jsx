import { useEffect, useState } from "react";

const Header = () => {
    const [overview, setOverview] = useState(null);

    useEffect(() => {
        const fetchOverview = async () => {
            try {
                const response = await fetch("http://localhost:3001/overview");
                const data = await response.json();
                setOverview(data);
            } catch (error) {
                console.error("Lỗi khi fetch du lieu:", error);
            }
        };

        fetchOverview();
    }, []);
    return (
        <>
            <div className="flex justify-between p-5 border-b border-gray-300">
                <p className="text-2xl font-bold text-[#E64F84]">Dashboard</p>
                <div className="flex items-center gap-5">
                    <div className="flex item-center gap-3 bg-[#F3F4F6] px-3 py-1.5 rounded">
                        <img style={{ height: 24, width: 24 }} src="./Search.png" alt="Search" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="outline-none w-[250px]"
                        />
                    </div>
                    <img src="./Bell_1.png" alt="Bell" />
                    <img src="./Question_1.png" alt="Question" />
                    <img src="./Avatar_6.png" alt="Avatar" />
                </div>
            </div>

            <div className="p-5">
                <div className="flex items-center gap-3">
                    <img src="./Squares_four_1.png" alt="Squares" />
                    <p className="text-2xl font-bold">Overview</p>
                </div>
            </div>

            <div className="flex gap-12 p-5">
                <div className="flex items-start gap-30 p-5 bg-[#FFF0F5] rounded-md">
                    <div className="flex flex-col gap-2 ml-3 w-35">
                        <p className="text-lg font-medium">Turnover</p>
                        <p className="text-3xl font-bold">
                            ${overview?.turnover?.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-500 whitespace-nowrap">
                            <span className="text-green-700 font-bold">{overview?.turnoverChange}%</span> period of change
                        </p>

                    </div>
                    <img src={overview?.turnoverImg} alt="Turnover" />
                </div>

                <div className="flex items-start gap-30 p-5 bg-[#EFF6FF] rounded-md">
                    <div className="flex flex-col gap-2 ml-3 w-35">
                        <p className="text-lg font-medium">Profit</p>
                        <p className="text-3xl font-bold">
                            ${overview?.profit?.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-500 whitespace-nowrap">
                            <span className="text-green-700 font-bold">{overview?.profitChange}%</span>{" "}
                            period of change
                        </p>
                    </div>

                    <img src={overview?.profitImg} alt="Profit" />
                </div>

                <div className="flex items-start gap-30 p-5 bg-[#F0F7FD] rounded-md">
                    <div className="flex flex-col gap-2 ml-3 w-35">
                        <p className="text-lg font-medium">New customer</p>
                        <p className="text-3xl font-bold">{overview?.newCustomer}</p>
                        <p className="text-sm text-gray-500 whitespace-nowrap">
                            <span className="text-green-700 font-bold">{overview?.customerChange}%</span> period of change
                        </p>
                    </div>
                    <img src={overview?.customerImg} alt="New customer" />
                </div>
            </div>
        </>
    );
};

export default Header;
