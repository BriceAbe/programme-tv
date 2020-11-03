import "./App.css";
import data from "./data.json";
import Header from "./Header";
import Programme from "./Programme";
import Line from "./Line";
import logo from "./im.svg";

function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      {data.map((item) => {
        return (
          <>
            <Programme data={item} /> <Line />
          </>
        );
      })}
    </div>
  );
}

export default App;
