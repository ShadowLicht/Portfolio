import { useEffect } from "react";
import { Route, Routes } from "react-router";
import HomePage from './pages/HomePage';
import AOS from 'aos';
import 'aos/dist/aos.css';
const App = () => {
  useEffect(() => {

    AOS.init();
  }, []);
  return (
    <>
      <div className="relative h-full w-full ">
        <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] 
  bg-[length:16px_16px] 
  [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)]">
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </>
  )
}

export default App