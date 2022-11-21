import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import { useState } from "react";
const categories = ["About Me", "Contact", "Portfolio", "Resume"];
function App() {
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (
    <>
      <Nav
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        categories={categories}
      />
    </>
  );
}

export default App;
