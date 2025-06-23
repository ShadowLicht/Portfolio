import ProjectCard from "./ProjectCard"
import { Element } from 'react-scroll';
const projects = [
    {
        title: "Intelligent Tutoring System",
        description:
            "An adaptive learning platform designed to assess and improve student mastery using Bayesian Knowledge Tracing. Features include dynamic question generation, performance tracking, faculty- authored solutions, and mastery - based progression.",
        image: "/ITS.png",
        technologies: ["React", "Laravel", "Tailwind CSS", "MySQL"],
        githubUrl: "#",
        liveUrl: "#",
        featured: true,
    },
    {
        title: "Inventory Management System",
        description:
            "A standalone Java desktop application for inventory management, tailored to the department's internal operations.",
        image: "/dp.png",
        technologies: ["Java", "JavaFX", "CSS", "Sqlite"],
        githubUrl: "#",
    },
    {
        title: "ChatRecipe",
        description:
            "An AI-powered recipe tool that allows users to generate, customize, and interact with recipes through natural language. ",
        image: "/chatrecipe.png",
        technologies: ["React", "JavaScript", "Gemini API", "Tailwind CSS"],
        githubUrl: "https://github.com/ShadowLicht/ChatRecipe",
        liveUrl: "https://chat-recipe-six.vercel.app/",
    },
    {
        title: "WeNote",
        description:
            "A personal note-taking application with support for real-time editing. Built with a clean, intuitive interface for managing tasks",
        image: "/wenote.png",
        technologies: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS", "Git", "Render"],
        githubUrl: "https://github.com/ShadowLicht/WeNote",
        liveUrl: "https://wenote-bzuk.onrender.com/",
    },
    {
        title: "QrGen",
        description:
            "A customizable QR code generator with support for logos, color themes, and downloadable formats. Designed for quick and flexible creation of branded QR codes",
        image: "/qrgen.png",
        technologies: ["React", "Javascript", "Render", "Git", "Tailwind CSS"],
        githubUrl: "https://github.com/ShadowLicht/QrGen",
        liveUrl: "https://qrgen-suz2.onrender.com/",
    },
    {
        title: "Youtube Downloader",
        description:
            "A simple and efficient YouTube video downloader that allows users to download videos in various formats and resolutions.",
        image: "/placeholder.svg?height=300&width=500",
        technologies: ["React", "Node.js", "Express", "yt-dlp", "Tailwind CSS"],
        githubUrl: "#",
    },
]

export default function Project() {
    return (
        <Element name="project">
            <section id="projects" className="py-20 bg-gray-50 min-h-screen overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Here are some of my recent projects that showcase my skills and passion for creating innovative solutions.
                        </p>
                        <div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                image={project.image}
                                technologies={project.technologies}
                                githubUrl={project.githubUrl}
                                liveUrl={project.liveUrl}
                                featured={project.featured}
                            />
                        ))}
                    </div>

                    {/* View More Button */}
                    <div className="text-center mt-12">
                        <button className="inline-flex items-center gap-2 px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105 shadow-lg">
                            <span>View All Projects</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </Element>
    )
}
