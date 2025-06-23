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
        <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]" />
        </div>



        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </>
  )
}

export default App