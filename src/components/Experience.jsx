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
                <section className="py-12 md:py-20 min-h-screen overflow-hidden px-4 md:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-8 md:mb-12">
                        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">Work Experience Journey</h1>
                        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                            My professional career progression and achievements
                        </p>
                    </div>

                    {/* Mobile Layout - Vertical Timeline */}
                    <div className="block md:hidden">
                        <div className="relative">
                            {/* Vertical timeline line */}
                            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-500"></div>

                            <div className="space-y-8">
                                {workExperiences.map((experience, index) => (
                                    <div key={experience.id} className="relative">
                                        {/* Timeline dot */}
                                        <div className="absolute left-4 top-6 z-20">
                                            <div
                                                className={`w-4 h-4 rounded-full border-4 border-white shadow-lg transition-all duration-300 ${experience.current ? "bg-green-500 ring-4 ring-green-200" : "bg-blue-500"
                                                    }`}
                                            ></div>
                                        </div>

                                        {/* Card */}
                                        <div className="ml-12">
                                            <ExperienceCard experience={experience} index={index} dela={1000 + index * 200} isMobile={true} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Desktop/Tablet Layout - Horizontal Timeline */}
                    <div className="hidden md:block">
                        <div className="relative">
                            {/* Scroll buttons */}
                            <button
                                onClick={scrollLeft}
                                disabled={!canScrollLeft}
                                className={`absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 z-30 p-2 rounded-full shadow-lg transition-all duration-200 ${canScrollLeft
                                    ? "bg-white text-gray-700 hover:bg-gray-50 hover:shadow-xl"
                                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                                    }`}
                            >
                                <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
                            </button>

                            <button
                                onClick={scrollRight}
                                disabled={!canScrollRight}
                                className={`absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 z-30 p-2 rounded-full shadow-lg transition-all duration-200 ${canScrollRight
                                    ? "bg-white text-gray-700 hover:bg-gray-50 hover:shadow-xl"
                                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                                    }`}
                            >
                                <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
                            </button>

                            {/* Timeline line */}
                            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent z-10"></div>

                            {/* Scrollable timeline */}
                            <div
                                ref={scrollContainerRef}
                                className={`flex w-full pt-8 pb-4 ${workExperiences.length < 4 ? "justify-center overflow-hidden" : "overflow-x-auto"
                                    } no-scrollbar`}
                            >
                                <div className={`flex gap-4 lg:gap-6 ${workExperiences.length < 4 ? "" : "min-w-max px-8 lg:px-12"}`}>
                                    {workExperiences.map((experience, index) => (
                                        <div key={experience.id} className="relative flex-shrink-0">
                                            {/* Timeline dot */}
                                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                                                <div
                                                    className={`w-4 h-4 rounded-full border-4 border-white shadow-lg transition-all duration-300 ${experience.current ? "bg-green-500 ring-4 ring-green-200" : "bg-blue-500 hover:bg-blue-600"
                                                        }`}
                                                ></div>
                                            </div>

                                            <ExperienceCard experience={experience} index={index} dela={1000 + index * 200} isMobile={false} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Progress indicator */}
                            <div className="flex justify-center mt-6 lg:mt-8 space-x-2">
                                {workExperiences.map((_, index) => (
                                    <div key={index} className="w-2 h-2 rounded-full bg-gray-300 transition-colors duration-200"></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </Element>

        </>
    )
}

export default Experience
