import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import Hero from "./Component/Hero/Hero";
import Mywork from "./Component/Mywork/Mywork";
import Navbar from "./Component/Navbar/Navbar";
import Service from "./Component/Service/Service";

function App() {
  return (
    <div className="App">
      <header className="App-header">
     <Navbar/>
     <Hero/>
     <About/>
     <Service/>
     <Mywork/>
     <Contact/>
     <Footer/>
      </header>
    </div>
  );
}

export default App;
