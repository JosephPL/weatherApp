import "./App.css";
import { CardToday } from "./components/CardToday";
import { CardWeather } from "./components/CardWeather";

function App() {
  return (
    <>
      <CardToday />
      <div className="infoApp">
        <CardWeather />
        <h2>Today’s Hightlights</h2>
      </div>
    </>
  );
}

export default App;
