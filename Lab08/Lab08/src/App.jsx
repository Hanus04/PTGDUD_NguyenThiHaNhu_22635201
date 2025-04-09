import Header from "./component/Header";
import Menu from "./component/Menu";
import OrderTable from "./component/OrderTable";


const App = () => {
  return (

    <div className="grid grid-cols-[2fr_8fr]">
      <div>
        <Menu />
      </div>
      <div>
        <Header />
        <OrderTable/>

      </div>
    </div>

  );
};

export default App;
