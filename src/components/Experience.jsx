import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, Calendar, MapPin, Building2 } from "lucide-react"
import ExperienceCard from "./ExperienceCard"
import { Element } from 'react-scroll';
const workExperiences = [
    {
        id: 1,
        company: "SmartBridge",
        role: "Salesforce Intern",
        location: "Remote",
        startDate: "Mar 2025",
        endDate: "May 2025",
        description:
            "Completed Superbadge unit on Trailhead and a capstone project using Salesforce. Applied CRM features to solve real-world problems and gained hands-on experience in automation.",
        skills: ["LWC", "Apex", "Automation", "Visualforce", "Agentforce"],
        current: false,
    },
    {
        id: 2,
        company: "Accenture Technology Academy",
        role: "AWS Cloud Intern",
        location: "Remoter",
        startDate: "Oct 2024",
        endDate: "Mar 2025",
        description:
            "Completed hands-on labs and real-world case studies on AWS. Gained experience in deploying scalable cloud solutions and applying best practices in architecture, security, and operations.",
        skills: ["Cloud Architecting", "Cloud Foundation", "Cloud Developing", "Cloud Operation"],
        current: false,
    },
    {
        id: 3,
        company: "Freelance",
        role: "Software Developer",
        location: "Naga City",
        startDate: "Mar 2023",
        endDate: "Jun 2023",
        description:
            "Developed an inventory management system for a DPWH staff. Implemented item tracking, user roles, and reporting features while ensuring responsive design and secure data handling.",
        skills: ["Java", "JavaFX", "Sqlite", "OOP", "MVC"],
        current: false,
    },



]



const Experience = () => {
    const scrollContainerRef = useRef(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    const checkScrollButtons = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
            setCanScrollLeft(scrollLeft > 0)
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
        }
    }

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -320,
                behavior: "smooth",
            })
        }
    }

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 320,
                behavior: "smooth",
            })
        }
    }

    useEffect(() => {
        checkScrollButtons()
        const handleScroll = () => checkScrollButtons()

        if (scrollContainerRef.current) {
            scrollContainerRef.current.addEventListener("scroll", handleScroll)
            return () => {
                if (scrollContainerRef.current) {
                    scrollContainerRef.current.removeEventListener("scroll", handleScroll)
                }
            }
        }
    }, [])

    return (
        <>
            {/* Header */}
            <Element name="experience">
                < section className="py-20  min-h-screen overflow-hidden" >
                    <div className="text-center mb-12">
                        <h1 className=" text-4xl font-bold text-gray-900 mb-4">Work Experience Journey</h1>
                        <p className="text-lg text-gray-600 ">My professional career progression and achievements</p>
                    </div>


                    {/* Timeline container */}
                    < div className="relative" >
                        {/* Scroll buttons */}
                        < button
                            onClick={scrollLeft}
                            disabled={!canScrollLeft}
                            className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-30 p-2 rounded-full shadow-lg transition-all duration-200 ${canScrollLeft
                                ? "bg-white text-gray-700 hover:bg-gray-50 hover:shadow-xl"
                                : "bg-gray-200 text-gray-400 cursor-not-allowed"
                                }`}
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button >

                        <button
                            onClick={scrollRight}
                            disabled={!canScrollRight}
                            className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-30 p-2 rounded-full shadow-lg transition-all duration-200 ${canScrollRight
                                ? "bg-white text-gray-700 hover:bg-gray-50 hover:shadow-xl"
                                : "bg-gray-200 text-gray-400 cursor-not-allowed"
                                }`}
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Timeline line */}
                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent z-10"></div>

                        {/* Scrollable timeline */}
                        <div
                            ref={scrollContainerRef}
                            className={`flex w-full pt-8 pb-4 ${workExperiences.length < 5 ? "justify-center overflow-hidden" : "overflow-x-auto"
                                } no-scrollbar`}
                        >

                            <div className={`flex gap-3 ${workExperiences.length < 5 ? "" : "min-w-max px-12"}`}>
                                {workExperiences.map((experience, index) => (
                                    <ExperienceCard key={experience.id} experience={experience} index={index} dela={1000 + index * 1000} />
                                ))}
                            </div>


                        </div>

                        {/* Progress indicator */}
                        <div className="flex justify-center mt-8 space-x-2">
                            {workExperiences.map((_, index) => (
                                <div key={index} className="w-2 h-2 rounded-full bg-gray-300 transition-colors duration-200"></div>
                            ))}
                        </div>
                    </div >
                </section >
            </Element>

        </>
    )
}

export default Experience
