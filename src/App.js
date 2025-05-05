import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';

function App() {
  const apiKey = "a5ad92a3c3cc4a35860bce9730bed3dd";
  const categories = ["Business", "Entertainment", "Health", "Science", "Sports", "Technology",];
  return (
    <>
    <Navbar categories={categories} />
    <News pageSize={10} apiKey={apiKey} category="technology" />
    </>
  );
}

export default App;
