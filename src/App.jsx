import { dimensionValueTypes } from "framer-motion";
import CustomCursor from "./components/CustomCursor";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Navbar from "./components/Navbar";
import React from "react";
import IntroAnimation from "./components/IntroAnimation";
// import ParticlesBackground from "./components/ParticlesBackground";


export default function App(){
  const [introDone, setIntroDone] = React.useState(false);
  return(
    <>
    {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)}/>}
      {introDone && (
<div className="relative gradient text-white">
<CustomCursor/>
{/* <ParticlesBackground/> */}
<Navbar/>
<Home/>
<About/>
<Skills/>
<Projects/>
<Experience/>
<Testimonials/>
<Contact/>
<Footer/>
</div>
      )}
</>
  )
}
