import NavBar from "@/components/nav";
import Home from "@/components/Home";
import Benefits from "@/components/Benefits";
import OurClasses from "@/components/OurClasses";
import ContactUs from "@/components/contact";


function App() {

  return (
    <div className="app bg-neutral-50 text-gray-600">
      <NavBar/>
      <Home/>
      <Benefits/>
      <OurClasses/>
      <ContactUs/>
    </div>
  )
}

export default App
