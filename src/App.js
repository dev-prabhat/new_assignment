import Header from "./Components/Header";
import MenuSection from "./Components/MenuSection";
import NavBar from "./Components/NavBar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <MenuSection />
    </div>
  );
}
