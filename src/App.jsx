import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
