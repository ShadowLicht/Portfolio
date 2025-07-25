
import { useState } from "react"
import { Building2, Calendar, MapPin } from "lucide-react"

const ExperienceCard = ({ experience, index, dela, isMobile = false }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className={`${isMobile ? "w-full" : "w-64 lg:w-80 mx-2 lg:mx-4"}`}
            data-aos="fade-down"
            data-aos-duration={dela}
        >
            {/* Experience card */}
            <div
                className={`bg-white rounded-xl shadow-lg border border-gray-200 p-4 md:p-6 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl ${experience.current ? "ring-2 ring-green-500 ring-opacity-50" : ""
                    }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Current badge */}
                {experience.current && (
                    <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 md:px-3 py-1 rounded-full">
                        Current
                    </div>
                )}

                {/* Company and role */}
                <div className="mb-3 md:mb-4">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 leading-tight">{experience.role}</h3>
                    <div className="flex items-center text-blue-600 font-semibold mb-2">
                        <Building2 className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="truncate">{experience.company}</span>
                    </div>
                </div>

                {/* Duration and location */}
                <div className="space-y-2 mb-3 md:mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="text-xs md:text-sm">
                            {experience.startDate} - {experience.endDate}
                        </span>
                    </div>
                    <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="text-xs md:text-sm">{experience.location}</span>
                    </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">{experience.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {experience.skills.map((skill, skillIndex) => (
                        <span
                            key={skillIndex}
                            className="bg-gray-100 text-gray-700 px-2 md:px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default ExperienceCard