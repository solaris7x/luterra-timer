import Timer from "./components/Timer";
import NavBar from "./layout/NavBar";
const App = () => {
  return (
    <div className="App">
      <div
        className="h-screen w-full bg-cover"
        style={{ backgroundImage: `url(/assets/images/background1.webp)` }}
      >
        <NavBar />
        <Timer />
      </div>
    </div>
  );
};

export default App;
