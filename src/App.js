import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const apiKey = "a5ad92a3c3cc4a35860bce9730bed3dd";
  const categories = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];
  const pageSize = 10;

  const [mode, setMode] = useState("light");

  useEffect(() => {
    document.body.classList.remove(`bg-${mode === "light" ? "dark" : "light"}`);
    document.body.classList.add(`bg-${mode}`);
  }, [mode])

  const modeHandler = () => {
    if(mode === "light")
    {
      setMode("dark");
    }
    else{
      setMode("light")
    }
  }
  
  return (
    <div className={`bg-${mode}`}>
      <Router>
        <Navbar categories={categories} mode={mode} modeHandler={modeHandler} />
        <Routes>
          {categories.map((category) => {
            return (
              <Route
                path={category === "general" ? "/" : "/" + category}
                element={
                  <News
                    key={category}
                    pageSize={pageSize}
                    apiKey={apiKey}
                    category={category}
                    mode={mode}
                  />
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
