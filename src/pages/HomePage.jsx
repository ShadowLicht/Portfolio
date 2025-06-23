import NavBar from "../components/NavBar"
import Hero from "../components/Hero"
import About from "../components/About"
import Experience from "../components/Experience"
import Project from "../components/Project"
const HomePage = () => {
    return (
        <div className="flex flex-col h-screen bg-gray-50 ">
            <NavBar />

            <Hero />
            <About />
            <Experience />
            <Project />
        </div>
    )
}

export default HomePage