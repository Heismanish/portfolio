import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-gray-100 dark:bg-gray-900   ">
        <Hero></Hero>
        <About></About>
        <Projects></Projects>
        <Blogs></Blogs>
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
