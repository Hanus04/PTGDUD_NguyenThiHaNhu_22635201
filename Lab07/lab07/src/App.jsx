
import Header from "./components/Header";
import Menu from "./components/Menu";

const App = () => {
  return (
    <div className="grid grid-cols-[2fr_8fr]">
      <div>
        <Menu />
      </div>
      <div>
        <Header />
      
      </div>
    </div>
  )
}

export default App;