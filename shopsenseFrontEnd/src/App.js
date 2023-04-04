import "./App.css";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/home";
import About from "./routes/about";
import Project from "./routes/project";
import Contact from "./routes/contact";
import Signup from "./routes/Signup";
import Signin from "./routes/Signin";
import Hero  from "./components/Hero";
import Dashboard from "./components/Dashboard";
import Profile from "./routes/profile";
import Mobilepageoneadmin from "./routes/Mobilepageoneadmin";
import Mobilepageone from "./routes/Mobilepageone";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/about" element={ <About />}/>
        <Route path="/projects" element={ <Project/>}/>
        <Route path="/contact" element={ <Contact />}/>
        <Route path="/signup"  element={<Signup/>} />
        <Route path="/signin"  element={<Signin/>} />
        <Route path="/dashboard"  element={<Dashboard/>} />
        <Route path="/profile" element={<Profile/>} />
       <Route path="/electronics/mobiles/admin" element={<Mobilepageoneadmin/>} />
       <Route path="/electronics/mobiles" element={<Mobilepageone/>} />
      </Routes>
     
    </div>
  );
}
