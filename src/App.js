import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather />
        <footer>
          This project was coded by Daria Mikita
          <a
            href="https://github.com/nauticalstars/my-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            My GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
