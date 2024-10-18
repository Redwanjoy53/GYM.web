import Navbar from "./components/Navbar.Jsx";
import Hero from "./components/Hero/Hero";
import { Equipment } from "./components/Equipment/Equipment";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Equipment />
    </div>
  );
}

export default App;
