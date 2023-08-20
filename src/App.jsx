import "./App.css";
import { CardToday } from "./components/CardToday";
import { CardWeather } from "./components/CardWeather";

function App() {
  return (
    <div className="main">
      <CardToday />
      <div className="infoApp">
        <CardWeather />
      </div>
    </div>
  );
}

export default App;
