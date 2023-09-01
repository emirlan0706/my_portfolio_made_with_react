import "./styles/style.scss";
import Nav from "./components/Nav.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="page">
        <Home />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
