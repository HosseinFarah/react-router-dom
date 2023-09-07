import "./App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Navbar } from "./Pages/Navbar";
import { FooterPage } from "./Pages/FooterPage";
import Error from "./Pages/Error";
import { Profiles } from "./Pages/Profiles";
function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/profile/:name?/:id?" element={<Profiles/>}/>
      <Route path="*" element={<Error/>}></Route>
    </Routes>
    <FooterPage/>
  </BrowserRouter>
    </div>
  );
}
export default App;
