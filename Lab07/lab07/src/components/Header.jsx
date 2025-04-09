
const Header = () => {
    return (
        <>
            <div className="flex justify-between p-5 border-b border-gray-300">
                <p className="text-2xl font-bold text-[#E64F84]">Dashboard</p>
                <div className="flex items-center gap-5">
                    <div className="flex item-center gap-3 bg-[#F3F4F6] px-3 py-1.5 rounded">
                        <img style={{height:24, width:24}} src={"./Search.png"} alt="Search" />
                        <input type="text" placeholder="Search..." className="outline-none w-[250px]" />
                    </div>
                    <img src={"./Bell_1.png"} alt="Bell_1" />
                    <img src={"./Question_1.png"} alt="Question_1" />
                    <img src={"./Avatar_6.png"} alt="Avatar_6" />
                </div>
            </div>
            <div className="p-5">
                <div className="flex items-center gap-3">
                    <img src={"./Squares_four_1.png"} alt="Squares_four_1" />
                    <p className="text-2xl font-bold">Overview</p>
                </div>
            </div>
            <div className="flex gap-12 p-5">
                    <div className="flex items-start gap-30 p-5 bg-[#FFF0F5] rounded-md">
                        <div className="flex flex-col gap-2">
                            <p className="text-lg font-medium">Turnover</p>
                            <p className="text-3xl font-bold">$92,405</p>
                            <p className="text-sm text-gray-500"><span className="text-green-700 font-bold">5.39%</span> period of change</p>
                        </div>
                        <img src={"./giohang.png"} alt="giohang" />
                    </div>
                    <div className="flex items-start gap-30 p-5 bg-[#EFF6FF] rounded-md">
                        <div className="flex flex-col gap-2">
                            <p className="text-lg font-medium">Profit</p>
                            <p className="text-3xl font-bold">$32,218</p>
                            <p className="text-sm text-gray-500"><span className="text-green-700 font-bold">5.39%</span> period of change</p>
                        </div>
                        <img src={"./dola.png"} alt="dola" />
                    </div>
                    <div className="flex items-start gap-30 p-5 bg-[#F0F7FD] rounded-md">
                        <div className="flex flex-col gap-2">
                            <p className="text-lg font-medium">New customer</p>
                            <p className="text-3xl font-bold">298</p>
                            <p className="text-sm text-gray-500"><span className="text-green-700 font-bold">6.84%</span> period of change</p>
                        </div>
                        <img src={"./user.png"} alt="user" />
                    </div>
                </div>
        </>
    )
}

export default Header;