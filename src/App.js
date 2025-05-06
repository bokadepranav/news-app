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
  return (
    <>
      <Router>
        <Navbar categories={categories} />
        <Routes>
          {categories.map((category) => {
            return (
              <Route
                path={category === "general" ? "/" : "/" + category}
                element={
                  <News
                    key={category}
                    pageSize={10}
                    apiKey={apiKey}
                    category={category}
                  />
                }
              />
            );
          })}
        </Routes>
      </Router>
    </>
  );
}

export default App;
